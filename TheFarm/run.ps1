$ScriptBlock = {
    set-location 'E:\Resilio\application_development\TheFarm'
    $result = .\autoCombat.ps1 
    Write-Output $($result | ConvertTo-JSON) | Out-File c:\temp\autocombatlogs.txt -Append
    Write-Output $($result | ConvertTo-JSON)
    return $($result | ConvertTo-JSON) 
}
# Start-Job $ScriptBlock

Import-Module .\psmultithread.psm1 -Force

$x = New-PSMultithread

$x.runMultithreadedOperation($ScriptBlock,"abc","test")

$x.getJobResults("test")