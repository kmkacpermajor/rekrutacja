<?php

for($i = 100;$i>0;$i--){
    if($i%10==0) {

        echo "<span style='color: red;'>".str_repeat($i,10)."</span><br>";

    }else{

        $output = "";
        if($i%4==0) $output .= "Fire";
        if($i%7==0) $output .= "Boom";
        if(!$output) $output = $i;
        echo $output."<br>";

    }
}

?>

