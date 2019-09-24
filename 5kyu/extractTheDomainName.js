function domainName(url) {

    let pecah = url
        .split('://')
        .join(',')
        .split('.')
        .join(',')
        .split(',')
    console.log(pecah)

    if (pecah.length === 2) {
        return pecah[0]
    } else if (pecah[1] === 'www') {
        return pecah[2]
    } else if (pecah[1] === 'co') {
        return pecah[0]
    } else {
        return pecah[1]
    }
}

console.log(domainName("http://google.com"))//, "google");
console.log(domainName("http://google.co.jp"))//, "google");
console.log(domainName("www.xakep.ru"))//, "xakep");
console.log(domainName("https://youtube.com"))//, "youtube");

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };