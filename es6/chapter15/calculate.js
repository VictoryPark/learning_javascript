const dates = [];

const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;

for(let i=0;i<10;i++) {
  dates.push(new Date(min + delta*Math.random()));
}

//dates.sort((a,b) => b-a);
//dates.sort((a,b) => a-b);
dates.sort((a,b) => b<a);   //날짜순으로 정렬
dates.sort((a,b) => b>a);   //역순으로 정렬..
console.log(dates);
