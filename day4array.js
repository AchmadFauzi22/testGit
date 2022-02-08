// array digunakan nutuk menyimpan data satu atau lebih
// syntax array
// tiap data dalam array dikasih label sesuatu yang disebut index
// index dimulai dari "0" dan seterusnya
// tiap value dibatasi dengan "koma"
// let things = ['laptop', 'pulpen', 'pensil']
// things.name ="laptop"
// console.log(things)
// console.log(things.name)
// console.log(things.harga)
// console.log(things.stock)
// untuk megganti satu value( isi dari array)
// jika tidak ada isi akan ditambah, jika ada isinya akan diganti
// things.name ="laptop"
// console.log(things.length)
// console.log(things.length.name)

// PUSH
// let things = ['laptop', 'pulpen', 'pensil']
// console.log(things)
// things.push('baju')
// things[3]= 'baju'
// things[things.length-1]= 'baju'
// console.log(things)

// //POP untuk menghapus yang ujung
// things.pop()
// console.log(things)
// let data = things.pop()
// console.log(data)

// Unshift memasukan dari depan
//shfit unutk menghapus
// let things = ['laptop', 'pulpen', 'pensil']
// console.log(things)
// things.unshift('baju')
// things[3]= 'baju'
// things[things.length-1]= 'baju'
// console.log(things)

//splice

// let things = ['laptop', 'pulpen', 'pensil']
//splice bisa buat edit, nambahin, atau hapus, di index mana saja
//splice(start index, berapa yang mau dihpus, dataYang)
//ini contoh untuk menambahkan ditengah
// things.splice(2,0,"kacamata")
// //contoh hapus ditengah
// things.splice(1,2)
// console.log(things)

// Slice harus disimpan ke vareiabel dulu

//let things = ['laptop', 'pulpen', 'pensil']
//let newThings = things.slice(1)
//console.log('things :', things)
//console.log('newThings :',newThings)

//include
// let things =['pulpen','buku', 'laptop']
// let a = things.includes('pulpen')
// console.log(a)

// indexof


// SORT
//huruf besar lebih duluan
// let things =['zebra','buku', 'laptop']
// things.sort()
// things.reverse()
// console.log(things)

// join menggabungan array of string menjadi string
// jika number smeua bisa, tetapi jadi stiring, (number jadi array tidak bisa)
// let days =['monday', 'tuesday', 'wenesday']
// let newDays = days.join(' ')
// console.log(newDays) 


// concat
// let things = ['baju', 'celana']
// let fruits = ['apel', 'jeruk']
// let animals = [ 'kucing', 'kuda']
// let two = things.concat(fruits)
// console.log(two)

// let angka = [2,3,5,6,7]
// angka.sort()
// angka.reverse()
// console.log(angka)

let angka =[2,3,5,6,7]
angka = angka.sort().reverse().join('')
console.log(angka)

//cara benarnya
let angka = 23567
angka = angka + ''
angka = angka.split('').reverse().join('')
angka = Number(angka)
console.log(angka)

let noTelp = ['7656576', '7676898', '124527288']
noTelp = noTelp + ''
noTelp = noTelp.toString ('')
console.log(noTelp)
noTelp.unshift(08)
noTelp.name= 08
noTelp[noTelp]= 08
console.log(noTelp)

let kata = 'andika'
let jumlahVocal =['a','i','u','e','o']
for(let i = kata.includes1;i>=0;i++){
    jumlahVocal.includes(kata[i])
}
kata = jumlahVocal
console.log(kata)


    
    
//console.log(noTelp) 