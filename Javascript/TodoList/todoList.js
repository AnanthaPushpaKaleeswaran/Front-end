let todoArray=[]
window.onload=()=>{
    let arr=localStorage.getItem('todo') || [];
    let a=arr.split(',');
    if(a!==null){
        a.forEach((val)=>{
            let p=document.createElement('p');
            p.innerHTML=val;
            document.querySelector('.container').appendChild(p);
            todoArray.push(val);
            p.addEventListener('click',()=>{
                p.style.textDecoration='line-through';
                let n=todoArray.indexOf(val);
                if(n>-1){
                    todoArray.splice(n,1);
                    localStorage.setItem('todo',todoArray);
                }
            })
            p.addEventListener('dblclick',()=>{
                document.querySelector('.container').removeChild(p);
            })
        })

    }
}
function add(){
    let input=document.querySelector("#inputText").value;
    todoArray.push(input);
    let p=document.createElement('p');
    p.id=input;
    p.innerHTML=input;
    let con=document.querySelector(".container");
    document.querySelector(".container").appendChild(p);
    document.querySelector("#inputText").value="";
    localStorage.setItem('todo',todoArray);
    p.addEventListener('click',()=>{
        p.style.textDecoration='line-through';
        let n=todoArray.indexOf(input);
        if(n>-1){
            todoArray.splice(n,1);
            localStorage.setItem('todo',todoArray);
        }
    })
    p.addEventListener('dblclick',()=>{
        con.removeChild(p);
    })
    
}
