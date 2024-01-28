let selFrom=document.querySelector("#from");
let selTo=document.querySelector("#to");
fetch('https://api.frankfurter.app/currencies').then((val)=>val.json()).then((val)=>dropDown(val));
function dropDown(vari){
    let val=Object.entries(vari)
    for(let i=0;i<val.length;i++){
        let opt=document.createElement("option");
        opt.value=val[i][0];
        opt.text=val[i][0];
        selFrom.appendChild(opt);
    }
    for(let i=0;i<val.length;i++){
        let opt=document.createElement("option");
        opt.value=val[i][0];
        opt.text=val[i][0];
        selTo.appendChild(opt);
    }
}
function convert(){
    let input=document.querySelector("#frominput").value;
    let fromText=selFrom.options[selFrom.selectedIndex].value;
    let toText=selTo.options[selTo.selectedIndex].value;
    if(fromText===toText){
        alert("Please change the curency.");
    }
    else{
        convertFn(fromText,toText,input);
    }
}
function convertFn(from, to, text) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${text}&from=${from}&to=${to}`)
    .then(resp => resp.json())
    .then((data) => {
        let out = document.querySelector(".toinput");
        let val = Object.values(data.rates)[0];
        out.value=val;
    });
}
