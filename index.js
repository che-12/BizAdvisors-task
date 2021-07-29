let headings=document.getElementsByClassName("click");
let caro=document.getElementsByClassName("caro");
// console.log(headings);

function show(number) {
    for (let i = 0; i < headings.length; i++) {
        const element = headings[i];
        element.classList.remove("active");
        caro[i].classList.remove("act");
    }
    headings[number-1].classList.add("active");
    caro[number-1].classList.add("act");
}