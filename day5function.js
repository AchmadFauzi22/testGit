// function expresion
// console.log(myFunction())
// function myFunction(param1, param2){
//     return true
// }
// //function declaresion
// const myFunction2= function(){
//    return false
// }
// const myFunction2=()=>{
//     return false
// }
// console.log(myFunction2())

// const myFunction2=()=>{
//     console.log('jalan di line 16')
// }
// myFunction2()
//parseInt (untuk proteksi)

// const tambahan = (angka1, angka2)=>{
//     let hasil = angka1 + angka2
//     return hasil

// }
// console.log(tambahan(4,5))
// console.log(tambahan(6,7))

// // default parameter
// const tambahan = (angka1 =100, angka2 =0)=>{
//     if(angka1 === undefined || angka2 === undefined) {
//         return ' harus input angka 2-2nya'

//     }
//     let hasil = parseInt(angka1) + parseInt(angka2)
//     if(isNaN(hasil)){
//         return 'input harus number'
//     }
//     return hasil
// }
// const kurangan = (angka)


// MAP (MAPPING)
// let angka = [1,2,3,4,5]
// let angka1 = angka.map((val)=>{
// return val /2

// })
// console.log(angka1)

// let angka2 = [1,3,4,5]
// let output = angka2.map((val)=>{
//     if(val %2 ==0){
//         return 'even'
//     }else{
//         return 'odd'
//     }
// })
// console.log(output)


//  function myFunction (malam,katak){
//  return true
 
//  }
//  console.log(myFunction())


// cara sendiri
//  const Palindrome = (str)=>{
//      const isPalindrome = str.split (' ').reverse().join();
//      console.log(str===isPalindrome);
//      console.log(str===isPalindrome);
//      console.log(str===isPalindrome);
// }
//   Palindrome('malam');
//   Palindrome('katak');
//   Palindrome('pagi');
// cara pembahasan les



// reverse 
// const reverseWord = ()=>{
//      kalimat di split berdasarkan spasi
//     kalimat = kalimat.split(' ')
//     kalimat = kalimat.map((val)=>{
//     return val.split(' ').reverse(' ').join(' ')

//     })
// }
// console.log(reverseWord('Hai aku Joan Miranda'))
//masih error


//FILTER
// let deret = [1,2,3,4,5]
// let newDeret= deret.filter((val)=>{
//     return val %2 ===1

// })
// console.log(newDeret)

//SORT
// let things = [ 102, 32, 16,50,316]
// things.sort((a,b)=>{
//     return b-a
// })
// console.log(things)

// const mapDuplicate =(arr,cb)=>{
//      let newArr =[]

//      for (let i = 0; i < arr.length; i++) {
//          newArr.push(cb(arr[i],i,arr))
//      }
//          return newArr
        
//      }
//      const kali2 = (val) => val *2
//     //  const filterDuplicate=(arr,cb)=>{
//     //      let newArr = []

//      console.log(mapDuplicate([1,2,3,4,5],kali2))
     

       
    


// console.log

// const median = (arr) => {
//     let angkaSorted = arr.sort((a,b) => a-b);
//     if (angkaSorted.length % 2 === 0 ) {
//         let angka1 = angkaSorted[angkaSorted.length / 2];
//         let angka2 = angkaSorted[angkaSorted.length / 2 - 1];
//         let hasil = (angka1 + angka2) / 2;
//         return hasil;
//         console.log(hasil)
//     } else {
//         let hasil = angkaSorted[Math.floor(angkaSorted.length / 2)];
//         return hasil;
//         console.log(hasil);
//     }
// };  

// let angka = [1, 2, 3, 2, 5, 2, 7, ,2]
// let hasil = median([1, 2, 3, 2, 5, 2, 7, 2]);

// console.log(median(angka));

// MODUS

const mode = (arr) => {
    let output; 
    // jumlah sama terbanyak adalah jumlah berapa kali angka yang sama dan terbanyak
    let jumlahSamaTerbanyak = 0;
    for (let i = 0; i < arr.length; i++) {
        // jumlah sama adalah jumlah berapa kali angka pertama ketemu dengan angka yang sama
        let jumlahYangSama = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // jika ada angka yang sama maka jumlahYangSama kita tambahkan 1
                jumlahYangSama++;
            } 
            
        }
            if(jumlahYangSama > jumlahSamaTerbanyak){
                output = arr[i];
                jumlahSamaTerbanyak = jumlahYangSama;
            }
    }
    return output;
};
console.log("modusnya adalah", mode([1, 1, 3, 1, 5, 1, 7, 2]))

