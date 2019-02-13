const html = `<a class="foo" href="/foo" id="foo">Foo</a>\n` + 
      `<A href='/bar' Class="bar">Bar</a>\n` +
      `<a href="/baz">Baz</a>\n` +
      `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`;

function sanitizeATag(aTag) {
  //태그에서 원하는 부분을 뽑아낸다.
  const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
  //parts[1] 은 여는 <a> 태그에 들어있는 속성..
  //parts[2] dms <a> </a> 사이에있는 텍스트..
  //console.log(parts);
  const attributes = parts[1]
  //속성을 분해한다..
  .split(/\s+/);
  return '<a ' + attributes
        //class, id, href 속성만 필요하다..
        .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
        //스페이스 한칸으로 구분..
        .join('')
        //여는 <a> 태그 완성..
        + '>'
        //텍스트 추가..
        + parts[2]
        //태그 닫기...
        + '</a>'
}

//sanitizeATag(html);

html.replace(/<a .*?>(.*?)<\/a>/ig, function(m,g1,offset) {
  console.log(`<a tag found at ${offset}. contents: ${g1}`);
})

html.replace(/<a .*?<\/a>/ig, function(m) {
  return sanitizeATag(m);
})