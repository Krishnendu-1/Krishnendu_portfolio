var menu=document.querySelectorAll("#nav");//All used for selecting every element within it
var menu1=document.querySelectorAll(".menu");
var menu2=document.querySelector("svg")
var menu3=document.querySelectorAll("#svg")
var reset=document.querySelector("#reset")
var submit=document.querySelector("#submit")
var email=document.querySelector("#email");
for(const lines of menu1){//"for" is used due to "queryselectorAll" is used, because "addeventliseter" actualizes the selected items as array...very useful
   
    lines.addEventListener("mouseover",function(){
        console.log("Mouseover");
     menu2.style.color="black";
     menu2.style.transform="rotate(90deg)";

     for(const list of menu3){
        list.style.display = '' ;//backs to the css file and follow the styles
        list.style.visibility="visible";
       }});

lines.addEventListener("click",()=>{
        menu2.style.color="white";
        menu2.style.transform="rotate(0deg)";
        
        for(const list of menu3){
list.style.visibility = "hidden";
console.log("display out");}

})}

reset.addEventListener("click",()=>{
var form=document.querySelector("form")
form.reset();
})

submit.addEventListener("click",(e)=>{
   
if(email.value==""){
    window.alert("Please Fill the required fields 🙃!!");
e.stopPropagation();
}
   else window.alert("Thank You 😀");

})