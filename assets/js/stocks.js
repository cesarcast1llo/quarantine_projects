function run() {
  var password = prompt('Password Please');
  //Change to your own Password
  if (password != 'hi') {
    // document.body.innerHTML = '';
    document.body.innerHTML = 'Wrong Password, Refresh to Try Again';
  } else {
    alert('Success');
  }
}
run();

function passWord() {
  var testV = 1;
  var pass1 = prompt('Please Enter Your Password', ' ');
  while (testV < 3) {
    if (!pass1) history.go(-1);
    if (pass1.toLowerCase() == 'letmein') {
      alert('You Got it Right!');
      window.open('protectpage.html');
      break;
    }
    testV += 1;
    var pass1 = prompt(
      'Access Denied - Password Incorrect, Please Try Again.',
      'Password'
    );
  }
  if ((pass1.toLowerCase() != 'password') & (testV == 3)) history.go(-1);
  return ' ';
}