"use strict";

window.addEventListener('DOMContentLoaded', loadedPage());


function loadedPage(){

    
    window.pageProps = {
        previousPage: "",
        presentPage: "",
        theme: "",
        accountErrorMessage: false,
        accountErrorEle : false,
        signUpContent: 0,
        gameSearchOn : false,
        htpPrevCon: null,
        htpPrevConVal: null,
    }

    if(localStorage.getItem("memsgameDataOnewholeOneTheme")){
        var savedtheme = localStorage.getItem("memsgameDataOnewholeOneTheme");

        pageProps.theme = savedtheme;

        // console.log(localStorage.getItem("memsgameDataOnewholeOneTheme"))

    }else{
        pageProps.theme = "default"
    }

    loadTheme(pageProps.theme);

    const defaultURL = new URL(window.location.href);

    const browserName = window.navigator.appName;

    const urlParams = window.location.search;

    const urlParamsSearch = new URLSearchParams(urlParams);
    
    

    

    if(!urlParamsSearch.has('page')){

        window.history.pushState({}, "", defaultURL + "?"+browserName+"&page=home");

    }

    const page = urlParamsSearch.get('page')
    
    showPage(page);

    if(checkQueryParameters('content')){
        var content = getQueryParams('content');

        if(checkQueryParameters('n')){
            var pagenum = getQueryParams('n');

            fetchContent(page, content, pagenum);
            
        }else{
            
            fetchContent(page, content, "");
        }

    }else if(checkQueryParameters('htp')){
        fetchContent(page, "htp", "");
    }else if(checkQueryParameters('cat')){
        fetchContent(page, "cat", "");

    }else if(checkQueryParameters('search')){
        fetchContent(page, "search", "");
    }else if(checkQueryParameters('hc')){
        fetchContent(page, "hc", "");
    }


    var accountFormInputs = document.querySelectorAll(".getting-started-form-contents .form-content input");

    for(var i = 0; i < accountFormInputs.length; i++){
        accountFormInputs[i].addEventListener("focus", getInputDetails);

        accountFormInputs[i].addEventListener("blur", removeLabel);

        accountFormInputs[i].addEventListener("input", checkInput);

        function getInputDetails(e){
            // console.log(e);
            var labelheight = ((e.target.clientHeight/2) + 5);

            e.target.previousElementSibling.style.bottom = labelheight + "px";

            if(pageProps.theme !== "dark"){

                e.target.previousElementSibling.style.color = "black";
            }else{
                
                e.target.previousElementSibling.style.color = "white";
            }

            e.target.previousElementSibling.style.fontSize = "0.9rem";

            e.target.parentElement.style.marginTop = "25px";
        }

        function removeLabel(e){

            if(e.target.value === ""){

                e.target.previousElementSibling.style.bottom = "0px";

                if(pageProps.theme !== "dark"){

                    e.target.previousElementSibling.style.color = "#8b8a8a";
                    
                }else{
                    
                    e.target.previousElementSibling.style.color = "#e7e7e7";
                }
                
                e.target.previousElementSibling.style.fontSize = "1rem";

                e.target.parentElement.style.marginTop = "20px";

            }

        }

        function checkInput(e){

            getInputDetails(e);
            
            var inputValue = e.target.value;
            var inputType = e.target.type;
            var regEx = false;

            var toppos = e.target.getBoundingClientRect().top + e.target.getBoundingClientRect().height + 8;
    
            var leftpos = e.target.getBoundingClientRect().left + (e.target.getBoundingClientRect().width/2);
            var errorMessage = "";
            
            if(inputValue.trim() !== ""){
                
                if(inputType === "text" && e.target.id !== "sign-up-uname" && e.target.id !== "login-username"){
                    regEx = /^[a-zA-z ]+$/;
                    errorMessage = "Only Text Is Allowed";
                }else if(inputType === "tel"){
                    regEx = /^(\+\d{1,3}[- ]?)?\d{10}$/;
                    errorMessage = "Please Input A Valid Mobile Number";

                }else if(inputType === "email"){
                    regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
                    
                    errorMessage = "Please Input A Valid Email Address";

                }else if(e.target.id === "sign-up-uname"){
                    regEx = /^[a-zA-z0-9]+$/;
                    
                    errorMessage = "Space Or Characters Isn't Allowed";
                }else if(e.target.id === "login-username"){
                    regEx = false;
                }

                
                if(pageProps.accountErrorMessage){
                    removeFormError();
                }

                if(regEx){

                    if(!regEx.test(inputValue.trim())){
                        showFormError(errorMessage, leftpos, toppos);
                        pageProps.accountErrorEle = e.target;
                    }else{

                        if(pageProps.accountErrorMessage){
                            removeFormError();
                        }

                    }

                }
                // console.log(inputType);
            }
            

        }
    }

    var changeFormBtn = document.querySelectorAll(".getting-started-form-buttons>.buttons>.changeFormBtn");

    for(var v = 0; v < changeFormBtn.length; v++){
        changeFormBtn[v].addEventListener('click', changeSlide);

        function changeSlide(e){

            if(e.target.id === "sign-up-button"){
                changeHoverButtonPosition("signUp");

                setQueryParameters({
                    'page':'account',
                    'content':'signup'
                })

                fetchContent("account", "signup", "");
                
                
            }else{
                changeHoverButtonPosition("login");
                setQueryParameters({
                    'page':'account',
                    'content':'login'
                })
                
                fetchContent("account", "login", "");
            }
        }
    }
    // console.log(changeFormBtn);

    var signUpformcontents = document.querySelectorAll('.sign-up-form-content');

    // console.log(signUpformcontents);

   
    
}



