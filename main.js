const child_val=document.querySelectorAll(".child");
console.log(child_val);

let mouse_click=false;

document.onmousedown=()=>{
     mouse_click=true;
};
document.onmouseup=()=>{
     mouse_click=false;
};

for(let i=0;i<child_val.length;i++){
               child_val[i].onmouseover=()=>{
                    if(mouse_click==true){
               child_val[i].style.backgroundColor="red";
          }
     }
}