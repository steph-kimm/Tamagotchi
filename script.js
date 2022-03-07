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
    
    document.querySelector("form").style.display = "none";
    animateAge()
    animateEnergy()
    animateHunger()
    animateBoredom()
})


let Agetime = 0
function animateAge(){
    
    document.getElementById("age").innerHTML = "Age: " + Agetime + " "
    setInterval(function(){
        document.getElementById("age").innerHTML = "Age: " + Agetime + " "
        Agetime++ 
        //switch to adult pic 
        if(Agetime == 20)document.getElementById("petPicture").setAttribute("src", "green-adult-dino.jpeg")

        setStatus();
    }, 5000) //goes up every second right now 
}

let Energytime = 100
function animateEnergy(){
    
    document.getElementById("energy").innerHTML = "Energy: " +Energytime + " %"
    setInterval(function(){
        document.getElementById("energy").innerHTML = "Energy: " +Energytime + " %"
        //document.getElementById("energyNum").innerHTML = time + 
        Energytime-- 
    }, 4000) //goes up every second right now 
}

function sleep(){
    console.log("Sleeping")
    Energytime+= 10;
    setStatus()
    document.getElementById("energy").innerHTML = "Energy: " + (Energytime) + " %"
}


let feedTime = 10
function animateHunger(){
    document.getElementById("hunger").innerHTML = "Hunger: " +feedTime + " %"
    setInterval(function(){
        document.getElementById("hunger").innerHTML = "Hunger: " +feedTime + " %"
        //document.getElementById("energyNum").innerHTML = time + 
        feedTime++
    }, 2000) //goes up every second right now 
}

function feed(){
    feedTime-= 10;
    setStatus()
    document.getElementById("hunger").innerHTML = "Hunger: " + (feedTime) + " %"

}



let boreTime = 15; 
function animateBoredom(){
    
    document.getElementById("boredom").innerHTML = "Boredom: " +boreTime + " %"
    setInterval(function(){
        document.getElementById("boredom").innerHTML = "Boredom: " +boreTime + " %"
        //document.getElementById("energyNum").innerHTML = time + 
        boreTime++
    }, 3000) //goes up every second right now 
}

function boredom(){
    boreTime -= 10;
    setStatus()
    document.getElementById("boredom").innerHTML = "Boredom: " + (boreTime) + " %"
}


function setStatus(){
    if(Energytime < 0 || Agetime > 30 || feedTime > 100 || boreTime > 100){
        document.getElementById("statusPic").setAttribute("src" , "statusPics/dead.png")
        document.getElementById("petPicture").setAttribute("src" , "statusPics/bones.jpeg")
    }else if(boreTime>50){
        document.getElementById("statusPic").setAttribute("src" , "statusPics/bored.jpeg")
    }else if(feedTime>50){
        document.getElementById("statusPic").setAttribute("src" , "statusPics/hungry.jpeg")
    }else if(Energytime<50){
        document.getElementById("statusPic").setAttribute("src" , "statusPics/sleepy.jpeg")
    }else{
        document.getElementById("statusPic").setAttribute("src" , "statusPics/happy.jpeg")
    }
    
}