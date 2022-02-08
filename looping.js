// while
//ini infinite looping, harus cari jalan keluar
// (!) tanda seru untuk "kebalikan antar true dan false"
// while (true){
//     console.log('line 4')
// }
// let angka = 1
// while (angka<=5){
//     console.log('count- '+angka)
//     angka++
//}
// let angka = 1
// while (angka<6){
//     console.log('count- '+angka)
//     angka++
// }

// do while, kerjakan dulu, baru di cek, hanya di jalankan satu kali
// let angka = 1
// do {
//     console.log('count- '+angka)
//     angka++
// } while (angka<=6);

// for, alur initialisasi variable ley numb, jika kondisi kurang dari sama dengan 5 
// for (let numb = 1 ; numb <= 5; numb++) {
//     console.log = ('count-'+numb);
// }
    
// for (let numb = -5; numb < 0; numb++) {
//     console.log = ('count-'+(numb*-1));
    
// }

// for (let numb = -5; numb <= 10; numb++) {
//     console.log = ('count-' Math.abs(numb);
    
// }

// BREAK
// let angka = 0
// while (true) {
//     if (angka >3){
//         console.log(angka)
//         break
//     }    
//     angka++
//}
// CONTINUE, bisa di "do while",while, for
//     let angka = 0
//     while (true) {
//         console.log(angka)
//     if (angka >3){
//         angka++
//         continue
//     }    
    

// }

// bikin bintang 
// console.log('* * * * *')
// console.log('==========')
// let output = ' '

// for (let i = 2 ; i  < 5 ;i++){
//     console.log(output+=' * ')
//}
// let output = ' '
// for (let i = 5 ; i > 0 ;i--){
//     console.log(output+=' * ')
// }

// bikin bintang persegi
// console.log('*****\n*****\n*****\n*****\n*****\n')

// let output=''

// for (let i = 0 ; i < 5;i++){
//     for (let j = 0 ; j < 5; j++) {
//         output+='*'
        
//     }
//     output+='\n'
// }console.log(output)


// beda dengan horizontal
// let output = ''
// for(let i = 0;i < 5;i++){
//     output+='*'
// }
// console.log(output)



// SEGITIGA TERBALIK
// let tinggi = 5
// let output =''
// for(let i = 0 ; i < tinggi ;i++){
//     for(let j= i;j< tinggi ;j++){
//         output+='*'

//     }
//     if(i <tinggi -1){
//         output+='\n'
//     }
// }
// console.log(output)

//segitiga alas atas

let tinggi = 10
let output = ''
for(let i = 0 ; i < tinggi ;i++){
    for(let j= i; j < tinggi-1 ;j++){
        output+=' * '
         output+= '   '
    }
    // segitiga alas bawah
    //for(let k = 0; k <= i ; k++){
            //output+=' * '
        //}
    
    if(i <tinggi -1){
        output+='\n'
    }
}
console.log(output)
