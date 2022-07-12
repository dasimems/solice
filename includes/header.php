<header>
    <div class="logo">LOGO</div>

    <div class="game-search">

                    <div class="game-search-form">
                        <form onsubmit="return(searchGames())">
                            <div class="game-inputs">
                                <input type="text" name="game-search" id="game-search" placeholder="Input Your Search Keyword" autocomplete= "off">

                                <button type="button" onclick="searchGames()"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </form>

                        <div class="search-dropdown">
                            
                        </div>
                    </div>
                    
    </div>

    <div class="links">
        <ul>
            <li onclick="loadpage('account')"><a><i class="fa-regular fa-circle-user"></i></a></li>
        </ul>
    </div>
</header>