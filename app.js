window.onload = () => {
       const frase = prompt('dime una frase');
       if (frase != ' '  ) {
        character();
        
       }else{
           alert('error error')
       }
       
    function character() {
        for (let i = 0; i < frase.length; i++) {
            let element = frase[i].toUpperCase();
            console.log( element);
        }
    }
   
  
    
    
}

