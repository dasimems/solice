<?php

    if(isset($_GET['page']) && !empty($_GET['page'])){

        $page = $_GET['page'];

        if($page === "games"){
            

            if(isset($_GET['htp']) && !empty($_GET['htp'])){
                $gameid = $_GET['htp'];

                ?>

                    <button id="back-content-modal-btn" onclick="closeHtp('game')">
                        <i class="fa-solid fa-long-arrow-left"></i>
                    </button>

                    <div class="how-to-play">

                        <div class="how-to-play-contents">

                            <div class="how-to-play-header">
                                <h2>How To Play <?php echo "Game Name" ?></h2>
                            </div>

                            <div class="how-to-play-instructions">
                                
                                <div class="instructions">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci, dicta harum, officia deleniti nihil earum quisquam commodi, dolor non esse. Nulla doloremque repudiandae possimus temporibus quisquam. Fugiat, beatae animi!
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, corporis, quia vitae facere, rerum assumenda aut nobis eveniet temporibus obcaecati facilis ea quos voluptates exercitationem odio perspiciatis consequatur. Qui, accusantium?
                                </div>

                                <div class="instructions">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci, dicta harum, officia deleniti nihil earum quisquam commodi, dolor non esse. Nulla doloremque repudiandae possimus temporibus quisquam. Fugiat, beatae animi!
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, corporis, quia vitae facere, rerum assumenda aut nobis eveniet temporibus obcaecati facilis ea quos voluptates exercitationem odio perspiciatis consequatur. Qui, accusantium?
                                </div>

                                <div class="instructions">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci, dicta harum, officia deleniti nihil earum quisquam commodi, dolor non esse. Nulla doloremque repudiandae possimus temporibus quisquam. Fugiat, beatae animi!
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, corporis, quia vitae facere, rerum assumenda aut nobis eveniet temporibus obcaecati facilis ea quos voluptates exercitationem odio perspiciatis consequatur. Qui, accusantium?
                                </div>

                            </div>

                            <div class="how-to-play-buttons">
                                <button id="htp-prev-btn">Prev</button>
                                
                                <button id="htp-next-btn">Next</button>
                            </div>

                        </div>

                        <div class="how-to-play-contents">

                            <div class="how-to-play-image">

                                <img src="./assets/images/games/how_to/card-1.jpg" alt="Game Image">

                            </div>

                        </div>

                    </div>

                <?php

            }else if(isset($_GET['search']) && !empty($_GET['search'])){

                $searchkeyword = $_GET['search'];

                //code to search the database

                $countsearch = 1;

                if($countsearch > 0){

                    //code to fetch the search record from the database

                    ?>

                        <button id="cancel-content-modal-btn" onclick="closeContent('game')"><i class="fa-solid fa-xmark"></i></button>

                        <div class="game-category-header">
                            <h2>Search Result For "<?php echo ucwords($searchkeyword); ?>"</h2>
                        </div>

                        <div class="game-category-content">

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                            <div class="game-cat-cont">
                            
                                <div class="games">
    
                                    <div class="game-image">
                                        <a onclick="openGame('whot', 1)">

                                            <div class="game-title">
                                                Game Name
                                            </div>
                                        
                                        <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                    </a>
                                    </div>
    
                                    <div class="game-button">
                                        <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                    </div>
        
                                </div>

                            </div>

                        </div>

                    <?php

                }else{
                    ?>

                        <p class="empty-search">No Search Result Found For <?php echo ucwords($searchkeyword); ?></p>

                    <?php
                }

            }else if(isset($_GET['cat']) && !empty($_GET['cat'])){

                $gamecategory = $_GET['cat'];

                ?>

                    <button id="cancel-content-modal-btn" onclick="closeContent('game')"><i class="fa-solid fa-xmark"></i></button>

                    <div class="game-category-header">
                        <h2><?php echo ucwords($gamecategory); ?></h2>
                    </div>

                    <div class="game-category-content">

                        <div class="game-cat-cont">
                            
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                        <div class="game-cat-cont">
                        
                            <div class="games">

                                <div class="game-image">
                                    <a onclick="openGame('whot', 1)">

                                        <div class="game-title">
                                            Game Name
                                        </div>
                                    
                                    <img src="./assets/images/games/game_banner/cards-416960.jpg" alt="Game Name Image">

                                </a>
                                </div>

                                <div class="game-button">
                                    <button id="how-to-play" onclick="howToPlay('whot', 1)">How To Play</button>
                                </div>
    
                            </div>

                        </div>

                    </div>

                        

                <?php

            }

        }elseif($page === "help"){

            if(isset($_GET['hc']) && !empty($_GET['hc'])){

                $helpid = $_GET['hc'];
                ?>
                
                    <div class="help-page-modal-content">
                        <button id="back-content-modal-btn" onclick="closeContent('help')">
                            <i class="fa-solid fa-long-arrow-left"></i>
                        </button>

                        <div class="help-page-modal-header">
                            <h2>How To Create An Account</h2>
                        </div>

                        <div class="help-page-modal-details">

                            <div class="help-page-modal-details-content">
                            
                                <div class="hep-page-modal-description">
                                
                                    <div class="description">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sit doloremque dolore doloribus expedita quas excepturi, repudiandae itaque temporibus explicabo aut minima aspernatur vitae dolores quibusdam, aliquid ex commodi. Vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia saepe, nihil nulla necessitatibus quasi provident repellat id rerum accusamus aliquid ipsa dolorum esse doloremque sed omnis hic nemo ad. Laudantium.
                                    </div>
                                    
                                    <div class="description">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sit doloremque dolore doloribus expedita quas excepturi, repudiandae itaque temporibus explicabo aut minima aspernatur vitae dolores quibusdam, aliquid ex commodi. Vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia saepe, nihil nulla necessitatibus quasi provident repellat id rerum accusamus aliquid ipsa dolorum esse doloremque sed omnis hic nemo ad. Laudantium.
                                    </div>

                                    <div class="description">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sit doloremque dolore doloribus expedita quas excepturi, repudiandae itaque temporibus explicabo aut minima aspernatur vitae dolores quibusdam, aliquid ex commodi. Vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia saepe, nihil nulla necessitatibus quasi provident repellat id rerum accusamus aliquid ipsa dolorum esse doloremque sed omnis hic nemo ad. Laudantium.
                                    </div>
                                
                                
                                </div>

                                <div class="help-page-modal-button">
                                    <button>Prev</button>
                                    <button>Next</button>
                                </div>
                            
                            </div>

                            <div class="help-page-modal-details-content">

                                <div class="help-page-modal-details-video">
                                    <video src="">

                                        

                                    </video>
                                </div>

                            </div>

                        </div>

                    </div>

                <?php

            }
        }
    }

?>