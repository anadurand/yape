"use strict";

const habilitarBoton = function(){
  if(state.phoneChecked && state.termsChecked){
    $("#next").removeClass("disabled");
  }else{
    $("#next").addClass("disabled");
  }
}

const habilitarBtnCrearCuenta = function(){
  if(state.userName && state.userEmail && state.userPassword){
    $("#newAcount").removeClass("disabled");
  }else{
    $("#newAcount").addClass("disabled");
  }
}

const habilitarBtnCard = function(){
  if(state.creditCard && state.creditMonth && state.creditYear){
    $("#next").removeClass("disabled");
  }else{
    $("#next").addClass("disabled");
  }
}
