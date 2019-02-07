function validateEmail(email) {
  return email.match(/@/) ?
    email :
    new Error(`invalid email: ${email}`); //예상가능한 에러만 담긴다..@ 기호 없는 문자열..
}

const email = null;

try {
  const validatedEmail = validateEmail(email);  //null은 문자열이 아니라서 match 함수를 실행 못시켜서 에러난다..
  if(validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`)
  } else {
    console.log(`Valid Email: ${validatedEmail}`);
  }
} catch(err) {
  console.error(`Error : ${err.message}`);
}

function billPay(amount, payee, account) {
  if(amount > account.balance)
      throw new Error("insufficient funds");  //throw가 있으면 함수는 실행을 멈춘다.
  account.transfer(payee, amount);
}