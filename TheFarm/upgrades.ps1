function getStats(){
    # Get base stats
    $team_id = $args[0]
    $rarity = $args[1]
    $computing_power = $args[2]
    $level = $args[3]
    $c = Get-Content .\upgradeTable.json | ConvertFrom-Json
    # $a = ""
    # $x | % { $a = "$a$($_)" }
    # $c = ConvertFrom-Json $a
    
    $card_stats = $c | Where-Object -Property rarity -eq $rarity | Where-Object -Property teamId -eq $team_id

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
    $stats.power = [Math]::Round($stats.power,0)
    $stats.attack = [Math]::Round($stats.attack,0)
    $stats.live = [Math]::Round($stats.live,0)
    $stats.defense = [Math]::Round($stats.defense,0)
    $stats.fatal = [Math]::Round($stats.fatal,3)
    $stats.recover = [Math]::Round($stats.recover,3)

    return $stats
}

# getStats 10 1 1 1