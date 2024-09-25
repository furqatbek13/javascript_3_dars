///////     UYGA VAZIFA     ///////

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


// 5-misol
// let son1 = prompt("birinchi sonni kiriting: ");
// let son2 = prompt("ikkinchi sonni kiriting: ");
// if (son1 < son2) {
//     console.log("Kichik sonning tartib raqami: 1"); 
// } else if (son2 < son1) {
//     console.log("Kichik sonning tartib raqami: 2"); 
// } else {
//     console.log("Ikkala son ham teng."); 
// }


// 6-misol
// let son1 = prompt("birinchi sonni kiriting: ");
// let son2 = prompt("ikkinchi sonni kiriting: ");
// if (son1 > son2) {
//     console.log("Katta son: " + son1 );
//     console.log("Kichik son: " + son2);
// } else if (son2 > son1) {
//     console.log("Katta son: " + son2 );
//     console.log("Kichik son: " + son1);
// } else {
//     console.log("Ikkala son ham teng: " + son1);
// }


// 7-misol
// let A = prompt("birinchi sonni kiriting: ");
// let B = prompt("ikkinchi sonni kiriting: ");
// let natija;

// if (A > B) {
//     natija = "A sonini kichik, B sonini katta qilish: A = " + B + ", B = " + A;
// } else {
//     natija = "A sonini kichik, B sonini katta qilish: A = " + A + ", B = " + B;
// }

// console.log(natija);



// 8-misol
// let A = prompt("birinchi sonni kiriting: ");
// let B = prompt("ikkinchi sonni kiriting: ");
// let natija;
// if (A !== B) {
//     A = A + B;
//     B = A;
// } else {
//     A = 0;
//     B = 0;
// }

// natija = "A = " + A + ", B = " + B;
// console.log(natija);


// 9-misol
// let A = prompt("birinchi sonni kiriting: ");
// let B = prompt("ikkinchi sonni kiriting: ");
// let natija;
// if (A !== B) {
//     A = Math.max(A, B);
//     B = A;
// } else {
//     A = 0;
//     B = 0;
// }

// natija = "A = " + A + ", B = " + B;
// console.log(natija);



//  10-misol
// let A = prompt("birinchi sonni kiriting: ");
// let B = prompt("ikkinchi sonni kiriting: ");
// let C = prompt("uchinchi sonni kiriting: ");

// if (A <= B && A <= C) {
//     kichik = A;
// } else if (B <= A && B <= C) {
//     kichik = B;
// } else {
//     kichik = C;
// }



//  11-misol
// let son1 = prompt("1-sonni kiriting:");
// let son2 = prompt("2-sonni kiriting:");
// let son3 = prompt("3-sonni kiriting:");

// // Sonlarni raqamga aylantirish
// son1 = Number(son1);
// son2 = Number(son2);
// son3 = Number(son3);

// // Kichik va katta sonlarni aniqlash
// let kichik_son = son1;
// let katta_son = son1;

// // Kichik va katta sonlarni topish
// if (son2 < kichik_son) {
//     kichik_son = son2;
// }
// if (son3 < kichik_son) {
//     kichik_son = son3;
// }

// if (son2 > katta_son) {
//     katta_son = son2;
// }
// if (son3 > katta_son) {
//     katta_son = son3;
// }

// // O'rtacha sonni aniqlash
// let ortacha_son;

// if (son1 !== kichik_son && son1 !== katta_son) {
//     ortacha_son = son1;
// } else if (son2 !== kichik_son && son2 !== katta_son) {
//     ortacha_son = son2;
// } else {
//     ortacha_son = son3;
// }

// // Natijani chiqarish
// console.log("O'rtacha son:", ortacha_son);


