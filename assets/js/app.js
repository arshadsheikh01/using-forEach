var cl = console.log;


var agesArray =[{
        name: "USA",
        population: 331002651,
        area: 9833520,
        capital: "Washington, D.C.",
        language: "English"
    },
    {
        name: "Canada",
        population: 37411047,
        area: 9984670,
        capital: "Ottawa",
        language: "English and French"
    },
    {
        name: "Mexico",
        population: 127575529,
        area: 1964375,
        capital: "Mexico City",
        language: "Spanish"
    },
    {
        name: "France",
        population: 66710000,
        area: 640679,
        capital: "Paris",
        language: "French"
    },
    {
        name: "Germany",
        population: 82790000,
        area: 357114,
        capital: "Berlin",
        language: "German",
    }
]
 var stdcountries = document.getElementById("stdcountries");
 
var result = '';
agesArray.forEach(function(temObj, index){
    // cl(`${tem.name} ${tem.population}`)
     result += `<tr>
                    <td>${index + 1}</td>
                    <td>${temObj.name}</td>
                    <td>${temObj.population}</td> 
                    <td>${temObj.area}</td>
                    <td>${temObj.capital}</td>
                    <td>${temObj.language}</td>   
     </tr>`
})

stdcountries.innerHTML = result;


var mobiles =[
    { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
    { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
    { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
    { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
    { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
  ]

  var imgcontainer = document.getElementById("imgcontainer");

  var result ='';
  mobiles.forEach(function(elem, index){
    // cl(`${elem.name}`)
     result += `<tr>
                    <td>${index + 1}</td>
                    <td>${elem.name}</td>
                    <td>${elem.price}</td>
                    <td>${elem.color}</td>
                    <td>${elem.storage}</td>
                    <td>${elem.camera}</td>    
     </tr>`
  })
cl(result);
  imgcontainer.innerHTML = result