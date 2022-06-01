 // 19/5/2022

        // buscar elementos
 
    var add_more_fields = document.getElementById('add_more_fields');
    var remove_fields = document.getElementById('remove_fields');
    var check_carnesylomos = document.getElementById('asd');
    var controlss = document.getElementById('controls'); 
    var divChecksComidas = document.getElementById('divChecksComidas2'); 
    // TODO acá => agregar input de texto si checkbox==checked     2



    check_carnesylomos.onchange = function(){
console.log("hola");

      
      if (check_carnesylomos.checked){
        
         console.log("hola2");
          var newField = document.createElement('input');
          newField.setAttribute('type','text');
          newField.setAttribute('name','vehicl');
          newField.setAttribute('class','vehicl');
          newField.setAttribute('size',50);
          newField.setAttribute('placeholder','Another Field');
          divChecksComidas.appendChild(newField);
        
      } 
        
      else if (!check_carnesylomos.checked){
        
while (divChecksComidas.hasChildNodes()) {
                divChecksComidas.removeChild(divChecksComidas.lastChild);
            }
        console.log("!");
}




         }
    



             // TODO acá => agregar input de texto  con el controls.add_more_fields    1

             add_more_fields.onclick = function(){
                var newField = document.createElement('input');
                newField.setAttribute('type','text');
                newField.setAttribute('name','vehicle1[]');
                newField.setAttribute('class','vehicle1');
                newField.setAttribute('size',50);
                newField.setAttribute('placeholder','Another Field');
                checks_comidas.appendChild(newField);
               }




             // TODO acá => quitar input de texto si checkbox!=checked
    remove_fields.onclick = function(){
      
      divChecksComidas.removeChild(divChecksComidas.lastChild);
          
          }

 
    add_more_fields.onclick = function(){
      
                var newField = document.createElement('input');
          newField.setAttribute('type','text');
          newField.setAttribute('name','vehicl');
          newField.setAttribute('class','vehicl');
          newField.setAttribute('size',50);
          newField.setAttribute('placeholder','Another Field');
          divChecksComidas.appendChild(newField);
          
          }