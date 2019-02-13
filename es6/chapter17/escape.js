const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
let match = input.match(/\d{5}.*/); //55532. Phone: 555-555-2525.
match = input.match(/\d{5}./);   //55532.
match = input.match(/\d{5}/);   //55532
console.log(match);

const equation = "(2 + 3.5) * 7";
match = equation.match(/\(\d \+ \d.\d\) \* \d/); 
/// 마침표는 줄바꿈 문자를 제외한 '모든' 문자에 일치하는 특수 문자!
match = equation.match(/\(\d \+ \d\.\d\) \* \d/);// \. 와 . 는 다르다는 뜻!!
console.log(match);