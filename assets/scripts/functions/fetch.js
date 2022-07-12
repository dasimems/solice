window.addEventListener('DOMContentLoaded', ()=>{
    var searchBox = document.getElementById('game-search');

    searchBox.addEventListener('input', ()=>{
        var searchDropDown = document.querySelector('.search-dropdown');

        searchBox.addEventListener('keyup', (e)=>{

            var link = "./functions/checkinput.php?page=game";

            var sentinputs = {
                search: searchBox.value
            }

            // console.log(e);

            // var returnedValue = fetchContentViaInput(link, sentinputs, "POST")

            if(searchBox.value.trim() !== "" && e.code !== "Enter"){

                searchDropDown.style.height = "auto";
                fetchContentViaInput(link, sentinputs, "POST", searchDropDown);
            }else{

                searchDropDown.innerHTML = "";

            }
        })

    })
})



function fetchPageSubContent(senturl, element){

    // console.log('conect')
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log('connected')
          element.innerHTML = this.responseText;
          
        }
    };
    xhttp.open("POST", senturl, true);
    xhttp.send();
}

function fetchContentViaInput(senturl, sentinputs, method, element){
    
    if(sentinputs !== null && typeof sentinputs === "object"){

        var xhttp = "";

        if (window.XMLHttpRequest) {
            // code for modern browsers
            xhttp = new XMLHttpRequest();
        } else {
            // code for old IE browsers
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        var inputkeys = Object.keys(sentinputs);
        var inputvalues = [];

        for(var i = 0; i < inputkeys.length; i++){
            inputvalues.push(sentinputs[inputkeys[i]]);
        }
        // console.log(inputkeys, inputvalues);
    
        var input = new FormData();
    
        for(var t = 0; t < inputkeys.length; t++){
    
            var ikey = inputkeys[t];
            var ivalue = inputvalues[t];
            input.append(ikey, ivalue); 
        }
    
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var linkreply = this.responseText;

                // console.log(linkreply);

                element.innerHTML = linkreply;
              
                // return linkreply;
            }
        };
        xhttp.open(method, senturl, true);
        xhttp.send(input);
    }else{
        console.log("Null Given as sentInput or Type Of sentInput is not an object")
    }

}

