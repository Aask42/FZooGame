
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
