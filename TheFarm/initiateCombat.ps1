function initiateCombat(){
    
    $attacker = $args[0]
    $defender = $args[1]
    [bool] $newb = $args[2]
    $token = $args[3]

    $prefix = 'https://api2.zoogame.finance/api/pvp'
    if($newb){
      $prefix = 'https://api2.zoogame.finance/api/pvpNewbie'
    } 
    $session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
    $session.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
    $response = Invoke-WebRequest -UseBasicParsing -Uri "$prefix/combat?player1=$attacker&player2=$defender&token=$token" `
    -WebSession $session `
    -Headers @{
    "Accept"="application/json, text/plain, */*"
      "Authorization"="Bearer $token"
      "Sec-GPC"="1"
      "Origin"="https://zoogame.app"
      "Sec-Fetch-Site"="cross-site"
      "Sec-Fetch-Mode"="cors"
      "Sec-Fetch-Dest"="empty"
      "Referer"="https://zoogame.app/"
      "Accept-Encoding"="gzip, deflate, br"
      "Accept-Language"="en-US,en;q=0.9"
    }
    return $response.Content
}