function nextSignUpForm(num){
    var signupformcontent = document.querySelectorAll('.sign-up-form-content');
    var presentContent = signupformcontent[num - 1];
    var nextContent = signupformcontent[num];
    var presentChildren = presentContent.children;
    var inputContents = [];
    // console.log(pageProps.accountErrorEle, pageProps.accountErrorMessage)

    if(!pageProps.accountErrorMessage){

        for(var i = 0; i < presentChildren.length; i++){
    
            var grandChildren = presentChildren[i].children;
    
            for(var v = 0; v < grandChildren.length; v++){
    
                var grandGrandChildren = grandChildren[v];
    
                if(grandGrandChildren.tagName === "INPUT"){
                    inputContents.push(grandGrandChildren);
                }
            }
        }
    
        for(var t = 0; t < inputContents.length; t++){
    
            if(t === 0){
    
                var toppos = inputContents[t].getBoundingClientRect().top + inputContents[t].getBoundingClientRect().height + 10;
            }else{
                var toppos = inputContents[t].getBoundingClientRect().top + inputContents[t].getBoundingClientRect().height + 5;
    
            }
    
            var leftpos = inputContents[t].getBoundingClientRect().left + (inputContents[t].getBoundingClientRect().width/2);
            var errorMessage = "Please Fill This Field"
    
            if(inputContents[t].value.trim() === ""){
                inputContents[t].focus();
                
                pageProps.accountErrorEle = inputContents[t];
                showFormError(errorMessage, leftpos, toppos);
                // if(inputContents[t].id === "sign-up-fname"){
                //     var errorMessage = "Please Input Your Name"
                // }
    
                // console.log(inputContents[t].id)
                break;
    
            }
        }

        if(inputContents[inputContents.length - 1].value.trim() !== "" && !pageProps.accountErrorMessage){
            presentContent.style.position = "absolute";
            presentContent.style.transform = "scale(0)";
            presentContent.style.zIndex = "0";
            nextContent.style.position = "relative";
            nextContent.style.transform = "scale(1)";
            nextContent.style.zIndex = "9";
            pageProps.signUpContent = num;
            signupFormFocus();
            
        }else{
            if(pageProps.accountErrorEle){

                pageProps.accountErrorEle.focus();

            }
        }
    }else{
            if(pageProps.accountErrorEle){
                
                pageProps.accountErrorEle.focus();

            }
    }


    
    
}

