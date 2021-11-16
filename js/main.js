const header = document.querySelector(".main-header");

window.addEventListener("scroll", function () {
   
    checkScroll();
    

});



window.onscroll = function (e) {

    if(this.oldScroll>this.scrollY){
        header.classList.add("up");
    }
    else{
        header.classList.remove("up");
    }
    if(window.scrollY==0){
        header.classList.remove("up");
    }
    
    this.oldScroll = this.scrollY;
    console.log(this);
    
}




window.addEventListener("DOMContentLoaded", function () {
    checkScroll();
});


function checkScroll() {
    if (window.scrollY < 100) {
        header.classList.remove("sticky");
    } else {
        header.classList.add("sticky");
    }
}
function checkScroll2() {
    if (window.scrollY < 100) {
        header.classList.remove("up");
    } 
}