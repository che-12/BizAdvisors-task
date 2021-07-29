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

const texts=["GST Registration","FSSAI License", "Company Registration"];
let count=0;
let index=0;
let currenttext="";
let letter="";
(function type() {
    if (count===texts.length) {
        count=0;
    }
    currenttext=texts[count];
    letter=currenttext.slice(0,++index);

    document.querySelector(".services .typing").innerHTML=letter;
    if(letter.length ===currenttext.length)
    {
        count++;
        index=0;
    }
    setTimeout(type,200);
})();
