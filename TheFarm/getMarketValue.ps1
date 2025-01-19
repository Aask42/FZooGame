# This function will fetch the market value for all your cards

function getMarketValue(){
    $accountAddress = $args[0]
    $listOfCards = @()
    $url = "https://api2.zoogame.finance/api/zoo/nft?perPage=10&rarity=&isSelling=&isMinting=&teamId=&owner=$accountAddress"
    
    ## Let's build a team roster, team 27 doesn't exist for some reason
    $team_names = @{ 0  = "Pelicans"; 1  = "DogeArmy"; 2  = "Nuggets"; 3  = "Chow Chow"; 4  = "Bobcats"; 5  = "Uni"; 6  = "The Cat & The Mouse"; 7  = "Hyena"; 8  = "King"; 9  = "Kung Fu Bunny"; 10 = "Monkey"; 11 = "Alligator"; 12 = "King Kong"; 13 = "ShibaArmy"; 14 = "Doggy"; 15 = "Giraffe"; 16 = "Heavy Weight"; 17 = "C&D"; 18 = "Akita"; 19 = "Bulls"; 20 = "Ice Age"; 21 = "Wakanda"; 22 = "Wakawaka"; 23 = "Silance Alan"; 24 = "Rooster"; 25 = "Meander"; 26 = "DeepSea"; 28 = "Fairytale"; 29 = "ShallowSea"; 30 = "The Sky Crawlers"; 32 = "Resolutes"; 33 = "Royals"; 34 = "Sharpshooters"; 36 = "Cold Blooded"; 37 = "Pests"; 38 = "Fatal Attraction";}
    
    # Fetch the card list for your cards, if greater than 0 proceed
    $request = $(Invoke-Webrequest $url).content | ConvertFrom-Json

    foreach($card in $request.data){
        $listOfCards += @{
            'id' = $card.id
            'owner' = $card.owner
            'nftId' = $card.nftId
            'name' = $card.name
            'isMinting' = $card.isMinting
            'isSelling' = $card.isSelling
            'isGrouping' = $card.isGrouping
            'rarity' = $card.rarity
            'level' = $card.level
            'teamId' = $card.teamId
            'basicComputingPower' = $card.basicComputingPower
            'computingPower' = $card.computingPower
        }
    }
    
    $url = "https://api2.zoogame.finance/api/zoo/market?nftName=&team=&price=&rarity=&owner=&page=1&perPage=1000000&type=1&currentPage=1"

    $x = invoke-webrequest $url
    $a = ConvertFrom-Json $x.Content
    $list_of_sales = $a.data
   
    $list_of_cards_for_sale = @()
    #
    foreach($listing in $list_of_sales | Where-Object -Property price2 -gt 0){
        $listing_id = $listing.id
        foreach($nft in $listing.nfts){
            try{
                $list_of_cards_for_sale += @{
                    "listing_id" = $listing_id
                    "nft" = $nft
                    "price" = $listing.price2
                    "teamId" = $nft.teamId
                    "rarity" = $nft.rarity
                    "hp" = $nft.computingPower
                }
            } catch {
                Write-Host "Duplicate entry!!!"
                Write-Host $nft
            }
        }
    }
    $cheapest_cards = @()
    foreach($nft in $listOfCards){
        if(($nft.rarity -lt 4) -and ($nft.rarity -gt 0)){
            $cheapest_cards += $list_of_cards_for_sale | Where-Object {$_.teamId -eq $nft.teamId -and $_.rarity -eq $nft.rarity} | Sort-Object price | Select-Object -First 1
        }
    }
    $cheapest_cards | % {
        $teamName = $team_names.$([int]$_.teamId)
        Write-Host "The cheapest rarity $($_.rarity) on the $teamName team ($($_.teamId)) is `$$($_.price) USD"

    }

    
    $sum = $($cheapest_cards.price | Measure-Object -Sum).Sum

    Write-Host "That means these cards are at a minimum worth $sum USD if put up for sale"

}


getMarketValue '0xdda45ef11ead39c110b40f1d02443ce72c389715'