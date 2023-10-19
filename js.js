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

// ***********************************************

// /DİZİYİ DEĞİŞTİREN MUTATORS(METOTLAR)

const meyveler = ["çilek", "muz", "elma"]
console.log(meyveler);

const uzunluk = meyveler.push("kavun", "kiraz")//push dizinin sonuna eleman ekler
console.log(meyveler, uzunluk);

const removed = meyveler.pop()//pop son elamanı siler
console.log(meyveler, removed);

const removedShift = meyveler.shift()
console.log(removedShift);
console.log(meyveler);

//splice 
// 1.parametre eklenecek indis
// 2."0" ise araya ekler "1" le üzerine yazar
// 3.Eklenecek veri

meyveler.splice(1, 0, "kivi", "mango")
console.log(meyveler);

// meyveler.splice(3, 1)
// console.log(meyveler);//3den başla 1 eleman sil

meyveler.sort()
console.log(meyveler);

const veriler = [1,2,3,4,5]
veriler.fill(0)
console.log(veriler);//sıfırlar[0,0,0,0,0] başka bir değer verirsen onu yazar..

veriler.fill(2,1,3)
console.log(veriler);//[[0,2,2,0,0]]

veriler.fill(1,-3,)
console.log(veriler);

        
//Dizi erişim metotları********************************

const numbers3 = [3,5,2,"4", "bes", 3, "5", "bes", 1,"3"]

console.log(numbers3.includes("4"));//true
console.log(numbers3.includes("Four".toLowerCase()));//true
console.log(numbers3.indexOf("4"));//3 indexi bulur
console.log(numbers3.lastIndexOf("bes"));//7 son index


myFunc()
function myFunc() {
    console.log(myNum);
    var myNum = 30

}

function addFunc(x) {
    ++x
    return function (y) {
        return x+y
    }
}

let addTen = addFunc(10)
console.log(addTen(7));