function signupFormFocus(){
    var num = pageProps.signUpContent;
    var signupform = document.querySelectorAll('.sign-up-form-content')[num].children[0].children;

    for(var i =0; i < signupform.length; i++){
        if(signupform[i].tagName === "INPUT"){
            signupform[i].focus();
        }
    }

    

}

function loginFormFocus(){
    var loginForm = document.querySelector('.login-form>form').children[0].children;


    // console.log(loginForm)

    for(var i = 0; i < loginForm.length; i++){
        if(loginForm[i].tagName === "INPUT"){
            loginForm[i].focus();
        }
    }
}


function showFormError(message, leftpos, toppos){
    var formErrorelement = document.querySelector('.getting-started-from-error');
    var formErrorMessage = document.querySelector('.getting-started-from-error>p');

    formErrorMessage.textContent = message;
    formErrorelement.style.display = "inline-flex";
    formErrorelement.style.left = leftpos + "px";
    formErrorelement.style.top = toppos + "px";
    formErrorelement.style.transition = "1s ease all";
    formErrorelement.style.opacity = "0";
    
    setTimeout(function(){
        formErrorelement.style.opacity = "1";
        pageProps.accountErrorMessage = true;

    }, 100)
}

function removeFormError(){

    var formErrorelement = document.querySelector('.getting-started-from-error');
    var formErrorMessage = document.querySelector('.getting-started-from-error>p');

    formErrorMessage.textContent = "";
    formErrorelement.style.display = "none";
    formErrorelement.style.left = "0px";
    formErrorelement.style.top = "0px";
    formErrorelement.style.transition = "none";
    formErrorelement.style.opacity = "0";
    pageProps.accountErrorMessage = false;
    pageProps.accountErrorEle = false;
    

}

function showPage(page){


   var pagename = "";

    if(page === null || page === "home"){
        // console.log('home page');
        pagename = "home";
        slidePage("default")
    }else if(page === "games" || page === "game"){
        // console.log('game page');
        pagename = "games";
        slidePage("left")
        
    }else if(page === "help"){
        // console.log('help page');
        pagename = "help";
        slidePage("right")
        
    }else if(page === "account"){
        // console.log('account page');
        pagename = "account";
        slidePage("bottom")
        
    }else{
        // console.log('invalid home page');
        pagename = "home";
        slidePage("default")

    }

    
    var pageTitle = document.querySelector('title');

    pageTitle.innerText = pagename[0].toUpperCase() + pagename.substring(1);

    var navClassNames = [];

    var navLinks = document.querySelectorAll('nav>ul>li');


    for(var i = 0; i < navLinks.length; i++){
        var linkclassname = navLinks[i].className;
        navLinks[i].id = "non-active";
        navClassNames.push(linkclassname);
    }

    for(var x = 0; x < navClassNames.length; x++){
        if(navClassNames[x] === pagename){
            navLinks[x].id = "active";
        }
    }

    
    // console.log(navClassNames);
}

function showGameSearch(){

    if(!pageProps.gameSearchOn){

        var gamesearch = document.querySelector('.game-search');
    
        gamesearch.style.display = "flex";
        
        setTimeout(function(){
            gamesearch.style.opacity = "1";
            gamesearch.style.transition = "1s ease all";
    
            pageProps.gameSearchOn = true;
        }, 100)
        
    }
    
}

function hideGameSearch(){

    if(pageProps.gameSearchOn){

        var gamesearch = document.querySelector('.game-search');
    
        gamesearch.style.opacity = "0";
        
        
        setTimeout(function(){
            gamesearch.style.display = "none";
            
            pageProps.gameSearchOn = false;
        }, 1000);
        
    }
    
}

function closeSearchDropdown(){
    
    var searchDropDown = document.querySelector('.search-dropdown');

    searchDropDown.innerHTML = "";
}

function slidePage(pos){
    const pageProps = window.pageProps;
    var page = document.querySelector(".cubic-body");
    var frontpage = document.querySelector("#front-side");
    var leftpage = document.querySelector("#left-side");
    var rightpage = document.querySelector("#right-side");
    var bottompage = document.querySelector("#bottom-side");
    

    var translateZprop = (page.clientWidth / 2) + "px";

    // console.log(translateZprop);

    if(pos === "default"){
        hideGameSearch();
        
        hideChat();
        page.style.transform = "rotateY(0deg) rotateX(0deg)";

        frontpage.style.transform = "none";
        leftpage.style.transform = "rotateY(-90deg) translateZ(100px) rotateX(0deg)";
        rightpage.style.transform = "rotateY(90deg) translateZ(100px) rotateX(0deg)";
        bottompage.style.transform = "rotateX(-90deg) translateZ(100px) rotateY(0deg)";
        
    }else if(pos === "left"){

        

        
        if(pageProps.previousPage !== "home" && (pageProps.previousPage !== "games" ||  pageProps.previousPage !== "game")){
            
            page.style.transition = "none";

            slidePage('default');
            

            setTimeout(showContainer, 50)

            /* new Promise(function(){

                loadpage('home');

            }).then(function(){
                

            }) */
        }else{

            showContainer();
        }

        function showContainer(){

            showGameSearch();
            
            hideChat();
            page.style.transition = "1s ease all";
            page.style.transform = "rotateY(90deg) rotateX(0deg)";
            
            frontpage.style.transform = "translateZ("+ translateZprop + ")";
            leftpage.style.transform = "rotateY(-90deg) translateZ(0px) rotateX(0deg)";
            rightpage.style.transform = "rotateY(90deg) translateZ(100px) rotateX(0deg)";
            bottompage.style.transform = "rotateX(-90deg) translateZ(100px) rotateY(0deg)";
        }
        
    }else if(pos === "right"){

        
        if(pageProps.previousPage !== "home" && pageProps.previousPage !== "help"){
            
            page.style.transition = "none";

            slidePage('default');
            

            setTimeout(showContainer, 50)

            /* new Promise(function(){

                loadpage('home');

            }).then(function(){
                

            }) */
        }else{

            showContainer();
        }

        function showContainer(){

            
            hideGameSearch();
            
            showChat();
            
            page.style.transition = "1s ease all";

            page.style.transform = "rotateY(-90deg) rotateX(0deg)";
            
            frontpage.style.transform = "translateZ("+ translateZprop + ")";
            leftpage.style.transform = "rotateY(-90deg) translateZ(100px) rotateX(0deg)";
            rightpage.style.transform = "rotateY(90deg) translateZ(0px) rotateX(0deg)";
            bottompage.style.transform = "rotateX(-90deg) translateZ(100px) rotateY(0deg)";
        }
        
    }else if(pos === "bottom"){

        

        if(pageProps.previousPage !== "home" && pageProps.previousPage !== "account"){
            
            page.style.transition = "none";

            slidePage('default');
            

            setTimeout(showContainer, 50)

            /* new Promise(function(){

                loadpage('home');

            }).then(function(){
                

            }) */
        }else{

            showContainer();
        }

        function showContainer(){

            
            hideGameSearch();
            
            hideChat();
            page.style.transition = "1s ease all";
            page.style.transform = "rotateY(0deg) rotateX(90deg)";
        
            frontpage.style.transform = "translateZ("+ translateZprop + ")";
            leftpage.style.transform = "rotateY(-90deg) translateZ(100px) rotateX(0deg)";
            rightpage.style.transform = "rotateY(90deg) translateZ(100px) rotateX(0deg)";
            bottompage.style.transform = "rotateX(-90deg) translateZ(100px) rotateY(0deg)";
        }


        
    }
}

window.addEventListener("popstate", ()=>{
    // console.log("working");

    historyPage(getQueryParams('page'))

})

function loadpage(page){
    var page = page;
    

    pageProps.previousPage = getQueryParams('page');
    pageProps.presentPage = page;
    
    if(pageProps.previousPage !== page){

        setQueryParameters({
            'page': page
        })
    
    
        showPage(page);
        if(page === "account"){
            fetchContent("account", "login", "");
        }else if(page === "game"){



            if(checkQueryParameters('content')){

                var content = getQueryParams('content');

                fetchContent("game", content, "")

            }else{

            }
        }else if(page === 'help'){
            previousHelp();
            showChat();
        }

        
    }


    // console.log(pageProps);
}

