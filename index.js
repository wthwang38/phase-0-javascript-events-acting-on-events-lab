// Your code here
// key: = "ArrowLeft"
// key: "ArrowRight"
const dodger = document.getElementById('dodger');

document.addEventListener("keydown",(e)=> {
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight();
    } else if (e.key === "ArrowUp"){
        console.log(e);
    } else if (e.key === "ArrowDown"){
        console.log(e);
    }
});


const moveDodgerLeft = ()=>{
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left = `${left - 10}px`;
    }

}
const moveDodgerRight = ()=>{
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 355){
        dodger.style.left = `${left + 10}px`;
    }
}
const moveDodgerUp = (e) => console.log(e);
const moveDodgerDown = (e) => console.log(e);

/*if (e.key === "ArrowLeft"){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 10}px`;
} else if (e.key === "ArrowRight"){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 10}px`;
}
*/