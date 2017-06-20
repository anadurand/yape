"use strict";

const postRegisterNumber = (cellphone, termsChecked, updated) => {
    $.post("api/registerNumber", {phone: cellphone, terms: termsChecked}, function(result){
        if(result.success){
          console.log(result.success);
          state.screen = 2;
          state.phoneNumber = result.data.phone;
          state.code = result.data.code;
          updated();
        }else{
          $("#next").after('<p>'+ result.message + '<p>');
        }
    });
}

const postResendCode = (cellphone)=>{

}
