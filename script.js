console.log("Kripa");

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    
    // This will remove the underline from tabl
    for(value of tablinks){
        value.classList.remove("active-links");
    }
    // This will remove the data of tabs
    for(val of tabcontents){
        val.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
   
} 

// Styling for Hamburger Menu
var sideMenu = document.getElementById('sidemenu');
function openMenu(){
    // console.log("Clicke open");
    sideMenu.style.right = "0";

}
function closeMenu(){
    // console.log("Clicke Close");
    sideMenu.style.right = "-200px";
}