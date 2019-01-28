const sam1 = {
  name : 'Sam',
  age : 4
};

const sam2 = {name: 'Sam', age : 4};
//sam1 과 sam2는 서로 다른 객체이다..


const sam3 = {
  name : 'Sam',
  classification : {
    kingdom : 'Anamalia',
    phylum : 'Chordata',
    class : 'Mamalia',
    order : 'Carnivoria',
    family : 'Felidae',
    subfamily : 'Felinae',
    genus : 'Felis',
    species : 'catus'
  }
};

sam3.classification.family ;
sam3["classification"].family;
sam3.classification["family"];
sam3["classification"]["family"];

sam3.speak = function() { 
  return "Meow!";
};
console.log(sam3.speak());
console.log(sam3)

delete sam3.speak;    //삭제 연산자..

console.log(sam3)