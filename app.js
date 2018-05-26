window.onload = () => {
       const frase = prompt('dime una frase');
       if (frase != ' '  ) {
        character();
        len();
       }else{
           alert('error error')
       }
       
    function character() {
        for (let i = 0; i < frase.length; i++) {
            let element = frase[i].toUpperCase();
            console.log( element);
        }
    }

    function len() {
        countCaracteres = 0;
        for (let i = 0; i < frase.length; i++) {
            let element = frase[i].toUpperCase();
           countCaracteres++; 
        }
        console.log('total de caracteres '+ countCaracteres)
    }
   
  
    
    
}

