const toggleBtn = document.querySelector("#toggle-btn");
const toggles = document.querySelectorAll(".toggle");

function toggleOn(){
    for(let i=0; i<toggles.length; i++){
        toggles.item(i).classList.toggle('on');
    }
}

toggleBtn.addEventListener("click", toggleOn);