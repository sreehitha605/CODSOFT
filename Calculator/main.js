let inputBox=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");
let string=''
buttons.forEach(element => {
    element.addEventListener('click',(b)=>{
        if(b.target.value==='='){
            let expression=string.replace(/÷/g,'/').replace(/x/g,'*');
            let result=eval(expression);
            if(result!==undefined){
                inputBox.value=result;
                string=String(result);
            }
            else{
                inputBox.value='Error';
                string='';
            }
         }
         else if(b.target.value==='C'){
            string=''
            inputBox.value=string;
         }
         else if(b.target.value==='DEL' || b.target.value==='&#9003;'){
            string=string.substring(0,string.length-1)
            inputBox.value=string;
         }
        else{
            string+=b.target.value;
            inputBox.value=string;
        }
    });
    
    
});