function historyPage(page){

    pageProps.previousPage = null;
    pageProps.presentPage = page;

    showPage(page);

}

function getQueryParams(param){
    const urlParams = window.location.search;

    const urlParamsSearch = new URLSearchParams(urlParams);

    return urlParamsSearch.get(param);
}

function openPage(page){

}
// all chat box functions goes here
function showChat(){
    var chatBox = document.querySelector('.chat-box');

    chatBox.style.display = "block";

    setTimeout(function(){
        chatBox.style.opacity = "1";
    }, 50);
}

function hideChat(){
    var chatBox = document.querySelector('.chat-box');

    chatBox.style.opacity = "0";
    
    setTimeout(function(){
        chatBox.style.display = "none";
    }, 50);
}

function openChatBox(){
    var chatBox = document.querySelector('.chat-box');

    chatBox.style.width = "350px"
    removeChatOpenButton();
    
    setTimeout(function(){
        
        chatBox.style.height = "450px"
    }, 1000);
}

function closeChatBox(){
    var chatBox = document.querySelector('.chat-box');

    closeModal();
    chatBox.style.height = "50px"
    
    setTimeout(function(){
        
        showChatOpenButton();
        chatBox.style.width = "50px"
    }, 1000);
}

function removeChatOpenButton(){
    var chatOpenBtn = document.querySelector('.chat-open-button');

    chatOpenBtn.style.opacity = "0";

}

function showChatOpenButton(){
    var chatOpenBtn = document.querySelector('.chat-open-button');

    chatOpenBtn.style.opacity = "1";
}

function slideDownChat(){
    var chatBox = document.querySelector('.chat-box');
    var chatBoxSlideButton = document.querySelector('#chat-slide-down-button');

    chatBox.style.height = "50px"
    removeChatOpenButton()

    setTimeout(function(){
        chatBoxSlideButton.innerHTML = '<i class="fa-solid fa-angle-up"></i>';

        chatBoxSlideButton.setAttribute('onclick', 'slideUpChat()');
        
        chatBox.style.width = "200px"
    }, 1000);

}

function slideUpChat(){
    var chatBox = document.querySelector('.chat-box');
    var chatBoxSlideButton = document.querySelector('#chat-slide-down-button');

    chatBox.style.width = "350px"
    removeChatOpenButton();
    
    setTimeout(function(){
        chatBoxSlideButton.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        chatBox.style.height = "450px"

        chatBoxSlideButton.setAttribute('onclick', 'slideDownChat()');
        
    }, 1000);

}

function cancelChat(){

    var modalHtml = '<div class="chat-close-confirm"><p>Are You Sure You Want To End This Chat?</p><div class="confirm-button"><button onclick="closeModal()">No</button><button onclick="closeChatBox()">Yes</button></div></div>';
    openModal(modalHtml);
    
}

//chat functions ends here

function openModal(htmlcontent){
    var modal = document.querySelector('.modal');
    var modalbox = document.querySelector('.modal-content');

    modal.style.display = "flex";
    modalbox.innerHTML = htmlcontent;

    setTimeout(function(){
        modal.style.opacity = "1";
    }, 50);
}

function closeModal(){
    var modal = document.querySelector('.modal');
    var modalbox = document.querySelector('.modal-content');

    modal.style.opacity = "0";
    
    setTimeout(function(){
        modalbox.innerHTML = "";
        modal.style.display = "none";
    }, 1000);
}

