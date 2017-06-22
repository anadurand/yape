"use strict";
 const CrearUsuario = (updated)=> {

   const parent = $('<div class="initial-parent center-align"></div>');
   const divImg = $('<div></div>');
   const img = $('<img class="header-icon" src="assets/img/icons/lockone.png">');
   const h4 = $('<h4 class="gris-dark title-h4">Crea tu usuario Yape</h4>');
   const p = $('<p class="gris-letra title-p">Ingresa un nombre, email y clave de usuario.</p>');
   const divForm = $('<div class="div-input div-crear-user"></div>');
   const iconName = $('<img src="assets/img/icons/user.png" class="icono-name">');
   const inputName = $('<input type="text" class="center-align morado" required placeholder="Nombre">');
   const iconEmail = $('<img src="assets/img/icons/message-gray.png" class="icono-mail">');
   const inputEmail = $('<input type="email" class="center-align morado" required placeholder="correo@ejemplo.com">');
   const iconPassword = $('<img src="assets/img/icons/lock.png" class="icono-password">');
   const inputPassword = $('<input type="password" maxlength="6" class="center-align morado" required placeholder="Ingresa clave de 6 dígitos">');
   const message = $('<p class="gris-letra advice">Cuida esta clave como oro, es tu acceso a Yape.</p>');
   const btnCrearCuenta = $('<button id="newAcount" class="btn disabled boton-amarillo">crear cuenta</button>');
   const messageError = $('<p class="error rojo"></p>');

   divImg.append(img);
   divForm.append(iconName);
   divForm.append(inputName);
   divForm.append(iconEmail);
   divForm.append(inputEmail);
   divForm.append(iconPassword);
   divForm.append(inputPassword);
   parent.append(divImg);
   parent.append(h4);
   parent.append(p);
   parent.append(divForm);
   parent.append(message);
   parent.append(btnCrearCuenta);
   parent.append(messageError);


   inputName.on({
     keypress: validarLetra,
     keyup: function(e){
             var regex = /^([a-zñáéíóú]+[\s]*)+$/;
             if(regex.test($(this).val())){
                state.userName= $(this).val();
              }else{ state.userName = null;}
              habilitarBtnCrearCuenta();
            }
   });

   inputEmail.on("keyup", function(e){
     // Expresion regular para validar el correo
     var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
     if (regex.test($(this).val().trim())) {
       state.userEmail = $(this).val().trim();
     } else {
       state.userEmail = null;
     }
     habilitarBtnCrearCuenta();
   });

   inputPassword.on({
     keypress: validarNumero,
     keyup: function(e){
               var regex = /^[0-9]+$/;
               if(regex.test($(this).val()) && $(this).val().length == 6){
                  state.userPassword= $(this).val();
                }else{ state.userPassword = null;}
               habilitarBtnCrearCuenta();
             }
   });


   btnCrearCuenta.on("click", function(e){
     e.preventDefault();
     postCreateUser(state.phoneNumber, state.userName, state.userEmail, state.userPassword, updated);
   });

   return parent
 }
