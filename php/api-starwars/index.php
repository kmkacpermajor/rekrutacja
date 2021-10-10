<?php

// I had some issues with connecting by Guzzle, so I chose file_get_contents since we don't have to authenticate etc.
// It may not be the most optimized solution, but I rarely use REST APIs (for now at least)

$next_link = "https://swapi.dev/api/starships/";

while($next_link){
    $res = file_get_contents($next_link);

    if($res){
        
    $res = json_decode($res, true);

    foreach ($res['results'] as &$starship) {

        echo '<table>';

        foreach ($starship as $key => $val) {

           

            if($val){
                if($key=="pilots"){
                    
                    $first=true;

                    foreach ($val as &$link){
                        
                        $people_res = file_get_contents($link);
                        $people_res = json_decode($people_res, true);
                        
                        if($people_res['species']){
                            $species_res = file_get_contents($people_res['species'][0]);
                            $species_res = json_decode($species_res, true);

                            $species_name = $species_res['name'];
                        }else{
                            $species_name = "Human";
                        }

                        echo "<tr>";

                        if($first){
                            
                            echo "<td rowspan='".count($val)."'><b>".$key."</b></td>";
                            $first=false;
                        }

                        echo "<td>".$people_res['name']." of ".$species_name." species</td>";
                        echo "</tr>";

                    }

                    unset($first);
        
                }elseif($key=="films"){
                    
                    $first=true;

                    foreach ($val as &$link){
                        $films_res = file_get_contents($link);
                        $films_res = json_decode($films_res, true);
                        
                        echo "<tr>";

                        if($first){
                            
                            echo "<td rowspan='".count($val)."'><b>".$key."</b></td>";
                            $first=false;
                        }
                        
                        echo "<td>".$films_res['title']."</td>";
                        echo "</tr>";
                    }

                    unset($first);
        
                }else{
                    echo "<tr><td><b>".$key."</b></td><td>".$val."</td></tr>";
                }
            }else{
                echo "<tr><td><b>".$key."</b></td><td>none</td></tr>";
            }
            
            
        }

        echo '</table><br><br>';

    }

    $next_link = $res['next'];

    }else{
        echo "Connection Error";
        break;
    }

}


?>