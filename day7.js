// sorting
let data = [
    {
        name : " selda",
        hobby : "tidur",
    },
    {
        name : "fauzi",
        hobby : "menonton",
    },
    {
        name : "arta",
        hobby : "tidur",
    },
];
console.log(data)

const renderData = () => {
    let element = document.getElementsById("data");
    //innerHtml untuk memasukkan Html ke dalam tag yang dituju
    let output = " ";
    data.forEach((val, index) => {
        output += `<tr>
                   <td>${index + 1}</td>
                   <td>${val.name}</td>
                   <td>${val.hobby}</td>
                </tr>`;
    });
    element.innertHTML = output;
};
renderData();

const klikAja = () => {
    console.log("klik aja");
};
//get value by tagname
console.log(document.getElementsByTagName("input"));
let input = document.getElementsByTagName("input")[0].value;

// get value by name
console.log(document.getElementsByName("kata")[0]);
let input = document.getElementsByName("kata")[0].value;

// get value by Id
let input = document.getElementsById("kata").value;
console.log("ketikan=", input);

// radio dan checkbox ada property yang namanya checked
let gender;
let radio1 = document.getElementsByName("gender")[0];
let radio2 = document.getElementsByName("gender")[1];
console.log("radio 1", radio1.checked);
console.log("radio 2", radio2.checked);
if (radio1.checked) {
    gender = radio1.value;
}else if (radio2.checked) {
    gender = radio2.value;
}
console.log(gender);

// //pake looping 
let gender;
let radios = doucment.getElementsByName("gender");

// looping forEach
radios.forEach((val) => {
    if (val.checked) {
        gender = val.value;
    }
});

//Looping biasa 
// for (let i = 0; i < radios.length; i++) {
//     if (radios[i].checked){
//         gender = radios[i].value;
//     }
    
// }
// console.log(gender);