// 12-misol
// Uchta sonni kiriting
// let son1 = prompt("1-sonni kiriting:");
// let son2 = prompt("2-sonni kiriting:");
// let son3 = prompt("3-sonni kiriting:");
// let engKattaYigindi = -Infinity; // boshida juda kichik son
// let sonA = 0;
// let sonB = 0;
// if (son1 + son2 > engKattaYigindi) {
//     engKattaYigindi = son1 + son2;
//     sonA = son1;
//     sonB = son2;
// }

// if (son1 + son3 > engKattaYigindi) {
//     engKattaYigindi = son1 + son3;
//     sonA = son1;
//     sonB = son3;
// }

// if (son2 + son3 > engKattaYigindi) {
//     engKattaYigindi = son2 + son3;
//     sonA = son2;
//     sonB = son3;
// }
// console.log("Eng katta yig'indi bo'lgan ikki son:", sonA, "va", sonB);



// 13-misol
// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// if (A < B && B < C) {
//     A = A * 2;
//     B = B * 2;
//     C = C * 2;
// } else {
//     A = -A;
//     B = -B;
//     C = -C;
// }
// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);


// 14-misol
// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// if ((A < B && B < C) || (A > B && B > C)) {
//     A = A * 2;
//     B = B * 2;
//     C = C * 2;
// } else {
//     A = -A;
//     B = -B;
//     C = -C;
// }
// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);



//  15-misol
// let son1 = prompt("1-sonni kiriting:");
// let son2 = prompt("2-sonni kiriting:");
// let son3 = prompt("3-sonni kiriting:");
// let son4 = prompt("4-sonni kiriting:");

// if (son1 === son2 && son1 === son3) {
//     console.log("Qolgan son 4-son: " + son4 + ", tartib raqami: 4");
// } else if (son1 === son2 && son1 === son4) {
//     console.log("Qolgan son 3-son: " + son3 + ", tartib raqami: 3");
// } else if (son1 === son3 && son1 === son4) {
//     console.log("Qolgan son 2-son: " + son2 + ", tartib raqami: 2");
// } else if (son2 === son3 && son2 === son4) {
//     console.log("Qolgan son 1-son: " + son1 + ", tartib raqami: 1");
// } else {
//     console.log("Xato: Hech bir uchta son o'zaro teng emas.");
// }


//  16-misol
// let x = prompt("x sonini kiriting:");
// let natija;

// if (x <= 0) {
//     natija = -x;
// } else if (x > 0 && x < 2) {
//     natija = x * x;
// } else if (x >= 2) {
//     natija = 4;
// }
// console.log("Natija:", natija);



//   17-misol
// let yil = prompt("Yilni kiriting:");
// let kunlarSoni;

// if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
//     kunlarSoni = 366;
// } else {
//     kunlarSoni = 365;
// }
// console.log(yil + " yilida " + kunlarSoni + " kun bor.");



//   18-misol
// let son = prompt("1-999 oraliqdagi sonni kiriting:");
// let natija;

// if (son >= 1 && son <= 999) {
//     if (son >= 10 && son < 100 && son % 2 === 0) {
//         natija = "Ikki xonali juft son";
//     } else if (son >= 10 && son < 100 && son % 2 !== 0) {
//         natija = "Ikki xonali toq son";
//     } else if (son >= 100 && son < 1000 && son % 2 === 0) {
//         natija = "Uch xonali juft son";
//     } else if (son >= 100 && son < 1000 && son % 2 !== 0) {
//         natija = "Uch xonali toq son";
//     } else if (son < 10) {
//         natija = "Bir xonali son";
//     }
// } else {
//     natija = "Xato: 1-999 oraliqdagi son kiriting.";
// }
// console.log("Natija:", natija);



//    19-misol
// let k = prompt("Baho (1-5) ni kiriting:");
// let natija;

// switch (k) {
//     case 1:
//         natija = "yomon";
//         break;
//     case 2:
//         natija = "qoniqarsiz";
//         break;
//     case 3:
//         natija = "qoniqarli";
//         break;
//     case 4:
//         natija = "yaxshi";
//         break;
//     case 5:
//         natija = "a'lo";
//         break;
//     default:
//         natija = "xato";
// }
// console.log("Natija: " + natija);





