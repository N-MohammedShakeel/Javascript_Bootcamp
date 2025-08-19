/*
    Regular Expression
        - Challenge
*/

let url1 = "ms.org";
let url2 = "http://ms.org";
let url3 = "https://ms.org";
let url4 = "https://www.ms.org";
let url5 = "https://www.ms.org:8080/articles.php?id=100&cat=topics";
let url6 = "https://www.youtube.com/watch?v=_n_oiZRqH_k";

let re = //ig;
  console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
