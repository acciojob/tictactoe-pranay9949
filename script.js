let input1=document.getElementById("player-1");
let input2=document.getElementById("player-2");
let btn=document.getElementById("submit");
let grid=document.getElementById("grid");
let main=document.getElementsByClassName("container")
btn.addEventListener("click",()=>{
    main[0].className="display";
    for(let i=1;i<9;i++){
    let div=document.createElement("div");
    div.className="box";
    grid.appendChild(div)
    }
})