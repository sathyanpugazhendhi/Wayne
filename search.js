var searchBar = document.getElementById("Search")
var product = document.getElementById("productBox")
var nameTags = product.querySelectorAll("div")

function checkEventHappen(event){
    var enteredText = event.target.value.toUpperCase()
    for(i = 0;i<nameTags.length;i++){
        var selectingP = nameTags[i].querySelector("p").textContent
        if(selectingP.toUpperCase().indexOf(enteredText) <0){
            nameTags[i].style.display = "none"
        }
        else{
            nameTags[i].style.display = "block"
        }

    }

}