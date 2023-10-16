// // 1. yöntem array literal-tercik edilen yöntem

// const isimler = ["ahmet", "mehmet", 4, true, 6.6, "Canan", "yeni"];
// console.log(isimler);

// console.log("uzunluk:", isimler.length);
// console.log(isimler[0]); //ahmet

// console.log(isimler[5]); //canan

// const sonEleman = isimler[isimler.length - 1]; //en son eleman
// console.log(sonEleman);

// isimler[4] = "6";
// console.log(isimler); //6.6 6 oldu

// isimler[2]++;
// console.log(isimler);

// isimler = "acaba değişir mi?";

// console.log(isimler);

const diller = ["java","c++",
  ["ASM", "Binary"],
  "javascript",
  new Date().getFullYear(),];

console.log(diller);

diller[2] [1] = "C"
console.log(diller);


// // 2. yöntem object constructor

const languages = new Array("C++", "java", "PHP")
console.log(languages);

languages[0] = "Python"
console.log(languages);

const numbers = new Array(3,2,1,0)   
console.log(numbers);

// eğer costructura parametre olarak tek bir sayı girilirse bunu o sayıda bir bellek alanı acılacakmış gibi dusunur.

const numbers1 = new Array(0)//[]
console.log(numbers1);


// // 3. yöntem (Array.of())

const numbers2 = Array.of(5)
console.log(numbers2);
