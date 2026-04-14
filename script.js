//simpan ke local storage
localStorage.setItem("nom", 123);


//baca data local storage
console.log(localStorage.getItem("nom"))

//tampilkan di paragraf id=nom 
document.getElementById("nom").innerHTML = localStorage.getItem("nom")