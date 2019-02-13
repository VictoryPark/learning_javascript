const html = '<br> [!CDATA[[<br> ]]';
const matches = html.match(/<br>/ig);

console.log(matches);   //[ '<br>', '<br>' ]
// 이중에서 진짜 <br> 태그는 하나래..