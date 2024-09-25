// 1-misol
// let son = Math.floor(prompt("Sonni kiriting:")); 

// if (son > 0) {
//   son = Number(son) + 1;  
// } else {
//   son = Number(son) - 2;  
// }

// console.log("Natija: " + son);


// 2-misol
// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");

// let musbat = 0; 
// let manfiy = 0; 

// if (son1 > 0) {
//   musbat++;
// } else if (son1 < 0) {
//   manfiy++;
// }

// if (son2 > 0) {
//   musbat++;
// } else if (son2 < 0) {
//   manfiy++;
// }

// if (son3 > 0) {
//   musbat++;
// } else if (son3 < 0) {
//   manfiy++;
// }

// console.log("Musbat sonlar soni: " + musbat);
// console.log("Manfiy sonlar soni: " + manfiy);


// 3-misol
// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");

// son1 = Number(son1); 
// son2 = Number(son2);
// son3 = Number(son3);

// let kichik, orta, katta;  

// if (son1 <= son2 && son1 <= son3) {
//   kichik = son1;
//   if (son2 <= son3) {
//     orta = son2;
//     katta = son3;
//   } else {
//     orta = son3;
//     katta = son2;
//   }
// } else if (son2 <= son1 && son2 <= son3) {
//   kichik = son2;
//   if (son1 <= son3) {
//     orta = son1;
//     katta = son3;
//   } else {
//     orta = son3;
//     katta = son1;
//   }
// } else {
//   kichik = son3;
//   if (son1 <= son2) {
//     orta = son1;
//     katta = son2;
//   } else {
//     orta = son2;
//     katta = son1;
//   }
// }
// console.log("Tartiblangan sonlar: " + kichik + ", " + orta + ", " + katta);



// 4-misol
// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");

// if (son1 === son2 && son1 !== son3) {
//   console.log("Teng bo'lmagan son uchinchisi (son3). Tartib raqami: 3");
// } else if (son1 === son3 && son1 !== son2) {
//   console.log("Teng bo'lmagan son ikkinchisi (son2). Tartib raqami: 2");
// } else if (son2 === son3 && son2 !== son1) {
//   console.log("Teng bo'lmagan son birinchisi (son1). Tartib raqami: 1");
// } else {
//   console.log("Hech qaysi ikkitasi teng emas yoki uchalasi ham teng.");
// }


// 5-misol
// let x = prompt("x sonini kiriting:");
// x = Number(x);
// let y; 
// if (x < -2 || x > 2) {
//   y = 2 * x;
// } else {
//   y = -3 * x; 
// }
// console.log("Funksiya qiymati: " + y);


// 6-misol
// let son = prompt("Butun son kiriting:");
// son = parseInt(son);
// if (son > 0) {
//     if (son % 2 == 0) {
//         document.write("Musbat juft son");
//     } else {
//         document.write("Musbat toq son");
//     }
// } else if (son < 0) {
//     if (son % 2 == 0) {
//         document.write("Manfiy juft son");
//     } else {
//         document.write("Manfiy toq son");
//     }
// } else {
//     document.write("Nol");
// }

// 7-misol
// let kun = prompt("1 dan 7 gacha son kiriting:");
// kun = parseInt(kun);
// switch (kun) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("1 dan 7 gacha son kiriting.");
// }


// 8-misol
// let A = prompt("A sonini kiriting:");
// A = parseFloat(A);
// let B = prompt("B sonini kiriting:");
// B = parseFloat(B);
// let amal = prompt("Amalni tanlang: 1 - Qo'shish, 2 - Ayirish, 3 - Bo'lish, 4 - Ko'paytirish");
// amal = parseInt(amal);

// switch(amal) {
//     case 1:
//         console.log("Natija: " + (A + B));
//         break;
//     case 2:
//         console.log("Natija: " + (A - B));
//         break;
//     case 3:
//         if (B != 0) {
//             console.log("Natija: " + (A / B));
//         } else {
//             console.log("Xato: Nolga bo'lish mumkin emas!");
//         }
//         break;
//     case 4:
//         console.log("Natija: " + (A * B)); 
//         break;
//     default:
//         console.log("Noto'g'ri amal kiritildi. 1-4 oralig'idagi qiymatlarni kiriting.");
// }



// 9-misol (tushunmadim chatgpdan oldim bu misolni)
// let yosh = prompt("Yoshingizni kiriting (20 dan 69 gacha):");
// yosh = parseInt(yosh); // Kiritilgan qiymatni butun songa aylantiramiz

// // O'nlik va birlik qismlarini aniqlash
// let onlik = Math.floor(yosh / 10); // O'nlik qismi
// let birlik = yosh % 10; // Birlik qismi

// // O'nlik qismini so'zlarda ifodalash
// var onlikSoz;
// switch(onlik) {
//     case 2:
//         onlikSoz = "Yigirma";
//         break;
//     case 3:
//         onlikSoz = "O'ttiz";
//         break;
//     case 4:
//         onlikSoz = "Qirq";
//         break;
//     case 5:
//         onlikSoz = "Ellik";
//         break;
//     case 6:
//         onlikSoz = "Oltmish";
//         break;
//     default:
//         document.write("Kiritilgan yosh 20 dan 69 gacha bo'lishi kerak.");
//         onlikSoz = ""; // noto'g'ri kiritilgan son uchun xabar
// }

// // Birlik qismini so'zlarda ifodalash
// var birlikSoz = "";
// switch(birlik) {
//     case 1:
//         birlikSoz = "bir";
//         break;
//     case 2:
//         birlikSoz = "ikki";
//         break;
//     case 3:
//         birlikSoz = "uch";
//         break;
//     case 4:
//         birlikSoz = "to'rt";
//         break;
//     case 5:
//         birlikSoz = "besh";
//         break;
//     case 6:
//         birlikSoz = "olti";
//         break;
//     case 7:
//         birlikSoz = "yetti";
//         break;
//     case 8:
//         birlikSoz = "sakkiz";
//         break;
//     case 9:
//         birlikSoz = "to'qqiz";
//         break;
// }

// if (onlikSoz) {
//     if (birlikSoz) {
//         document.write(onlikSoz + " " + birlikSoz + " yosh");
//     } else {
//         document.write(onlikSoz + " yosh");
//     }
// }


// UYGA VAZIFA 2-Qism ///////

// 1-misol
// let son = prompt("Butun son kiriting:");
// son = parseInt(son);
// if (son > 0) {
//     son = son + 1;
// }
// console.log("Natija: " + son);


// 2-misol
// let son =  prompt("Butun son kiriting:");
// son = parseInt(son);
// if (son > 0) {
//     son = son + 1;
// } else if (son < 0) {
//     son = son - 2; 
// } else {
//     son = 10; 
// }
// console.log("Natija: " + son);


// 3-misol
// let son1 = prompt("birinchi sonni kiriting: ");
// let son2 = prompt("ikkinchi sonni kiriting: ");
// let son3 = prompt("uchinchi sonni kiriting: ");
// let natija = 0;
// if (son1 > 0) {
//     natija = natija + 1;
// }

// if (son2 > 0) {
//     natija = natija + 1;
// }

// if (son3 > 0) {
//     natija = natija + 1;
// }
// console.log("Musbat sonlar soni: " + natija);


// 4-misol
// let son1 = prompt("birinchi sonni kiriting: ");
// let son2 = prompt("ikkinchi sonni kiriting: ");
// if (son1 > son2) {
//     console.log("Katta son: " + son1);
// } else if (son2 > son1) {
//     console.log("Katta son: " + son2);
// } else {
//     console.log("Ikkala son ham teng: " + son1);
// }