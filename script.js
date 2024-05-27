const btn = document.querySelector("#btn");
const para = document.querySelector("#para");

btn.addEventListener("click",()=>{
    if(btn.contains = "active"){
        btn.classList.toggle("active");
        para.classList.toggle("active")
    }
})