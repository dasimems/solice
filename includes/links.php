<nav>
    <ul>
        <li id="non-active" class="games" onclick="loadpage('games')">
                <a>Game</a>
                
                <button class="hover-items">


                    <span id="link-hover" class="left-hover"></span>
                    <span id="link-hover" class="middle-hover"></span>
                    <span id="link-hover" class="right-hover"></span>

                </button>
        </li>

        
        <li id="active" class="home" onclick="loadpage('home')">
            <a>Home</a>

            <button class="hover-items">


                <span id="link-hover" class="left-hover"></span>
               <span id="link-hover" class="middle-hover"></span>
               <span id="link-hover" class="right-hover"></span>

            </button>
        </li>


        <li id="non-active" class="help" onclick="loadpage('help')">
                <a>Help</a>
                
                <button class="hover-items">


                    <span id="link-hover" class="left-hover"></span>
                    <span id="link-hover" class="middle-hover"></span>
                    <span id="link-hover" class="right-hover"></span>

                </button>
        </li>

    </ul>
</nav>


<div class="chat-box">

    <div class="chat-box-header">

        <div class="chat-open-button">
            <button id="open-chat-button" onclick="openChatBox()">
                <i class="fa-solid fa-message"></i>
            </button>
        </div>
        <div class="header-title">
            <h2>Chat</h2>
        </div>

        <div class="header-buttons">

            <button onclick="slideDownChat()" id="chat-slide-down-button"><i class="fa-solid fa-angle-down"></i></button>
            <button onclick="cancelChat()"><i class="fa-solid fa-xmark"></i></button>

        </div>
    </div>

    <div class="chat-content">

        <div class="chats-messages">

            <div class="message-content">

                <div class="message">
                    <p id="message-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, sit hic inventore dolor minus 
                    </p>
    
                    <p id="time">
                        9:45pm
                    </p>
                </div>
            </div>

            <div class="message-content" id="sender-text">

                <div class="message">
                    <p id="message-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, sit hic inventore dolor minus 
                    </p>
    
                    <p id="time">
                        9:45pm
                    </p>
                </div>
            </div>

            <div class="typing-animation">
                <span></span>
                <span></span>
                <span></span>
            </div>


        </div>

    </div>

    <div class="chat-form">

        <form>

            <div class="chat-input">
                <textarea name="chat-text" id="chat-text"></textarea>
                <button><i class="fa-solid fa-paper-plane"></i></button>
            </div>

        </form>

    </div>
        
</div>

<button id="theme-button" onclick="openThemeContent()"><i class="fa-solid fa-gear fa-spin"></i></button>

<div class="theme-settings">

    <button id="close-theme-button" onclick="closeThemeContent()"><i class="fa-solid fa-long-arrow-right"></i></button>

    <div class="theme-box" id="default-theme" onclick="setTheme('default')"></div>
    <div class="theme-box" id="dark-theme" onclick="setTheme('dark')"></div>

</div>