//function to change url parameters
function setQueryParameters(param){
    var parameters = Object.keys(param);

    var paramvalues = [];

    var newparam = "";

    for(var v = 0; v< parameters.length; v++){

        paramvalues.push(param[parameters[v]]);
        
    }

    for(var i = 0; i< parameters.length; i++){

        if(i < parameters.length - 1){

            newparam += parameters[i] + "=" + paramvalues[i] + "&";
        }else{
            
            newparam += parameters[i] + "=" + paramvalues[i];
        }

        
    }

    // console.log(newparam);

    // console.log(Object.keys(param));

    const defaultURL = new URL(window.location.href).pathname;

    const browserName = window.navigator.appName;

    window.history.pushState({}, "", defaultURL + "?"+browserName+"&"+newparam);

}

//function to check url paramerters
function checkQueryParameters(param){
    const urlParams = window.location.search;

    const urlParamsSearch = new URLSearchParams(urlParams);

    return urlParamsSearch.get(param);
}

//function to change login and sign in button position
function changeHoverButtonPosition(formType){
    var signUpBtn = document.getElementById('sign-up-button');
    var loginBtn = document.getElementById('login-button');

    if(pageProps.accountErrorMessage){
        removeFormError();
    }

    var slideButton = document.querySelector('#hover-button');

    if(formType === "signUp"){
        slideButton.style.left = "50%";

        if(pageProps.theme !== "dark"){
            
            signUpBtn.style.color = "white";
            loginBtn.style.color = "#2f43A8";
        }else{
            signUpBtn.style.color = "#2f43a8";
            loginBtn.style.color = "white";

        }
        signupFormFocus();
    }else{
        
        if(pageProps.theme !== "dark"){
            
            signUpBtn.style.color = "#2f43A8";
            loginBtn.style.color = "white";
        }else{

            signUpBtn.style.color = "white";
            loginBtn.style.color = "#2f43A8";
        }
        slideButton.style.left = "0px";
        loginFormFocus();
    }
    // console.dir(document.querySelector('#hover-button'));
}


//function to open the feedback content in the help page

function openNextHelpContent(){
    

    setQueryParameters({
        'page':'help',
        'content':'feedback'
    });

    fetchContent('help', 'feedback', "")
}

//function to return to the default help content
function closeNextHelpContent(){
    

    setQueryParameters({
        'page':'help'
    });

    previousHelp();
}

//function to slide up the feedback content in the help page
function nextHelp(){
    var nextHelpContent = document.querySelector('.other-help-content');
    var nextHelpContentHeight = document.querySelector('.other-help-content').getBoundingClientRect().height + 20;

    nextHelpContent.style.bottom = "-20px";
}

//function to slide down the feedback content in the help page and show the default help content
function previousHelp(){
    var nextHelpContent = document.querySelector('.other-help-content');
    var nextHelpContentHeight = document.querySelector('.other-help-content').getBoundingClientRect().height + 20;

    nextHelpContent.style.bottom = "-100%";
}

// all theme code goes here

function openThemeContent(){
    var themesettingscontent = document.querySelector('.theme-settings');

    themesettingscontent.style.right = "0px";
}

function closeThemeContent(){
    var themesettingscontent = document.querySelector('.theme-settings');

    themesettingscontent.style.right = "-80px";
}

function setTheme(senttheme){

    var savedData = senttheme;

    localStorage.setItem('memsgameDataOnewholeOneTheme', savedData);

    loadTheme(senttheme);
    pageProps.theme = senttheme;
    closeThemeContent();

    if(getQueryParams('page') === "account"){
        if(checkQueryParameters('content')){
            var content = getQueryParams('content');
            if(content === "login"){

                changeHoverButtonPosition('login')
            }else{
                changeHoverButtonPosition('signUp')

            }
        }else{
            changeHoverButtonPosition('login')
        }
    }
    
}

// all theme code ends here

function openHelpContent(id){
    showContentModal("help");

    setQueryParameters(
        {
            page: "help",
            hc: id
        }
    )

    fetchHelp(id);
}

function showContentModal(page){

    var topVal = 0;

    if(page === "game"){

        var contentModal = document.querySelector('#game-modal');


        topVal = contentModal.parentElement.scrollTop;
        
    }else if(page === "help"){
        var contentModal = document.querySelector('#help-modal');

    }


    // console.dir(topVal);

    contentModal.style.display = "block";
    contentModal.style.top = topVal + "px";
    
    contentModal.parentElement.style.overflow = "hidden";

    setTimeout(function(){
        contentModal.style.transform = "scale(1)"
    }, 50)
}

