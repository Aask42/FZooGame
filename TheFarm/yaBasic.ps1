## Author: Aask
## Date 20211017
## Purpose: To make the ZOO a better place
import-module .\getStats.ps1 -force
$url = "https://api2.zoogame.finance/api/zoo/market?nftName=&team=&price=&rarity=&owner=&page=1&perPage=1000000&type=1&currentPage=1"

$x = invoke-webrequest $url
$a = ConvertFrom-Json $x.Content
$list_of_sales = $a.data

## Let's build a team roster, team 27 doesn't exist for some reason
$teams = @(0..38)
$team_names = @{ 0  = "Pelicans"; 1  = "DogeArmy"; 2  = "Nuggets"; 3  = "Chow Chow"; 4  = "Bobcats"; 5  = "Uni"; 6  = "The Cat & The Mouse"; 7  = "Hyena"; 8  = "King"; 9  = "Kung Fu Bunny"; 10 = "Monkey"; 11 = "Alligator"; 12 = "King Kong"; 13 = "ShibaArmy"; 14 = "Doggy"; 15 = "Giraffe"; 16 = "Heavy Weight"; 17 = "C&D"; 18 = "Akita"; 19 = "Bulls"; 20 = "Ice Age"; 21 = "Wakanda"; 22 = "Wakawaka"; 23 = "Silance Alan"; 24 = "Rooster"; 25 = "Meander"; 26 = "DeepSea"; 28 = "Fairytale"; 29 = "ShallowSea"; 30 = "The Sky Crawlers"; 32 = "Resolutes"; 33 = "Royals"; 34 = "Sharpshooters"; 36 = "Cold Blooded"; 37 = "Pests"; 38 = "Fatal Attraction";}

$list_of_cards = @{}
#
foreach($listing in $list_of_sales | Where-Object -Property price2 -gt 0){
    $listing_id = $listing.id
    foreach($nft in $listing.nfts){
        try{
            $list_of_cards += @{
                $nft.nftId = @{
                    "listing_id" = $listing_id
                    "nft" = $nft
                    "price" = $listing.price2
                    "team" = $nft.teamId
                    "rarity" = $nft.rarity
                    "hp" = $nft.computingPower
                }
            }
        } catch {
            Write-Host "Duplicate entry!!!"
            Write-Host $nft
        }
    }
}

# sort them in to teams
$team_roster = @{}

foreach($listing_key in $list_of_cards.Keys){
    $listing = $list_of_cards.$listing_key
    $teamId = $listing.nft.teamId
    
    if(!($teamId -in $team_roster.Keys)){
        $team_roster += @{
            "$teamId" = @($listing)
        }
    } else {
        $team_roster["$teamId"] += @($listing)
    }
}


$rarities = @(1,2,3,4,5)

$temp_team = @{}

foreach($rarity in $rarities){
    foreach($team in $teams){
        $item = $team_roster["$team"] | Where-Object -Property "rarity" -eq $rarity| Where-Object -Property Count -gt 0 | Sort-Object -Property price | Select-Object -First 1
        
        if(!($team -in $temp_team.Keys)){
            $temp_team += @{
                "$team" = @()
            }            
        } 
        $temp_team["$team"] += $item
    }
}

$cheapest_teams = $temp_team
$potential_purchases = @()

$return_per_hp = 0.053167
$zoo_value = 0.51

foreach($team in $teams){
    $sum = 0
    $hp_sum = 0

    if($cheapest_teams["$team"].count -eq 4){ $hp_sum += 50 } else { continue }
        
    $cardStats = @()
    $cheapest_teams["$team"].nft | % {  $cardStats += getStats $_.teamId $_.rarity $_.computingPower $_.level }
    
    $life = $($cardStats.live | Measure-Object -Sum).Sum

    $attack = $($cardStats.attack | Measure-Object -Sum).Sum

    $defense = $($cardStats.defense | Measure-Object -Sum).Sum
    
    $combatPower = $($cardStats.power | Measure-Object -Sum).Sum
    
    $sum  = $($cheapest_teams["$team"].price | Measure-Object -Sum).Sum
    $hp_sum = $($cheapest_teams["$team"].hp | Measure-Object -Sum).Sum
    

    $dollar_per_hp = $sum /$hp_sum 
    $return_per_day = [math]::Round($hp_sum * $return_per_hp * $zoo_value,2)
    $roi = [math]::Round($sum / $return_per_day,2)

    $potential_purchases += @(
        @{
            "team" = $team
            "cost" = $sum
            "dollar_per_hp" = [math]::Round($dollar_per_hp,2)
            "hp_sum" = [math]::Round($hp_sum,2)
            "roi" = $roi
            "return_per_day" = $return_per_day 
            "life" = $life
            "attack" = $attack
            "defense" = $defense
            "combatPower" = $combatPower
        }
    )
    #Write-Host "The cheapest team $teamx we can buy is `$$sum at `$$dollar_per_hpx dollars per hp, a total of $hp_sumx HP, a return of `$$return_per_day per day, and an ROI of $roi days"
}

$sorted_by_cost = $potential_purchases | Sort-Object "roi"

$sorted_by_cost | % {
    $team = "{0:d2}" -f $_.team
    $sum = $_.cost
    $dollar_per_hp = $_.dollar_per_hp
    $hp_sum = $_.hp_sum
    $roi = $_.roi
    $return_per_day = $_.return_per_day
    $simple_team = $team_names.$($_.team)

    Write-Host "Team: $team Cost: `$$sum $/HP: `$$dollar_per_hp `$ per CP, HP: $hp_sum , return /day `$$return_per_day, ROI: $roi days ($simple_team)"
    Write-Host "life: $($_.life) Atk: $($_.attack) Def: $($_.defense) CP: $($_.combatPower)" -BackgroundColor White -ForegroundColor Black
}

