let petName = ""
// Goal is that Tomodatchi is a class and the start makes the pet. 



let button = document.querySelector("button")
button.addEventListener("click" , function(event){
    event.preventDefault()
    //get the name
    let name = document.getElementById("petName").value
    console.log(name)
    petName = name
    //set the name 
    document.getElementById("title").innerHTML = name
    console.log(document.getElementById(name))
   // window.location.href = "game.html";
    animateAge()
    animateEnergy()
    animateHunger()
})


let Agetime = 0
function animateAge(){
    
    document.getElementById("age").innerHTML = "Age: " + Agetime + " "
    setInterval(function(){
        document.getElementById("age").innerHTML = "Age: " + Agetime + " "
        Agetime++ 
    }, 1000) //goes up every second right now 
}

let Energytime = 100
function animateEnergy(){
    
    document.getElementById("energy").innerHTML = "Energy: " +Energytime + " %"
    setInterval(function(){
        document.getElementById("energy").innerHTML = "Energy: " +Energytime + " %"
        //document.getElementById("energyNum").innerHTML = time + 
        Energytime-- 
    }, 1000) //goes up every second right now 
}

function sleep(){
    console.log("Sleeping")
    Energytime+= 10;
    document.getElementById("energy").innerHTML = "Energy: " + (Energytime) + " %"
}


let feedTime = 10
function animateHunger(){
    
    document.getElementById("energy").innerHTML = "Energy: " +feedTime + " %"
    setInterval(function(){
        document.getElementById("hunger").innerHTML = "Hunger: " +feedTime + " %"
        //document.getElementById("energyNum").innerHTML = time + 
        feedTime++
    }, 1000) //goes up every second right now 
}

function feed(){
    feedTime-= 10;
    document.getElementById("hunger").innerHTML = "Hunger: " + (feedTime) + " %"

}