Class PSMultithread {
    $MaxThreads = 16
    [System.Management.Automation.Runspaces.RunspacePool] $RunspacePool 
    [powershell] $PowerShell
    $backgroundJobList

    PSMultithread(){
        $this.setUpMultiThreadedRunspacePool()
    }

    [void] setUpMultiThreadedRunspacePool(){
        # Set up our multi threaded operations
        $this.RunspacePool = [runspacefactory]::CreateRunspacePool(1, $this.MaxThreads)
        $this.Powershell = [powershell]::Create()
        $this.PowerShell.RunspacePool = $this.RunspacePool
        $this.RunspacePool.Open()
        $this.backgroundJobList = @{}
    }

    [System.Collections.ArrayList] getJobResults($jobName){
        [System.Collections.ArrayList] $result = New-Object -TypeName System.Collections.ArrayList
        
        if($jobName.Length -lt 2){
            Write-Debug "Missing jobName!"
            return $result
        }
        if(!$this.backgroundJobList.$jobName){
            Write-Debug "No job exists with the name $jobName"
            return $result
        }
        if($this.backgroundJobList.$jobName.job.IsCompleted) {
            $result = @{
                $jobName = $this.backgroundJobList.$jobName.script_obj.EndInvoke($this.backgroundJobList.$jobName.job)
            }
            $this.backgroundJobList.$jobName.script_obj.Dispose() 
            $this.backgroundJobList.Remove($jobName)
            
        } else {
            Write-Debug "Waiting on $jobName to complete..."
        }
        return $result
    }

    [bool] runMultithreadedOperation( $ScriptBlock ,$Arguments, $jobName ) {

        [bool] $successfullyAddedJob = $false
        
        if( $jobName.Length -lt 2) {
            Write-Verbose "Missing jobName!"
            return $successfullyAddedJob
        }

        if($this.backgroundJobList.$jobName){
            if(!($this.backgroundJobList.$jobName.job.IsCompleted)){
                Write-Verbose "Found background job for $jobName already running! Waiting for it to complete..."
            } else {
                Write-Verbose "Background job for $jobName already completed"
            }
            return $successfullyAddedJob
        }
        $auditJobObj = [PowerShell]::Create().AddScript($ScriptBlock)
                
        $auditJobObj.RunspacePool = $this.RunspacePool
        # Add args to background job
        $Arguments | ForEach-Object { $auditJobObj.AddArgument($_) | Out-Null}
        
        $this.backgroundJobList += @{
            $jobName = @{
                job = $auditJobObj.BeginInvoke()
                script_obj = $auditJobObj
            }                            
        }
        if($this.backgroundJobList.$jobName){ $successfullyAddedJob = $true }

        return $successfullyAddedJob
    }
}

function New-PSMultithread(){
    return [PSMultithread]::new()
}