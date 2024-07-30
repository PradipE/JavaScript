//there all are single element selector

//const form =console.log(document.getElementById("my-form"));
// console.log(document.getElementById("my-form"));
//in queryselector we are selectiang any value like class and any tag expect the id
// console.log(document.querySelector(".container"));

//multiple element selector
//generally we use quearyselector and quearyselector all some cases we are use claasname and tagname 
//console.log(document.querySelectorAll(".item"))
//console.log(document.getElementsByClassName("item"))
// console.log(document.getElementsByTagName('li'))
//how we use all item  list in a loop
// const items=document.querySelectorAll('.item');
//  items.forEach((item)=>console.log(item));

// const ul=document.querySelector('.items'); 
// //ul.remove();
// //ul.lastElementChild.remove();
// //ul.firstElementChild.textContent="firstitem";
// ul.children[1].innerText='bro'
// ul.firstElementChild.innerHTML='<h2>hrl</h2>'
// const btn=document.querySelector('.button') 
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('.button').style.background='green'
// },);
const myform =document.querySelector('#my-form');
const namei =document.querySelector('#name');
const emaili =document.querySelector('#mail');
const  msg=document.querySelector('.msg');
const user =document.querySelector('#user');
 
myform.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
   if(namei.value === "" || emaili.value==="")
   { 
    msg.innerHTML='Please Enter the name and email';
    setTimeout(()=>msg.remove(),2000)
   }
   else{
     const li=document.createElement('li');
     li.appendChild(document.createTextNode
        (`${namei.value}:${emaili.value  }`));
        user.appendChild(li);
        //clear the fill

        namei.value='';
        emaili.value='';
       }
    

}
