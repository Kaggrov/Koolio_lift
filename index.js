let up_arrow_first = false;

let down_arrow_first = false;

let arrows = document.getElementsByClassName("arrows");

console.log(arrows)
arrows[3].addEventListener("click",ground_function);
arrows[0].addEventListener("click",second_function);
arrows[1].addEventListener("click",first_up_function);
arrows[2].addEventListener("click",first_down_fucntion);

class sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "loop");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }
}

var snd = new sound("sound.mp3");



function ground_function() {
    
    snd.play()
    document.getElementById("arrow_bt").style.color="green"
    if(up_arrow_first == false)
    {
        setTimeout(()=>{
            let ground_elevator = document.getElementById("elevator");
            ground_elevator.parentNode.removeChild(ground_elevator);

            let div__name = document.createElement('div');
            let text__name = document.createTextNode("Elevator");
            div__name.appendChild(text__name)
            div__name.setAttribute("style","margin-left: 87px; margin-top: 80px; border : 1px solid yellow ;margin-right: 80px; text-align: center; border-radius: 5px; background-color: rgb(243, 204, 152);")

            let div = document.createElement('div');
            div.appendChild(div__name);
            div.setAttribute("id","elevator");
            let second_floor = document.getElementsByClassName("elevator__box2")[0]
            second_floor.appendChild(div)
            console.log("hrllo")
            document.getElementById("arrow_bt").style.color="black"
            snd.stop();
            

        },10000);

    }else {
        setTimeout(()=>{
            let ground_elevator = document.getElementById("elevator");
            ground_elevator.parentNode.removeChild(ground_elevator);

            let div__name = document.createElement('div');
            let text__name = document.createTextNode("Elevator");
            div__name.appendChild(text__name)
            div__name.setAttribute("style","margin-left: 87px; margin-top: 80px; border : 1px solid yellow ;margin-right: 80px; text-align: center; border-radius: 5px; background-color: rgb(243, 204, 152);")

            let div = document.createElement('div');
            div.appendChild(div__name);
            div.setAttribute("id","elevator");
            let first_floor = document.getElementsByClassName("elevator__box1")[0]
            first_floor.appendChild(div)
            console.log("hrllo")
            document.getElementById("arrow_ft_up").style.color="black"
 
            

        },5000);

        setTimeout(()=>{
            let ground_elevator = document.getElementById("elevator");
            ground_elevator.parentNode.removeChild(ground_elevator);

            let div__name = document.createElement('div');
            let text__name = document.createTextNode("Elevator");
            div__name.appendChild(text__name)
            div__name.setAttribute("style","margin-left: 87px; margin-top: 80px; border : 1px solid yellow ;margin-right: 80px; text-align: center; border-radius: 5px; background-color: rgb(243, 204, 152);")

            let div = document.createElement('div');
            div.appendChild(div__name);
            div.setAttribute("id","elevator");
            let second_floor = document.getElementsByClassName("elevator__box2")[0]
            second_floor.appendChild(div)
            console.log("hrllo")
            document.getElementById("arrow_bt").style.color="black"
            up_arrow_first = false;
            snd.stop()

        },10000);
    }

}

function second_function() {

    document.getElementById("arrow_tp").style.color="green"
    snd.play()
    if(down_arrow_first == false)
    {
        setTimeout(()=>{
            let ground_elevator = document.getElementById("elevator");
            ground_elevator.parentNode.removeChild(ground_elevator);

            let div__name = document.createElement('div');
            let text__name = document.createTextNode("Elevator");
            div__name.appendChild(text__name)
            div__name.setAttribute("style","margin-left: 87px; margin-top: 80px; border : 1px solid yellow ;margin-right: 80px; text-align: center; border-radius: 5px; background-color: rgb(243, 204, 152);")

            let div = document.createElement('div');
            div.appendChild(div__name);
            div.setAttribute("id","elevator");
            let second_floor = document.getElementsByClassName("elevator__box")[0]
            second_floor.appendChild(div)
            console.log("hrllo")
            document.getElementById("arrow_tp").style.color="black"
            

        },10000);
    }else {
        setTimeout(()=>{
            let ground_elevator = document.getElementById("elevator");
            ground_elevator.parentNode.removeChild(ground_elevator);

            let div__name = document.createElement('div');
            let text__name = document.createTextNode("Elevator");
            div__name.appendChild(text__name)
            div__name.setAttribute("style","margin-left: 87px; margin-top: 80px; border : 1px solid yellow ;margin-right: 80px; text-align: center; border-radius: 5px; background-color: rgb(243, 204, 152);")

            let div = document.createElement('div');
            div.appendChild(div__name);
            div.setAttribute("id","elevator");
            let first_floor = document.getElementsByClassName("elevator__box1")[0]
            first_floor.appendChild(div)
            console.log("hrllo")
            document.getElementById("arrow_ft_down").style.color="black"

            

        },5000);

        setTimeout(()=>{
            let ground_elevator = document.getElementById("elevator");
            ground_elevator.parentNode.removeChild(ground_elevator);

            let div__name = document.createElement('div');
            let text__name = document.createTextNode("Elevator");
            div__name.appendChild(text__name)
            div__name.setAttribute("style","margin-left: 87px; margin-top: 80px; border : 1px solid yellow ;margin-right: 80px; text-align: center; border-radius: 5px; background-color: rgb(243, 204, 152);")

            let div = document.createElement('div');
            div.appendChild(div__name);
            div.setAttribute("id","elevator");
            let second_floor = document.getElementsByClassName("elevator__box")[0]
            second_floor.appendChild(div)
            console.log("hrllo")
            document.getElementById("arrow_tp").style.color="black"   
            down_arrow_first = false;         
            snd.stop()

        },10000);
    }

}

function first_up_function() {
    document.getElementById("arrow_ft_up").style.color="green"
   up_arrow_first = true;
}

function first_down_fucntion() {
    document.getElementById("arrow_ft_down").style.color="green"
    down_arrow_first = true;
}

