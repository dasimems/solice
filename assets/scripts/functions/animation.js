
function scrollGamesRight(elementid){
    scrollElement(elementid, "right");
}

function scrollGamesLeft(elementid){
    scrollElement(elementid, "left");
}

function scrollElement(elementid, direction){

    checkScrollWIdth();

    if(document.getElementById(elementid)){

        var element = document.getElementById(elementid);
        var elementscroll = document.querySelector('#' + elementid + '>.game-scroll-list')
        var elementgame = document.querySelectorAll('#' + elementid + '>.game-scroll-list>.games')[0];
        var elementgamewidth = elementgame.getBoundingClientRect().width;
        var remainingwidth = elementscroll.clientWidth - element.clientWidth;
        var legitRemainingWidth = (elementgamewidth * 2)

        if(direction === "right"){
            // console.log(element.clientWidth, elementscroll.clientWidth);

            // console.log(elementscroll.offsetLeft, elementscroll.getBoundingClientRect().left)

            

            if(remainingwidth < legitRemainingWidth && elementscroll.offsetLeft > -remainingwidth){

                var elementScrollLeft = (elementscroll.offsetLeft -remainingwidth);

                elementscroll.style.marginLeft = elementScrollLeft + "px";

                // console.log(elementScrollLeft, elementscroll.offsetLeft);
            }
            
            if(remainingwidth > legitRemainingWidth){
                var elementScrollLeft = (elementscroll.offsetLeft - (elementgamewidth + 20));

                if(elementScrollLeft > -remainingwidth){

                    elementscroll.style.marginLeft = elementScrollLeft + "px";

                    // console.log(elementScrollLeft, -remainingwidth)
                }else{
                    

                    elementScrollLeft = -remainingwidth;

                    elementscroll.style.marginLeft = elementScrollLeft + "px";


                }


            }

            
        }else{

            console.log(direction)
            
            if(remainingwidth < legitRemainingWidth && elementscroll.offsetLeft < remainingwidth){

                

                elementscroll.style.marginLeft ="0px";

                // console.log(elementScrollLeft, elementscroll.offsetLeft);
            }
            
            if(remainingwidth > legitRemainingWidth){

                var elementScrollLeft = (elementscroll.offsetLeft + (elementgamewidth + 20));

                // console.log(elementscroll.offsetLeft, (elementgamewidth + 20))

                if(elementScrollLeft >= -(elementgamewidth + 20)){
                    elementScrollLeft = 0;
                }

                // console.log(elementscroll.offsetLeft < 0);

                if(elementscroll.offsetLeft < 0){

                    elementscroll.style.marginLeft = elementScrollLeft + "px";
                }


            }

        }

        elementscroll.addEventListener("transitionend", recheckStatus);

        function recheckStatus(){
            
            checkScrollWIdth();
        }

    }else{
        console.log('the element given with the id ' +elementid+' isn\'t found')
    }
}

function checkScrollWIdth(){

    if(document.querySelector('.game-scroll-list')){

        var scroll = document.querySelectorAll('.game-scroll-list');
        
        for(var i = 0; i < scroll.length; i++){
            var scrollWidth = scroll[i].clientWidth;

            var parentEle = scroll[i].parentElement;
            var parentWidth = parentEle.clientWidth;

            if(scrollWidth <= parentWidth){
                childre = parentEle.children;

                for(var v = 0; v < childre.length; v++){

                    if(childre[v].tagName === "BUTTON"){


                        if(childre[v].className === "scroll-button"){
                            childre[v].style.display = "none";
                        }
                    }

                    // className === "scroll-button"
                }

                // console.dir(childre);
            }else{
                var remainingwidth = scrollWidth - parentWidth;

                
                childre = parentEle.children;

                if(scroll[i].offsetLeft === 0){
                    

                    for(var v = 0; v < childre.length; v++){

                        if(childre[v].tagName === "BUTTON"){


                            if(childre[v].className === "scroll-button"){
                                if(childre[v].id === "scroll-left"){

                                    childre[v].style.display = "none";
                                    
                                }else{

                                    childre[v].style.display = "block";

                                }
                            }
                        }

                        // className === "scroll-button"
                    }

                }else if(scroll[i].offsetLeft <= -remainingwidth){

                    // console.log(remainingwidth, scroll[i].offsetLeft);

                    for(var v = 0; v < childre.length; v++){

                        if(childre[v].tagName === "BUTTON"){


                            if(childre[v].className === "scroll-button"){
                                if(childre[v].id === "scroll-right"){

                                    childre[v].style.display = "none";

                                }else{

                                    childre[v].style.display = "block";

                                }
                            }
                        }

                        // className === "scroll-button"
                    }

                }else{

                    for(var v = 0; v < childre.length; v++){

                        if(childre[v].tagName === "BUTTON"){
    
    
                            if(childre[v].className === "scroll-button"){
                                childre[v].style.display = "block";
                            }
                        }
    
                        // className === "scroll-button"
                    }

                }
            }
        }
    }

}

window.addEventListener('DOMContentLoaded', ()=>{

    checkScrollWIdth();
})


window.addEventListener('resize', ()=>{
    checkScrollWIdth();
})

// scrollElement('top-game', 'default');