function closeHtp(page){

    if(pageProps.htpPrevCon != null){

        if(pageProps.htpPrevCon === "cat"){

            seeAllGame(pageProps.htpPrevConVal)

        }else if(pageProps.htpPrevCon === "search"){

            searchGames();

        }



    }else{

        if(page === "game"){
            setQueryParameters({
                page: "games"
            })
    
            
            var searchbox = document.getElementById('game-search');
    
            searchbox.value = "";
        }
    
        hideContentModal(page)
    }

}

function closeContent(page){

    if(page === "game"){
        setQueryParameters({
            page: "games"
        })

        
        var searchbox = document.getElementById('game-search');

        searchbox.value = "";
    }

    hideContentModal(page)
    
}

function hideContentModal(page){

    
    var topVal = 0;
    
    if(page === "game"){

        var contentModal = document.querySelector('#game-modal');
        var modalContent = document.querySelector('#game-modal>.content-modal-contents');
    }else if(page === "help"){
        var contentModal = document.querySelector('#help-modal');
        var modalContent = document.querySelector('#help-modal>.content-modal-contents');

    }
    
    contentModal.style.transform = "scale(0)";
    
    setTimeout(function(){
        
        showModalLoader(page)
        contentModal.style.top = topVal + "px";
        modalContent.innerHTML = "";
        
        if(page === "game"){

            contentModal.parentElement.style.overflowY = "scroll";

        }

        
        pageProps.htpPrevCon = null;
        
        
        contentModal.style.display = "none";
        
    }, 1000)
}

function seeAllGame(category){


    showContentModal("game");

    setQueryParameters({
        'page': "games",
        'cat':category
    });

    fetchCategory(category)

}

function howToPlay(gamename, id){
    showContentModal("game");

    setQueryParameters({
        'page': "games",
        'htp':id
    });

    
    fetchHowTo(id);

    
}


function searchGames(){
    var searchbox = document.getElementById('game-search');

    var searchVal = searchbox.value.trim();

    if(searchVal != ""){
        
        closeSearchDropdown();
        showContentModal("game");
    
        setQueryParameters({
            page : "games",
            search: searchVal
        })
    
        fetchSearch(searchVal);
    }


    return false;


}

function fetchHowTo(id){
    var contentContainer = document.querySelector('#game-modal>.content-modal-contents');

    var url = "./functions/load_content.php?page=games&htp=" + id;

    // console.log(pageElement);

    fetchPageSubContent(url, contentContainer);

    var checkPage = setInterval(pageHtml, 300);

    function pageHtml(){

        
        if(contentContainer.innerHTML !== ""){
            // console.log('done');

            contentContainer.style.height = "100%";

            function completeOper(){
                clearInterval(checkPage);
                removeModalLoader("game");

            }

            setTimeout(completeOper, 500)

        }
    }
    
}

function fetchCategory(category){

    var contentContainer = document.querySelector('#game-modal>.content-modal-contents');

    var url = "./functions/load_content.php?page=games&cat=" + category;

    // console.log(pageElement);

    fetchPageSubContent(url, contentContainer);

    var checkPage = setInterval(pageHtml, 300);

    function pageHtml(){

        
        if(contentContainer.innerHTML !== ""){
            // console.log('done');

            pageProps.htpPrevCon = "cat";
            pageProps.htpPrevConVal = getQueryParams('cat');

            // console.log(pageProps);

            if(contentContainer.clientHeight > contentContainer.parentElement.clientHeight){

                contentContainer.parentElement.style.overflowY = "scroll";
            }

            function completeOper(){
                clearInterval(checkPage);
                removeModalLoader("game");

            }

            setTimeout(completeOper, 500)

        }
    }

}

