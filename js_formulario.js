 // 19/5/2022



        // buscar elementos -hambur
 
    var add_more_fields = document.getElementById('add_more_fields');
    var remove_fields = document.getElementById('remove_fields');
    var check_carnesylomos = document.getElementById('asd');
    var controlss = document.getElementById('controls'); 
    var divChecksComidas = document.getElementById('divChecksComidas2'); 


var divChecksComida_hamburs = document.getElementById('divChecksComidas-hambur'); 
var check_hamburguesas = document.getElementById('asd2');
 var controls_hambur = document.getElementById('controls-hambur'); 
    var add_more_fields_hambur = document.getElementById('add_more_fields-hambur');
    var remove_fields_hambur = document.getElementById('remove_fields-hambur');

var check_helado = document.getElementById('Helado');


var check_Empanadas = document.getElementById('Empanadas');


var check_Pizzas = document.getElementById('Pizzas');


var check_Pasta = document.getElementById('Pasta');


var check_Panaderia = document.getElementById('Panaderia');


var check_Sushi = document.getElementById('Sushii');


var check_Verduras = document.getElementById('Verdurass');




   
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
    check_carnesylomos.onchange = function(){
    console.log("hola");
      if (check_carnesylomos.checked){
        controlss.style.display = "flex";
         console.log("hola2");
          var newField = document.createElement('input');
          newField.setAttribute('type','text');
          newField.setAttribute('name','vehicl');
          newField.setAttribute('class','vehicl');
          newField.setAttribute('size',60);
          newField.setAttribute('placeholder','Ingrese aquí el elemento, ejemplo: Porción de Asado, 1150 pesos');
          divChecksComidas.appendChild(newField);
      } 
    
      else if (!check_carnesylomos.checked){
            while (divChecksComidas.hasChildNodes()) {
                divChecksComidas.removeChild(divChecksComidas.lastChild);
            }
        controlss.style.display = "none";
        console.log("!");
        }
    }
    

// quitar input de texto si checkbox!=checked
    remove_fields.onclick = function(){
      divChecksComidas.removeChild(divChecksComidas.lastChild);
      let numb = document.getElementById("divChecksComidas2").childElementCount;
      if (numb == 0 && check_carnesylomos.checked){
          controlss.style.display = "none";
          while (divChecksComidas.hasChildNodes()) {
                divChecksComidas.removeChild(divChecksComidas.lastChild);
            }
        check_carnesylomos.checked = false;
      }
      console.log("holalengght checks comidas");
      console.log(numb);
          }


// agregar input de texto si checkbox=checked
    add_more_fields.onclick = function(){
          var newField = document.createElement('input');
          newField.setAttribute('type','text');
          newField.setAttribute('name','vehicl');
          newField.setAttribute('class','vehicl');
          newField.setAttribute('size',60);
          newField.setAttribute('placeholder','Ingrese aquí el elemento, ejemplo: Porción de Asado, 1150 pesos');
          divChecksComidas.appendChild(newField);
          let numb = document.getElementById("divChecksComidas2").childElementCount;
          console.log("holalengght checks comidas");
          console.log(numb);
          }





// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------



check_hamburguesas.onchange = function(){
  
    
  
      if (check_hamburguesas.checked){
        controls_hambur.style.display = "flex";
        
         
        
          var newField2 = document.createElement('input');
          newField2.setAttribute('type','text');
          newField2.setAttribute('name','vehiclh');
          newField2.setAttribute('class','vehiclh');
          newField2.setAttribute('size',60);
          newField2.setAttribute('placeholder','Ingrese aquí el elemento, ejemplo: Porción de Asado, 1250 pesos');
          divChecksComida_hamburs.appendChild(newField2);
        console.log("hola3h");
      } 
    
      else if (!check_hamburguesas.checked){
            while (divChecksComida_hamburs.hasChildNodes()) {
                divChecksComida_hamburs.removeChild(divChecksComida_hamburs.lastChild);
            }
        controls_hambur.style.display = "none";
        console.log("!h");
        }
    }
    

// quitar input de texto si checkbox!=checked
    remove_fields_hambur.onclick = function(){
      
      
      divChecksComida_hamburs.removeChild(divChecksComida_hamburs.lastChild);
      let numb2 = document.getElementById("divChecksComidas-hambur").childElementCount;
      
      console.log(numb2);
      if (numb2 == 0 && check_hamburguesas.checked){
        console.log("dendtro de if");
          controls_hambur.style.display = "none";
          while (divChecksComida_hamburs.hasChildNodes()) {
                divChecksComida_hamburs.removeChild(divChecksComida_hamburs.lastChild);
            }
        check_hamburguesas.checked = false;
      }
      console.log("holalengght checks comidas");
      console.log(numb2);
          }


// agregar input de texto si checkbox=checked
    add_more_fields_hambur.onclick = function(){
          var newField2 = document.createElement('input');
          newField2.setAttribute('type','text');
          newField2.setAttribute('name','vehicl');
          newField2.setAttribute('class','vehicl');
          newField2.setAttribute('size',60);
          newField2.setAttribute('placeholder','Ingrese aquí el elemento, ejemplo: Hamburguesa con papas, 1250 pesos');
          divChecksComida_hamburs.appendChild(newField2);
          let numb3 = document.getElementById("divChecksComidas-hambur").childElementCount;
          console.log(" lengght checks comidas");
          console.log(numb3);
          }





// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------







