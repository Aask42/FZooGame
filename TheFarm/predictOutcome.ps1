function getOpponent(){
    $opponent = $args[0]
    $myAttackers = $args[1]
    $opponentID = $opponent.owner
    $opponentName = $opponent.nickname

    $ignoreList = @($userName,"Led","CryptoZ","ZooCrypt")

    if($nickname -in $ignoreList){continue}
    
    if($(Get-Content $commandsFile -ErrorAction SilentlyContinue) -like "*$opponentID*"){ continue }

    $opponentDefenders = $($opponent | Select-Object defenseCards).defenseCards
    
    if($opponentDefenders.Count -lt 3){
        #not a valid opponent
        continue
    }
    
    if($attackerStats.count -eq 0){
        $attackerStats = @()
        $myAttackers | % {  $attackerStats += getStats $_.teamId $_.rarity $_.computingPower $_.level }
        $myLife = $($attackerStats.live | Measure-Object -Sum).Sum
        $myAttack = $($attackerStats.attack | Measure-Object -Sum).Sum
        $myDefense = $($attackerStats.defense | Measure-Object -Sum).Sum
        $myCombatPower = $($attackerStats.power | Measure-Object -Sum).Sum
    }

    $defenderStats = @()
    $opponentDefenders | % {  $defenderStats += getStats $_.teamId $_.rarity $_.computingPower $_.level }
    
    $theirLife = $($defenderStats.live | Measure-Object -Sum).Sum
    $theirAttack = $($defenderStats.attack | Measure-Object -Sum).Sum
    $theirDefense = $($defenderStats.defense | Measure-Object -Sum).Sum
    $theirCombatPower = $($defenderStats.power | Measure-Object -Sum).Sum

    $myNumRounds = $myLife / ($theirAttack - $myDefense)
    $theirNumRounds = $theirLife / ($myAttack - $theirDefense)

    try{

        $wouldWeWin = predictOutcome $myAttackers $opponentDefenders
    }catch{
        $wouldWeWin = $false
    }
    $datetime = get-date -f yyyyMMdd_hh:mm:ss
    $msg = "$datetime Our rounds: $myNumRounds  | Their rounds: $theirNumRounds`n"
    $msg += "$datetime Our Combat Power: $myCombatPower  | Their Combat Power: $theirCombatPower`n"
    $msg += "$datetime Our Life: $myLife  | Their Life: $theirLife`n"
    $msg += "$datetime Our Defense: $myDefense  | Their Defense: $theirDefense`n"
    [System.Console]::SetCursorPosition(0,0)
    
    
    if($wouldWeWin -and (($myNumRounds - $theirNumRounds) -gt 0.5) -and ($theirNumRounds -gt 0)){
        $msg += "$datetime We can win this one! Gonna attempt to fight $opponentName...`n"
        Write-Host $msg -BackgroundColor DarkGreen -ForegroundColor White
        break;
    }else{
        $msg += "$datetime We would definitely lose this one to $opponentName....`n"
        Write-Host $msg -ForegroundColor Cyan

    }
    if($tab_counter -eq $data.count){
        Write-Host $msg
        Write-Host "There's no winning this time around, sorry girl..."
        break;
    }
    Write-Output $msg | Out-File $logFile -Append
}

if(!$stats_table){
    $stats_table = Get-Content .\upgradeTable.json | ConvertFrom-Json
}

function getStats(){
    # Get base stats
    $team_id = $args[0]
    $rarity = $args[1]
    $computing_power = $args[2]
    $level = $args[3]
    
    $card_stats = $stats_table | Where-Object -Property rarity -eq $rarity | Where-Object -Property teamId -eq $team_id

    $stats = @{
        "attack"=$card_stats.attack
        "live"=$card_stats.live
        "defense"=$card_stats.defense
        "fatal"=$card_stats.fatal
        "recover"=$card_stats.recover
        "computingPower"=$computing_power
    }

    if($rarity -ge 4){
        if($level -gt 1){
            $upgrade_mods = $card_stats.upgradeTable | Where-Object level -eq ($level)
            $stats.attack += $upgrade_mods.attack
            $stats.live += $upgrade_mods.live
            $stats.defense += $upgrade_mods.defense
            $stats.fatal += $upgrade_mods.fatal
            $stats.recover += $upgrade_mods.recover
        }
    }
    
    # Mod the base stats
    $stats.attack = 1.1 * $stats.attack
    $stats.live += $stats.computingPower / 5
    $stats.attack += $stats.computingPower / 25
    $stats.defense += $stats.computingPower / 25
    $stats.fatal += 1e-4 * $stats.computingPower
    $stats.recover += 1e-4 * $stats.computingPower
    $stats.power = 1 * $stats.live + 10 * $stats.attack + 10 * $stats.defense + 10 * $stats.fatal + 1e3 * $stats.recover
    $stats.power = $stats.power
    $stats.attack = $stats.attack
    $stats.live = $stats.live
    $stats.defense = $stats.defense
    $stats.fatal = $stats.fatal
    $stats.recover = $stats.recover

    return $stats
}

