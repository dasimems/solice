<?php

//checking if $_GET['page'] is passed in the url
if(isset($_GET['page']) && !empty($_GET['page'])){

    $page = $_GET['page'];

    //check to see if the value of $_GET['page'] is game i.e if the page parforming this request is game page
    if($page === "games" || $page === "game"){


        //check if $_POST['search'] is set and not empty i.e the search inputed from the search box in the games page
        if(isset($_POST['search']) && !empty($_POST['search'])){

            //changing all html special characters to its hex value to avoid cross site scripting
            $searchinput = htmlentities($_POST['search'], ENT_QUOTES);

            //code to connect to the database and count the result of the search input
            $searchcount = 1;

            //checking if the query performed on database returns at least one result
            if($searchcount > 0){

                //code to fetch the given result of the search input from the database

                // for($i = 0; $i < )
                ?>

                    <ul>
                        <li onclick="openGame('whot', 1)"><a>Whot</a></li>
                        <li onclick="openGame('whot', 1)"><a>Whot</a></li>
                        <li onclick="openGame('whot', 1)"><a>Whot</a></li>
                    </ul>

                <?php
            }else{
                ?>

                    <p class="empty-search">
                        No Result Found
                    </p>

                <?php
            }
        }
    }
}

?>