// 20-misol
// let oy = prompt("Oy raqamini kiriting (1-12):");
// let fasl;

// switch (oy) {
//     case 12: 
//     case 1:  
//     case 2:  
//         fasl = "qish";
//         break;
//     case 3:  
//     case 4:  
//     case 5:  
//         fasl = "bahor";
//         break;
//     case 6:  
//     case 7:  
//     case 8:  
//         fasl = "yoz";
//         break;
//     case 9:  
//     case 10: 
//     case 11:
//         fasl = "kuz";
//         break;
//     default:
//         fasl = "xato";
// }
// console.log("Natija: " + fasl);



//  21-misol
// let oy = prompt("Oy raqamini kiriting (1-12):");
// let kunlar;

// switch (oy) {
//     case 1: 
//     case 3:  
//     case 5: 
//     case 7:  
//     case 8:  
//     case 10: 
//     case 12: 
//         kunlar = 31;
//         break;
//     case 4: 
//     case 6: 
//     case 9:  
//     case 11: 
//         kunlar = 30;
//         break;
//     case 2: 
//         kunlar = 28; 
//         break;
//     default:
//         kunlar = "xato"; 
// }
// console.log(oy + "-oyda kunlar soni: " + kunlar);




//  22-misol (tushunmadim chatgpdan so'rab ishladm buni)
// let birlik = prompt("Uzunlik birligini kiriting (1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5-santimetr):");
// let uzunlik = prompt("Kesma uzunligini kiriting:");
// let metrlarda;

// switch (birlik) {
//     case 1: 
//         metrlarda = uzunlik / 10;
//         break;
//     case 2:
//         metrlarda = uzunlik * 1000;
//         break;
//     case 3:
//         metrlarda = uzunlik;
//         break;
//     case 4: 
//         metrlarda = uzunlik / 1000;
//         break;
//     case 5:
//         metrlarda = uzunlik / 100;
//         break;
//     default:
//         metrlarda = "xato"; 
// }
// if (metrlarda !== "xato") {
//     console.log("Kesma uzunligi metrlarda: " + metrlarda);
// } else {
//     console.log("Berilgan uzunlik birligi xato kiritilgan.");
// }




//   23-misol
// let birlik = prompt("Og'irlik birligini kiriting (1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5-sentner):");
// let ogirlik = prompt("Og'irlik qiymatini kiriting:");
// let kilogrammda;

// switch (birlik) {
//     case 1: 
//         kilogrammda = ogirlik; 
//         break;
//     case 2: 
//         kilogrammda = ogirlik / 1e6; 
//         break;
//     case 3: 
//         kilogrammda = ogirlik / 1000; 
//         break;
//     case 4: 
//         kilogrammda = ogirlik * 1000;
//         break;
//     case 5:
//         kilogrammda = ogirlik * 0.1; 
//         break;
//     default:
//         kilogrammda = "xato";
// }
// if (kilogrammda !== "xato") {
//     console.log("Og'irlik kilogrammda: " + kilogrammda);
// } else {
//     console.log("Berilgan og'irlik birligi xato kiritilgan.");
// }




//  24-misol (tushunmadim chatgpdan so'rab ishladm buni)
// let D = prompt("Kun raqamini kiriting (1-31):");
// let M = prompt("Oy raqamini kiriting (1-12):");
// let sana;

