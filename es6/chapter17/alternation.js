const html = 'HTML with <a href="/one"> one link</a>, and some Javascript' +
              '<script src="stuff.js">';
const matches = html.match(/area|a|link|script|source/ig);  //첫 시도..?
console.log(matches)
// |는 대체를 뜻하는 메타 문자.. //(슬래시)안에 들어있는 것이 정규식..
// i - 대소문자 가리지 말고 , g - 전체를 검색하라..g가 없으면 해당되는것에 첫번째만 반환한다..