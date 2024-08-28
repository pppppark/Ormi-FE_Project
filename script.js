function validateEmailCheck(){
  var email = document.getElementById("modal");
  var valid_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; 
  //(알파벳,숫자)@(알파벳,숫자).(알파벳,숫자)

  if(valid_email.test(email.value)==false){ 
    return false;
  }
  else {
    alert("이메일이 정상적으로 입력되었습니다.");
  }
}
