for(var i=0;i<=6;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var randBtnClick =this.innerHTML;
    makeSound(randBtnClick);
    btnAnimate(randBtnClick);
});}

function btnAnimate(ce){
    document.querySelector("."+ce).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+ce).classList.remove("pressed");
    },100);
}

document.addEventListener("keypress",function(event){
        makeSound(event.key);
        btnAnimate(event.key);
    });
    function makeSound(key){
    switch(key){
        case "w":
        var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "a":
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "d":
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "j":
        var san=new Audio('sounds/snare.mp3');
        san.play();
        break;

        case "k":
        var cra=new Audio('sounds/crash.mp3');
        cra.play();
        break;

        case "l":
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
        
        default:console.log(randBtnClick);

    }
    
}
