"use strict";

const habilitarBoton = function(){
  if(state.phoneChecked && state.termsChecked){
    $("#next").attr("disabled", false);
  }else{
    $("#next").attr("disabled", true);
  }
}