// // Sanani aniqlash
// if (M === 1) {
//     sana = D + " yanvar";
// } else if (M === 2) {
//     sana = D + " fevral";
// } else if (M === 3) {
//     sana = D + " mart";
// } else if (M === 4) {
//     sana = D + " aprel";
// } else if (M === 5) {
//     sana = D + " may";
// } else if (M === 6) {
//     sana = D + " iyun";
// } else if (M === 7) {
//     sana = D + " iyul";
// } else if (M === 8) {
//     sana = D + " avgust";
// } else if (M === 9) {
//     sana = D + " sentabr";
// } else if (M === 10) {
//     sana = D + " oktabr";
// } else if (M === 11) {
//     sana = D + " noyabr";
// } else if (M === 12) {
//     sana = D + " dekabr";
// } else {
//     sana = "Xato: Oy raqami 1-12 oraliqda bo'lishi kerak.";
// }

// // Kunlar sonini tekshirish
// if ((M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) && (D > 31)) {
//     sana = "Xato: " + D + " yanvar uchun kunlar soni 31 dan oshmasligi kerak.";
// } else if ((M === 4 || M === 6 || M === 9 || M === 11) && (D > 30)) {
//     sana = "Xato: " + D + " aprel uchun kunlar soni 30 dan oshmasligi kerak.";
// } else if (M === 2 && (D > 28)) {
//     sana = "Xato: Fevral uchun kunlar soni 28 dan oshmasligi kerak.";
// }
// console.log("Berilgan sana:", sana);


//  25-misol (tushunmadim chatgpdan so'rab ishladm buni)
// Kun va oy raqamlarini kiriting
// let D = prompt("Kun raqamini kiriting (1-31):");
// let M = prompt("Oy raqamini kiriting (1-12):");

// // Raqamlarni raqamga aylantirish
// D = Number(D);
// M = Number(M);

// // Kunlar sonini aniqlash
// let kunlarSon = 0;

// // Har bir oy uchun kunlar sonini belgilash
// if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
//     kunlarSon = 31; // 31 kunli oylar
// } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//     kunlarSon = 30; // 30 kunli oylar
// } else if (M === 2) {
//     kunlarSon = 28; // Fevral - 28 kun (kabisa yili emas)
// } else {
//     console.log("Xato: Oy raqami 1-12 oraliqda bo'lishi kerak.");
// }

// // Keyingi sanani hisoblash
// if (D > 0 && D <= kunlarSon && M >= 1 && M <= 12) {
//     D++; // Kunni oshirish

//     // Agar kunlar sonidan oshsa, oyni oshirish
//     if (D > kunlarSon) {
//         D = 1; // Kunlarni 1 ga qaytarish
//         M++; // Oylarni oshirish
        
//         // Agar oy 12 dan oshsa, yilni oshirish va oy 1 ga qaytadi
//         if (M > 12) {
//             M = 1; // Yilning yangi boshlanishi
//         }
//     }

//     // Natijani chiqarish
//     console.log("Keyingi sana: " + D + " " + M + " oy");
// } else {
//     console.log("Xato: Kiritilgan kun raqami berilgan oy uchun noto'g'ri.");
// }



//  26-misol 


// 27-misol
// let D = prompt("Kun raqamini kiriting (1-31):");
// let M = prompt("Oy raqamini kiriting (1-12):");
// let kunlarSon = 0;
// switch (M) {
//     case 1: // Yanvar
//     case 3: // Mart
//     case 5: // May
//     case 7: // Iyul
//     case 8: // Avgust
//     case 10: // Oktabr
//     case 12: // Dekabr
//         kunlarSon = 31; // 31 kunli oylar
//         break;
//     case 4: // Aprel
//     case 6: // Iyun
//     case 9: // Sentabr
//     case 11: // Noyabr
//         kunlarSon = 30; // 30 kunli oylar
//         break;
//     case 2: // Fevral
//         kunlarSon = 28; // Fevral - 28 kun (kabisa yili emas)
//         break;
//     default:
//         console.log("Xato: Oy raqami 1-12 oraliqda bo'lishi kerak.");
//         break;
// }
// if (D > 0 && D <= kunlarSon && M >= 1 && M <= 12) {
//     console.log("Berilgan sana: " + D + " " + M + " oy");
// } else {
//     console.log("Xato: Kiritilgan kun raqami berilgan oy uchun noto'g'ri.");
// }



