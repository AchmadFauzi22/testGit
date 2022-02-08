let output =''
let jumlah = 5
for (let i = 0; i < jumlah ; i++) {

for (let j = i; j < jumlah-1; j++) {
    output+=' '
    
}
for (let j = 0; j <=i; j++) {
    output+='*'
    
}
for (let j = 1; j <= i ; j++) {
    output+='*'
    
}
if(i<jumlah-1){
    output+='\n'
}
}
console.log(output)