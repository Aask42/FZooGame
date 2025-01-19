Import-Module .\predictOutcome.ps1 -Force
$start_time = get-date

clear-host
[bool] $done_playing = 0
[bool] $run = $true
while($run){
    $current_time = get-date
    $time_lapse = $current_time - $start_time
    $total_seconds = [Math]::Round($time_lapse.TotalSeconds)
    [System.Console]::SetCursorPosition(0,0)

    #$msg = "It's not time to play this game yet..."
    
    #if($total_seconds % 5 -eq 0){
    write-host "$total_seconds seconds have passed..."
    #}
    if($total_seconds % 10 -eq 0){
        if($current_time.Hour -eq 4){
            if($current_time.minute -ge 24){
                if($current_time.minute -lt 30){
                    Write-Host "Tick"
                    $ScriptBlock = {
                        set-location 'E:\Resilio\application_development\TheFarm'
                        .\autoCombat.ps1
                    }

                    Start-Job $ScriptBlock
                    
                    $msg = "LEEEEEROY JEEEEENKINSSSSSSSS!"
                }
            }
            
            if($current_time.minute -gt 29){
                $done_playing = 1
            }
        } 
        #write-host $msg
        if($msg.length -gt 0){
            write-output $msg | Out-File E:\Resilio\application_development\TheFarm\logs\log.txt -Append
        }

        if($done_playing){
            Write-Host "It was fun while it lasted today, we tried valiantly! Hopefully we won!"
            $run =$false
        }
    }

}