<?php

session_start();


?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Home</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./assets/fonts/font-style.css">
        <link rel="stylesheet" href="./assets/css/all.css">
        <link rel="stylesheet" href="./assets/styles/index.css">
    </head>
    <body>

        <div class="modal">

            <div class="modal-content">

                

            </div>

        </div>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <section id="main-body">

            <?php

                require_once('./includes/header.php');
                require_once('./includes/body.php');
                require_once('./includes/links.php');

            ?>

        </section>

        
        <script src="./assets/scripts/functions/fetch.js"></script>
        <script src="./assets/scripts/index.js"></script>
        <script src="./assets/scripts/functions/animation.js"></script>
    </body>
</html>