const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
console.log(promo.match(/([A-Z])([A-Z])\2\1/g));

const html = `<img alt='A "simple" example.'>`+
              `<img alt="Don't abuse it!">`;
console.log(html.match(/<img alt=(['"]).*?\1/g));
console.log(html.match(/<img alt=(['"]).*\1/g));

