 // 19/5/2022

        // buscar elementos
    var checks_comidas = document.getElementById('divChecksComidas2');
    var add_more_fields = document.getElementById('add_more_fields');
    var remove_fields = document.getElementById('remove_fields');
    var checks_comidassi = document.getElementById('asd');
    var controlss = document.getElementById('controls');

    // TODO acá => agregar input de texto si checkbox==checked     2



    checks_comidassi.onchange = function(){
          var newField = document.createElement('input');
          newField.setAttribute('type','text');
          newField.setAttribute('name','vehicle1[]');
          newField.setAttribute('class','vehicle1');
          newField.setAttribute('size',50);
          newField.setAttribute('placeholder','Another Field');
          checks_comidas.appendChild(newField);


          var newField2 = document.createElement('a');
          newField2.setAttribute('href','#');
 
          newField2.setAttribute('class','vehicle12');
          controlss.style.display = "inline"; 
          newField2.setAttribute('text','asdss');
          newField2.setAttribute('size',50);
          checks_comidas.appendChild(newField2);


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
          var input_tags = survey_options.getElementsByTagName('input');
          if(input_tags.length > 2) {
            survey_options.removeChild(input_tags[(input_tags.length) - 1]);
          }
          }

 
