console.log("hola mundo");


sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");


console.log(data);


localStorage.setItem("myCat", "Tom");


const cat = localStorage.getItem("myCat");

console.log(cat);