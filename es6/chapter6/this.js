// const o = {
//   name: 'Julie',
//   greetBackWards : function () {
//     function getReverseName() {
//       let nameBackwards = '';
//       for(let i=this.name.length-1; i>=0; i--) {
//         nameBackwards += this.name[i];
//       }
//       return nameBackwards;
//     }
//     return `${getReverseName()} si eman ym , olleH`;
//   }
// }
// console.log(o.greetBackWards());

// const o = {
//   name: 'Julie',
//   greetBackWards : function () {
//     const self = this;
//     function getReverseName() {
//       let nameBackwards = '';
//       for(let i=self.name.length-1; i>=0; i--) {
//         nameBackwards += self.name[i];
//       }
//       return nameBackwards;
//     }
//     return `${getReverseName()} si eman ym , olleH`;
//   }
// }
// console.log(o.greetBackWards());

const o = {
  name: 'Julie',
  greetBackWards : function() {
    const getReverseName = () => {
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym , olleH`;
  }
}
console.log(o.greetBackWards());