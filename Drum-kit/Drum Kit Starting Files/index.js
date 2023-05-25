
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var play_sound=this.innerHTML;
        
        makesound(play_sound);
        my_animation(play_sound);

    });
}

document.addEventListener("keydown",function(){
    makesound(event.key);
     my_animation(event.key);
});

function makesound(key){
    switch(key)
    {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;    
         
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break; 

        default:
            console.log(play_sound);
            break;
        }
}
function my_animation(key){
    var activation=document.querySelector("."+key);
    
    activation.classList.add("pressed");
    setTimeout(function(){
        activation.classList.remove("pressed");
    }, 100);
}