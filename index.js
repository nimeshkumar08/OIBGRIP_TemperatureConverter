var cl=document.getElementById("cl");
var fr=document.getElementById("fr");
var result=document.getElementById("#contains");


var cl2Fr = true;
cl.addEventListener('input', function(){
    window.cl2Fr = true;
});
fr.addEventListener('input', function(){
    window.cl2Fr = false;
});

const calculateTemp =()=>{
    const numberTemp=document.getElementById("cl").value;
    const tempSelected=document.getElementById("fr").value;

    if (window.cl2Fr)
    {
        frToCl(numberTemp);
    }
    else 
    {
        clTofr(tempSelected);
    }
}

function frToCl(c){
    const result=document.getElementById("contains");
    let f=(c * 9/5) + 32;
    if(!Number.isInteger(f))
    {
        f=f.toFixed(1);
    }
    fr.value = f;
    result.innerHTML= `Temperature: ${f} Degrees Celsius`;
}

function clTofr(f){
    const result=document.getElementById("contains");
    let c=(f - 32) * 5/9;
    if(!Number.isInteger(c))
    {
        c=c.toFixed(4);
    }
    cl.value=c;
    result.innerHTML= `Temperature: ${c} Degrees Celsius`;    
}

function reset() {
    const result=document.getElementById("contains");
    cl.value = 0;
    fr.value = 32;
    result.value = '';
}