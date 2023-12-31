function main(){
    const addForm = document.querySelector('.form');
    const screen  = document.querySelector('.display'); 
    const reLoad  = document.querySelector('.reload');
   
    const info    = [];
    
    function calForm(){
        const alturaForm = addForm.querySelector('.altura');
        const pesoForm   = addForm.querySelector('.peso');
        
        info.push(Number.parseFloat(alturaForm.value), Number.parseInt(pesoForm.value));
        const imc = pesoForm.value/(alturaForm.value**2);
        
        if(imc <= 18.5){
            screen.innerHTML += `<p>Seu IMC é: ${imc.toFixed(2)} abaixo do peso</p>`;
        }
        else if((imc === 18.6)||(imc <= 24.9)){
            screen.innerHTML += `<p>Seu IMC é: ${imc.toFixed(2)} peso ideal</p>`;
        }
        else if((imc === 25.0)||(imc <= 29.9)){
            screen.innerHTML += `<p>Seu IMC é: ${imc.toFixed(2)} levemente acima do peso</p>`;
        }
        else if((imc === 30.0)||(imc <= 34.9)){
            screen.innerHTML += `<p>Seu IMC é: ${imc.toFixed(2)} obsidade grau 1</p>`;
        }
        else if((imc === 35.0)||(imc <= 39.9)){
            screen.innerHTML += `<p>Seu IMC é: ${imc.toFixed(2)} obesidade grau 2(severa)</p>`;
        }      
        else if(imc >= 40){
            screen.innerHTML += `<p>Seu IMC é: ${imc.toFixed(2)} obesidade 3(mórbida)</p>`;
        }else{
            screen.innerHTML += `<p>Valor Invalido!<p>`;
        }
           
    }     

    function sendEvent(defEvent){
        defEvent.preventDefault();
        calForm();
    }
    addForm.addEventListener('submit', sendEvent);
    
    
    

} main();
