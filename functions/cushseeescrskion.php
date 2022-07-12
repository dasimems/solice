<?php

	session_start();
	if(require_once("./database.php")){

		//checking if the following session is set
		if(isset($_SESSION['username']) && !empty($_SESSION['username']) && isset($_SESSION['userid']) && !empty($_SESSION['userid']) && isset($_SESSION['userpassword']) && !empty($_SESSION['userpassword']) && isset($_SESSION['userip']) && !empty($_SESSION['userip'])){

			//getting the session information

			$username = $_SESSION['username'];
			$userpassword = $_SESSION['userpassword'];
			$userid = $_SESSION['userid'];
			$userip = $_SESSION['userip'];
		}else{
			//if the above sessions isn't set, it echos the bellow code
			echo "not set";
		
		}

	}

	


?>