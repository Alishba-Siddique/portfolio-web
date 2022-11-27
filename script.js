let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu"); 
    menu.classList.toggle("move"); 
} 

window.onscroll = () => {
    navbar.classList.remove("open-menu"); 
    menu.classList.remove("move"); 
} 

//Reviews Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//Email Js
function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg= document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyError();
        }
        else{
            sendEmail(name.value, email.value, msg.value,);
            success();
        }
    } );
}
validate();

function sendEmail(name, email, msg){
    emailjs.send("service_qo66yxr","template_gxeh3rm",{
        to_name: name,
        from_name: email,
        message: msg,
    });
}

function emptyError(){
    Swal.fire({
        icon: 'error',
        title: 'Oh No...',
        text: 'Fields cannot be empty!',
      })
}

function success(){
    Swal.fire({
        icon: 'success',
        title: 'Email sent successfully!',
        text: 'We\'ll try to reply in 24 hours',
      })
}
//Header Background Colour Change on Scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle('header-active', window.scrollY > 0);
})

//Scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () =>{
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
})