//  28-misol
// let son = prompt("10 dan 40 gacha butun sonni kiriting:");
// let masalaNomi = "";
// switch (son) {
//     case 10:
//         masalaNomi = "o'n ta masala";
//         break;
//     case 11:
//         masalaNomi = "o'n birta masala";
//         break;
//     case 12:
//         masalaNomi = "o'n ikki masala";
//         break;
//     case 13:
//         masalaNomi = "o'n uchta masala";
//         break;
//     case 14:
//         masalaNomi = "o'n to'rt masala";
//         break;
//     case 15:
//         masalaNomi = "o'n beshta masala";
//         break;
//     case 16:
//         masalaNomi = "o'n olti masala";
//         break;
//     case 17:
//         masalaNomi = "o'n yetti masala";
//         break;
//     case 18:
//         masalaNomi = "o'n sakkiz masala";
//         break;
//     case 19:
//         masalaNomi = "o'n to'qqiz masala";
//         break;
//     case 20:
//         masalaNomi = "yigirma masala";
//         break;
//     case 21:
//         masalaNomi = "yigirma birta masala";
//         break;
//     case 22:
//         masalaNomi = "yigirma ikki masala";
//         break;
//     case 23:
//         masalaNomi = "yigirma uchta masala";
//         break;
//     case 24:
//         masalaNomi = "yigirma to'rt masala";
//         break;
//     case 25:
//         masalaNomi = "yigirma beshta masala";
//         break;
//     case 26:
//         masalaNomi = "yigirma olti masala";
//         break;
//     case 27:
//         masalaNomi = "yigirma yetti masala";
//         break;
//     case 28:
//         masalaNomi = "yigirma sakkiz masala";
//         break;
//     case 29:
//         masalaNomi = "yigirma to'qqiz masala";
//         break;
//     case 30:
//         masalaNomi = "ellik masala";
//         break;
//     case 31:
//         masalaNomi = "ellik birta masala";
//         break;
//     case 32:
//         masalaNomi = "ellik ikki masala";
//         break;
//     case 33:
//         masalaNomi = "ellik uchta masala";
//         break;
//     case 34:
//         masalaNomi = "ellik to'rt masala";
//         break;
//     case 35:
//         masalaNomi = "ellik beshta masala";
//         break;
//     case 36:
//         masalaNomi = "ellik olti masala";
//         break;
//     case 37:
//         masalaNomi = "ellik yetti masala";
//         break;
//     case 38:
//         masalaNomi = "ellik sakkiz masala";
//         break;
//     case 39:
//         masalaNomi = "ellik to'qqiz masala";
//         break;
//     case 40:
//         masalaNomi = "qirq masala";
//         break;
//     default:
//         console.log("Xato: Kiritilgan son 10 dan 40 gacha bo'lishi kerak.");
// }
// if (masalaNomi !== "") {
//     console.log("Natija: " + masalaNomi);
// }



// 29-misol (tushunmadim chatgpdan so'rab ishladm buni)
// let son = prompt("100 dan 999 gacha bo'lgan butun sonni kiriting:");
// let yuzlar, onlar, birliklar;
// let natija = "";
// if (son >= 100 && son <= 999) {
//     yuzlar = Math.floor(son / 100); // Yuzlar
//     onlar = Math.floor((son % 100) / 10); // O'nlar
//     birliklar = son % 10; // Birliklar

//     // Yuzlar
//     switch (yuzlar) {
//         case 1:
//             natija += "bir yuz ";
//             break;
//         case 2:
//             natija += "ikki yuz ";
//             break;
//         case 3:
//             natija += "uch yuz ";
//             break;
//         case 4:
//             natija += "to'rt yuz ";
//             break;
//         case 5:
//             natija += "besh yuz ";
//             break;
//         case 6:
//             natija += "olti yuz ";
//             break;
//         case 7:
//             natija += "yetti yuz ";
//             break;
//         case 8:
//             natija += "sakkiz yuz ";
//             break;
//         case 9:
//             natija += "to'qqiz yuz ";
//             break;
//     }