function enviar(event) {


  if (validar()) {

    console.log("validó bien");
    alert("datos bien ingresados");
  }
  else{
    alert("datos mal ingresados");
    console.log("no valido nada"); 
  } 
  
  return false
}









function validar() {
  
   console.log("validar");
  
  let list_errores = [];
  
  let regex_solo_letras = /^[A-Za-z]+$/;
  
    let regex_solo_letras_numeros = /^[A-Za-z0-9]+$/;
  
  let regex_solo_email = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;
  
  let elements = document.getElementsByName("vehicl");
  
  // 
  // 
  // validar si input de elementos extras es texto correcto, puede ser número
  let p_del_rate = document.createElement("p");






  
   elements.forEach((rate) => {
     
      console.log("rate.value:");
      console.log(rate.value);
      // divChecksComidas2.removeChild(divChecksComidas2.lastChild);


     if (rate.value.match(regex_solo_letras_numeros) )     {
       console.log("super regex rate");
       p_del_rate.innerHTML = " ";
       divChecksComidas.removeChild(divChecksComidas.lastChild);
       document.getElementById("divChecksComidas2").append(p_del_rate);
      
       } 
     
     else if (!rate.value.match(regex_solo_letras_numeros) || rate.value.trim() == ''){ 
       
            console.log("not super regex rate");
            divChecksComidas.removeChild(divChecksComidas.lastChild);
            p_del_rate.innerHTML = "Por favor, ingrese un elemento válido (solo letras y números)";
            document.getElementById("divChecksComidas2").append(p_del_rate);
            list_errores.push(1);
       
            }
     
            });








  



    // 
  // 
  // acá empieza a obtener y validar <nombre>, <email>, <biografía>
  let elemento_nombre_negocio =document.getElementById("nombre_negocio_input");
  let p_del_elmt_nbrm_ngco = document.createElement("p");
    
  let elemento_mail_negocio =document.getElementById("nombre_mail_input");
  let p_del_elmt__mail_ngco = document.createElement("p");
    
  let elemento_biografia_negocio = document.getElementById("biografia_input");
  let p_del_elemento_biografia_negocio = document.createElement("p");



  let string_p_del_elmt_nbrm_ngco = "Por favor, ingrese un nombre válido (solo letras)";
  let string_p_del_elmt__mail_ngco = "Por favor, ingrese un email válido ";
  let string_p_del_elemento_biografia_negocio = "Por favor, ingrese una biografía válida (solo letras y números)";


  
  // 
  // 
  // validar si input de <nombre> es texto correcto, solo letras
     if  (elemento_nombre_negocio.value.match(regex_solo_letras) )  {
       console.log("super regex name");
       p_del_elmt_nbrm_ngco.innerHTML = " ";
       divNombreNegocio.removeChild(divNombreNegocio.lastChild);
       document.getElementById("divNombreNegocio").append(p_del_elmt_nbrm_ngco);
      
     } else if (!elemento_nombre_negocio.value.match(regex_solo_letras) || elemento_nombre_negocio.value.trim() == '') { 
            console.log("not super regex name");
            divNombreNegocio.removeChild(divNombreNegocio.lastChild);
            p_del_elmt_nbrm_ngco.innerHTML = string_p_del_elmt_nbrm_ngco;
            document.getElementById("divNombreNegocio").append(p_del_elmt_nbrm_ngco);
            list_errores.push(1);
       
            }

   
 
  // 
  // 
  // validar si input de <email> es email correcto
       if (regex_solo_email.test(elemento_mail_negocio.value) )    {
       console.log("super regex email");
       p_del_elmt__mail_ngco.innerHTML = " ";
       divEmailNegocio.removeChild(divEmailNegocio.lastChild);
       document.getElementById("divEmailNegocio").append(p_del_elmt__mail_ngco);
      
     } else if (!regex_solo_email.test(elemento_mail_negocio.value) || elemento_mail_negocio.value.trim() == ''){ 
         console.log("not super regex email");
         divEmailNegocio.removeChild(divEmailNegocio.lastChild);
         p_del_elmt__mail_ngco.innerHTML = string_p_del_elmt__mail_ngco;
         document.getElementById("divEmailNegocio").append(p_del_elmt__mail_ngco);
         list_errores.push(1)
       
            }



  
      if (document.getElementById("divChecksComidas2").childElementCount > 1 ) {
        console.log("childElementCount eeeeeeeeeee")
      }
        console.log("childElementCount de check carnes")
        console.log(document.getElementById("divChecksComidas2").childElementCount)
      
        console.log("val termina");
        console.log( list_errores == 0);
        
     










console.log("casi super regex elemento_biografia_negocio");
  // 
  // 
  // validar si input de <biografia> es texto correcto, solo letras
     if (elemento_biografia_negocio.value.match(regex_solo_letras) )     {
      console.log("super regex elemento_biografia_negocio");
       p_del_elemento_biografia_negocio.innerHTML = " ";
       divBiografia.removeChild(divBiografia.lastChild);
       document.getElementById("divBiografia").append(p_del_elemento_biografia_negocio);
      
     } else if (!elemento_biografia_negocio.value.match(regex_solo_letras) || elemento_biografia_negocio.value.trim() == ''){ 
            console.log("not super regex elemento_biografia_negocio");
            divBiografia.removeChild(divBiografia.lastChild);
            p_del_elemento_biografia_negocio.innerHTML = string_p_del_elemento_biografia_negocio;
            document.getElementById("divBiografia").append(p_del_elemento_biografia_negocio);
            list_errores.push(1);
       
            }



  return list_errores == 0;
  
 } // final de validar()