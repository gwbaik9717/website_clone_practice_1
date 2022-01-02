const toggleBtn = document.querySelector("#toggle-btn");
const toggles = document.querySelectorAll(".toggle");

function toggleOn(){
    for(let i=0; i<toggles.length; i++){
        toggles.item(i).classList.toggle('on');
    }
}

function offElements(){
    for(let i=0; i<toggles.length; i++){
        if(window.innerWidth > 1024){
            //Off toggle
            for(let i=0; i<toggles.length; i++){
                toggles.item(i).classList.remove("on");
            }
        }
    }
}

toggleBtn.addEventListener("click", toggleOn);
window.addEventListener("resize", offElements);