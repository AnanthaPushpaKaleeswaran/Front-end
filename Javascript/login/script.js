var eye=document.querySelector('.bi-eye');
var eyeslash=document.querySelector('.bi-eye-slash');
var pass=document.querySelector('#pass');
function show(){
    eyeslash.style.display='none';
    eye.style.display='block';
    pass.type='text';
}
function hide(){
    eyeslash.style.display='block';
    eye.style.display='none';
    pass.type='password';
}