function fetchHelp(id){

    var contentContainer = document.querySelector('#help-modal>.content-modal-contents');

    var url = "./functions/load_content.php?page=help&hc=" + id;

    // console.log(pageElement);

    fetchPageSubContent(url, contentContainer);

    var checkPage = setInterval(pageHtml, 300);

    function pageHtml(){

        
        if(contentContainer.innerHTML !== ""){
            // console.log('done');

            // console.log(pageProps);
            
            contentContainer.parentElement.style.overflow = "hidden";
            

            function completeOper(){
                clearInterval(checkPage);
                removeModalLoader("help");

            }

            setTimeout(completeOper, 500)

        }
    }

}


function fetchSearch(searchVal){

    
    var searchbox = document.getElementById('game-search');

    var contentContainer = document.querySelector('#game-modal>.content-modal-contents');

    var url = "./functions/load_content.php?page=games&search=" + searchVal;

    
    if(searchVal.trim() != ""){
        searchbox.value = searchVal;

        // console.log(pageElement);
    
        fetchPageSubContent(url, contentContainer);
    
        var checkPage = setInterval(pageHtml, 300);
    
        function pageHtml(){
    
            
            if(contentContainer.innerHTML !== ""){

                
                pageProps.htpPrevCon = "search";
                pageProps.htpPrevConVal = getQueryParams('search');

                if(contentContainer.clientHeight > contentContainer.parentElement.clientHeight){

                    contentContainer.parentElement.style.overflowY = "scroll";
                }
                // console.log(contentContainer.parentElement.clientHeight, contentContainer.clientHeight);
    
                function completeOper(){
                    clearInterval(checkPage);
                    removeModalLoader("game");
    
                }
    
                setTimeout(completeOper, 500)
    
            }
        }
    }else{
        loadpage('games');
    }


}

function removeModalLoader(page){

    if(page === "game"){

        var contentModal = document.querySelector('#game-modal>.modal-spinner');
    }else if(page === "help"){
        var contentModal = document.querySelector('#help-modal>.modal-spinner');

    }

    contentModal.style.display = "none";

}

function showModalLoader(page){

    if(page === "game"){

        var contentModal = document.querySelector('#game-modal>.modal-spinner');
    }else if(page === "help"){
        var contentModal = document.querySelector('#help-modal>.modal-spinner');

    }

    contentModal.style.display = "flex";

}

function loadTheme(theme){
    document.querySelector('body').setAttribute('id', theme);
}


//function to load external contents in pages if defined
function fetchContent(page, content, pagenum){

    if(getQueryParams('page') !== page){

        showPage(page);
    }

    if(page === "account"){
        var loginform = document.querySelector('.getting-started-form-contents>.form-content>.login-form');
        var signupform = document.querySelector('.getting-started-form-contents>.form-content>.sign-up-form');
        
        var loginWidth = loginform.clientWidth;
        var signupWidth = signupform.clientWidth;

        var signupformcont = document.querySelectorAll('.sign-up-form-content');

        // console.log(loginformlabels);

        if(content === "signup"){
            
            // signupformcont[0].style.position = "relative";
            loginform.style.marginLeft = "-"+signupWidth+"px";
            // signupform.style.marginLeft = "-"+signupWidth+"px";
            
            changeHoverButtonPosition("signUp");
        }else{
            
            // signupformcont[0].style.position = "absolute";
            loginform.style.marginLeft = "0px";
            // signupform.style.marginLeft = "0px";
            
            changeHoverButtonPosition("login");

        }
    }else if(page === "help"){

        if(content === "feedback"){
            nextHelp();
        }else if(content === "hc"){
            var helpid = getQueryParams('hc');
            showContentModal("help");
            fetchHelp(helpid);
        }

    }else if(page === "games" || page === "game"){

        if(content === "htp"){

            
            var gameid = getQueryParams('htp');

            showContentModal("game");
            fetchHowTo(gameid);
        }else if(content === "cat"){
            var gamecat = getQueryParams('cat');

            showContentModal("game");
            fetchCategory(gamecat);

        }else if(content === "search"){
            var gamesearch = getQueryParams('search');

            showContentModal("game");
            fetchSearch(gamesearch);
        }


    }
}






