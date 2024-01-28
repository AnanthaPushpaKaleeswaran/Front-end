let arr=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
function change(){
    document.body.style.background=coloring();
    let text=document.getElementById("color");
    text.innerHTML=coloring();
}
function coloring(){
    let str="#";
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random()*16);
        str+=arr[index];
    }
    return str;
}