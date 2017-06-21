"use strict";

const habilitarBoton = function(){
  if(state.phoneChecked && state.termsChecked){
    $("#next").removeClass("disabled");
  }else{
    $("#next").addClass("disabled");
  }
}
