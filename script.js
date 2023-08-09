const count = document.querySelector('.count');
const buttons = document.querySelector(".generator");

buttons.addEventListener("click", () => {
    const genen = Math.floor(Math.random() * 100 + 1);
    count.innerText = genen;
} )


function generators(){
    const genen = Math.floor(Math.random() * 100 + 1);
    count.innerText = genen;
}

generators()