let nama = document.getElementById("nama-barang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(nama.value)
    console.log(jumlah.value)
    console.log(keterangan.value);

    if (localStorage.getItem("belanja") === null) {
        //simpan array kosong 
        localStorage.setItem("belanja", "[]")
    }

    //panggil local storage 
    let data = JSON.parse(localStorage.getItem("belanja"))
    console.log(data)

    data.push({
        nama: nama.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    //konversi dari object menjadi string

    localStorage.setItem("belanja", JSON.stringify(data))

    //tampil 
    tampil()

}

   function tampil() {
        //panggil dulu local storage
        let hasil = JSON.parse(localStorage.getItem("belanja"))

        //clear
        document.getElementById("list-belanja").innerHTML = ""

        //lakukan perulangan (forEach)
        hasil.forEach(element => {
            //console.log(element)
            document.getElementById("list-belanja").innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
            <h4 class="text-primary">${element.nama}</h4> 
            <h6 class="text-danger">${element.jumlah}</h6>
            
            <div> ` 

        });
    }

