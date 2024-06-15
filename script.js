const togglebutton= document.getElementById('nav-toggle')
const navlinks= document.getElementById('menu-links')

togglebutton.addEventListener('click',()=>{

    navlinks.classList.toggle('active');

})



// const navbar=document.querySelector('nav');
//         window.onscroll=function(){
//             if(window.scrollY>0){
//                 navbar.style.background= '#fff';
//             }
//             else{
//                 navbar.style.background='transparent';
//             }

//         }


//  const gototop= document.getElementsByClassName("gototop");
//        gototop.window.scrollY>0? "ontop": gototop;


var mygototop = document.getElementById("gototop");
window.onscroll = function () {
scrollFunction()
};
function scrollFunction() {
if(document.body.scroll > 100 || document.documentElement.scrollTop > 100 ){
    mygototop.style.display= "block"; I
}
else{
    mygototop.style.display= "none";
}
}

     