function getJSMath(){
    return $(node .\math.js)
}
function getJSMath2(){
    return $(node .\math.js)
}
function predictHit() {
    # Import-Module .\upgrades.ps1 -Force
    $attacker = $args[0]
    $defender = $args[1]
    
    # $e = $attacker.data;
    # $a = $defender.data;
    $e = $attacker# getStats $e.teamId $e.rarity $e.computingPower $e.level
    $a = $defender# getStats $a.teamId $a.rarity $a.computingPower $a.level
    [decimal]$rand = $(getJSMath2)
    [decimal]$fatal = $e.fatal
    $crit = $rand*$fatal
    $attack_mod = (5 - 333 * $(getJSMath) % 10) / 100;
    $defense_mod = (5 - 444 * $(getJSMath) % 10) / 100;
    
    $attack = [math]::floor(($e.attack * (1 + $attack_mod)))
    $defense = [math]::floor(($a.defense * (1 + $defense_mod)))
    $outcome = [math]::floor((($attack - $defense) * ($crit ? 2 : 1) * (1 + $e.fatal)))
    $return1 = ((1 -eq $e.gift && 2 -eq $a.gift)-or (2 -eq $e.gift && 5 -eq $a.gift) -or (3 -eq $e.gift && 4 -eq $a.gift) -or (4 -eq $e.gift && 1 -eq $a.gift) -or (5 -eq $e.gift && 3 -eq $a.gift)) && ($outcome *= 1.1)
    $return2 = (($attack - $defense) -lt (.1 * $attack)) && ($outcome -eq .1 * $attack)
    
    # $a.blood = $a.blood - $outcome # $a.blood 

    # $return5 = $a.blood -le 0 && ($a.death -eq !0)

    return $outcome / 2
}

function fetchTeamStats(){
    $team = $args[0]
    $teamStats = @()

    foreach($player in $team){
        $teamStats += $(getStats $player.teamId $player.rarity $player.computingPower $player.level)
    }
    return $teamStats
}

function combatCards(){
    $attacker = $args[0]
    $defender = $args[1]

    #attacker hit
    $attacker_hit = predictHit $attacker $defender
    #defender hit
    $defender_hit = predictHit $attacker $defender

    $defender.live -= $attacker_hit
    $attacker.live -= $defender_hit

    return @($attacker,$defender)
}


function isTeamAlive(){
    [bool] $isAlive = 1
    foreach($player in $args[0]){
        if($player.live -lt 1){
            $isAlive = $false
        }
    }
    return [bool]$isAlive
}

function combatTeam(){
    $attackers = $args[0]
    $defenders = $args[1]
    $defender = 0
    foreach($attacker in $attackers){

        #select defender
        $attacker_hit = predictHit $attacker $defenders[$defender]
        if(($defenders[$defender].live - $attacker_hit) -lt 1){
            $defenders[$defender].live -= $attacker_hit
            $defender += 1
        } ELSE {
            $defenders[$defender].live -= $attacker_hit
        }

        if(!(isTeamAlive $defenders)){
            #Write-Host "Killed the other team!"
            break;
        }
        if($defender -gt 2){
            #Write-Host "Did our best to hit them hard"
            break;
        }

    }
    return $defenders
}

function predictOutcome(){
    $attackers = $args[0]
    $defenders = $args[1]

    $attacker_stats = fetchTeamStats $attackers
    $defender_stats = fetchTeamStats $defenders
    [bool]$return = $true
    [bool]$run = $true
    while($run){
        if((isTeamAlive $attacker_stats) -and (isTeamAlive $defender_stats)){
            #Fight!
            
            #first attackers on defenders
            $defender_stats = combatTeam $attacker_stats $defender_stats
            
            if(isTeamAlive $defender_stats){
                $attacker_stats = combatTeam $defender_stats $attacker_stats
            }else {
                Write-Host "The attackers won!!!"
                $return = $true
                $run=$false
            }
            if(!(isTeamAlive $attacker_stats)){
                Write-Host "The defenders won V.V"
                $return = $false
                $run=$false
            } 
        }
    }
    return $return
}
function testPredictHit(){

    $battle = Get-Content .\testBattle.json | ConvertFrom-JSON
    $attacker = $battle.data[0].result[0].data.from[2].data
    $defender = $battle.data[0].result[0].data.to[2].data

    $hit = predictHit $attacker $defender

    write-host "Predicted $hit damage on this round..."
}

function testPredictOutcome{
    $me = Get-Content .\me.json | ConvertFrom-JSON
    $attackers = $me.attackCards
    $defenders = $me.defenseCards

    [bool]$didWeWin = predictOutcome $attackers $defenders

    if($didWeWin){
        Write-Host "We won this time!"
    } else {
        Write-Host "We lost this time V.V"
    }
}


function calcHitRange(){
    $t = $args[0]
    $e = @{'higher' = 0;'lower' = 0}
    if($t -ge 1 -and $t -le 23){
        $e.higher = $t - 9 -lt 1 ? 1 : $t - 9
        $e.lower = $t + 9
    }elseif($t -ge 24 -and $t -le 201){
        $e.higher = $t - ($t - 5 + .5 + [Math]::Pow(-1,$t - 5 - 1) / 2) / 2
        $e.lower = $t + ($t - 5 + .5 + [Math]::Pow(-1, $t - 5 - 1) / 2 ) / 2
    }else{
        $e.higher = $t - 100
        $e.lower = $t + 100
    }

    return $e
  }
  