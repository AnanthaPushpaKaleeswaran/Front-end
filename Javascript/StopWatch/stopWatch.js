let mil=0;
let sec=0;
let min=0;
let hr=0;
let hrhtml=document.querySelector("#hr");
let minhtml=document.querySelector("#min");
let sechtml=document.querySelector("#sec");
let mshtml=document.querySelector("#ms");
let timer=true;
document.querySelector("#start").addEventListener('click',function(){
    timer=true;
    stopWatch();
})
document.querySelector("#stop").addEventListener('click',function(){
    timer=false;
})
document.querySelector("#reset").addEventListener('click',function(){
    timer=false;
    mil=0;
    sec=0;
    min=0;
    hr=0;
    hrhtml.innerHTML="00";
    minhtml.innerHTML="00";
    sechtml.innerHTML="00";
    mshtml.innerHTML="00";
})
function stopWatch(){
    if(timer){
        mil++;
        if(mil>60){
            sec++;
            mil=0;
            if(sec>60){
                min++;
                sec=0;
                if(min>60){
                    hr++;
                    min=0;
                }
            }
        }
        if(mshtml!==0){
            mshtml.innerHTML=mil;
        }
        if(sechtml!=0){
            sechtml.innerHTML=sec;
        }
        if(minhtml!=0){
            minhtml.innerHTML=min;
        }
        if(hrhtml!=0){
            hrhtml.innerHTML=hr;
        }
        setTimeout(stopWatch,10);
    }
}