//     // O'nlar
//     switch (onlar) {
//         case 1:
//             natija += "o'n ";
//             break;
//         case 2:
//             natija += "yigirma ";
//             break;
//         case 3:
//             natija += "o'ttiz ";
//             break;
//         case 4:
//             natija += "qirq ";
//             break;
//         case 5:
//             natija += "ellik ";
//             break;
//         case 6:
//             natija += "oltmish ";
//             break;
//         case 7:
//             natija += "yetmish ";
//             break;
//         case 8:
//             natija += "sakson ";
//             break;
//         case 9:
//             natija += "to'qson ";
//             break;
//     }

//     // Birliklar
//     switch (birliklar) {
//         case 1:
//             natija += "bir";
//             break;
//         case 2:
//             natija += "ikki";
//             break;
//         case 3:
//             natija += "uch";
//             break;
//         case 4:
//             natija += "to'rt";
//             break;
//         case 5:
//             natija += "besh";
//             break;
//         case 6:
//             natija += "olti";
//             break;
//         case 7:
//             natija += "yetti";
//             break;
//         case 8:
//             natija += "sakkiz";
//             break;
//         case 9:
//             natija += "to'qqiz";
//             break;
//     }
//     console.log("Natija: " + natija.trim());
// } else {
//     console.log("Xato: Kiritilgan son 100 dan 999 gacha bo'lishi kerak.");
// }


// 30-misol
// let yil = prompt("Yilni kiriting:");
// let ranglar = ["yashil", "qizil", "sariq", "oq", "qora"];
// let hayvonlar = [
//     "sichqon", "sigir", "yo'lbars", "quyon", "ajdar", 
//     "ilon", "ot", "qo'y", "maymun", "tovuq", "it", "to'ngiz"
// ];

// // Muchalni aniqlash
// if (yil >= 1984) {
//     let davrYili = (yil - 1984) % 60;
//     let rangIndex = davrYili % 5;
//     let hayvonIndex = davrYili % 12; 
//     let muchalRang = "";
//     let muchalHayvon = "";
//     switch (rangIndex) {
//         case 0:
//             muchalRang = "yashil";
//             break;
//         case 1:
//             muchalRang = "qizil";
//             break;
//         case 2:
//             muchalRang = "sariq";
//             break;
//         case 3:
//             muchalRang = "oq";
//             break;
//         case 4:
//             muchalRang = "qora";
//             break;
//     }

//     // Hayvoni aniqlash
//     switch (hayvonIndex) {
//         case 0:
//             muchalHayvon = "sichqon";
//             break;
//         case 1:
//             muchalHayvon = "sigir";
//             break;
//         case 2:
//             muchalHayvon = "yo'lbars";
//             break;
//         case 3:
//             muchalHayvon = "quyon";
//             break;
//         case 4:
//             muchalHayvon = "ajdar";
//             break;
//         case 5:
//             muchalHayvon = "ilon";
//             break;
//         case 6:
//             muchalHayvon = "ot";
//             break;
//         case 7:
//             muchalHayvon = "qo'y";
//             break;
//         case 8:
//             muchalHayvon = "maymun";
//             break;
//         case 9:
//             muchalHayvon = "tovuq";
//             break;
//         case 10:
//             muchalHayvon = "it";
//             break;
//         case 11:
//             muchalHayvon = "to'ngiz";
//             break;
//     }
//     console.log("Natija: " + muchalRang + " " + muchalHayvon + " yili");
// } else {
//     console.log("Xato: Kiritilgan yil 1984 dan katta bo'lishi kerak.");
// }







/////// Darsdagi Misollar   ///////////
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