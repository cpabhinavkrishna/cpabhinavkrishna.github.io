let questionCard = document.querySelectorAll(".questionCard");
let navLinks = document.querySelectorAll(".navRight ul li");
let menu =document.getElementById('menu');
let closeBtn = document.getElementById('closeButton');



questionCard.forEach(element => {
    element.addEventListener('click',()=>{
        element.classList.toggle('questionCardSelected');
        //change icon
        const icon = element.querySelector('.faqIcon i');
        if(icon.className === 'fa-solid fa-minus'){
            icon.className = 'fa-solid fa-plus'; 
        }else { 
            icon.className = 'fa-solid fa-minus';
         }
    });
});



function closeMenu(){
    menu.style.display='none';
    closeBtn.style.display='none';
}
function openMenu(){
    menu.style.display='block';
    closeBtn.style.display='block';
}

let day="tuesday"
switch(day){
    case("monday"):
    case("tuesday"):
    console.log("1"+day)
    console.log("1"+day)
    
    case("wednesday"):
    console.log("1"+day)
     break;
    case("thursday"):
    console.log("1"+day)
     break;
    case("friday"):
    console.log("1"+day)
     break;
    case("saturday"):
    console.log("1"+day)
     break;
    case("sunday"):
    console.log("1"+day)
     break;
}