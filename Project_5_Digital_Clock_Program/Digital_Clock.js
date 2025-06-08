// ------- This is the JavaScript codes for Digital Clock Program ------------

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >=12 ? "PM" : "AM";
    const originalHours = hours;
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);            
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours} : ${minutes} : ${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;

    // ------- This code is for dynamic background change of the clock based on the current time --------- 
    const clockContainer = document.getElementById("clock-container");
    if(originalHours >= 0 && originalHours < 12){
            clockContainer.style.background = "radial-gradient(orange, skyblue)"; // Morning color it is ...
    }

    else if(originalHours >=12 && originalHours < 18){
            clockContainer.style.background = "radial-gradient(orange, yellow)"; // Afternoon color it is ...
    }

    else{
        clockContainer.style.background = "radial-gradient(blue, white)"; // Night color it is ...
    }
}

updateClock();
setInterval(updateClock, 1000);