let counter = 0;
let stop = false;
let button = document.getElementById("my-btn");

button.addEventListener("click", function() {
    
    if (!stop) {
        if (counter < 10) {
        counter = counter + 1;
        button.innerHTML = "Play #" + counter;     
        } else {
            stop= true;

            setTimeout( () => {
            stop = false;
            counter = 0;
            button.innerHTML = "Play #" + counter;
            }, 4000);
        }
    }


});