let data = [
    {name : "dino", usia : 12},
    {name : "felix", usia : 20},
    {name : "arta", usia : 30},

]

const sortbyName = (arr, props, urutan) => {
    let newData = arr.sort((a,b) =>{
        if(a[props]>b[props]){
            return urutan === 'desc' ? 1:1
        }
        if(a[props]<b[props]){
            return urutan === 'desc' ? -1:1
        }
        return 0
    })
     return newData
}
console.log(sortbyName(data, "name", 'desc'))