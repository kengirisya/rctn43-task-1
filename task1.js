// soal 1
var list = [[5,3,2,4,1,6], [1,2,2,3,4],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,2]]
var angka = []


for (let i=0; i < list.length; i++) {
  jumlah = 0
  for (let j=0; j < list.length; j++) {
    if(list[i][j] % 2 == 0) {
      jumlah += list[i][j]
    }
  }
  angka.push(jumlah)
}

console.log(`Soal 1 - Hasil Jumlah Genap:" + ${angka}`)

// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// function hanya menerima 1 parameter array


// soal 2
// munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA 
var udin = {
  nama: "udin", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

var ujang = {
  nama: "ujang", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

var dadang = {
  nama: "dadang", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

listOrang = [udin, ujang, dadang]

var tempPrice = 0
var namaOrang
var mobil

for (let i = 0; i < listOrang.length; i++){
  for (let j = 0; j < listOrang[i].kendaraan.length; j++){
    if(listOrang[i].kendaraan[j].price > tempPrice) {
      tempPrice = listOrang[i].kendaraan[j].price
      namaOrang = listOrang[i].nama
      mobil = listOrang[i].kendaraan[j].merk + " " + listOrang[i].kendaraan[j].type
    }
  }
}

console.log(`Soal 2 - Orang dengan mobil paling mahal adalah ${namaOrang} dengan mobil ${mobil}`)





// soal 3
// ambil nilai dari number1 yang tidak ada di number2
const number1 = [1,5,7,8,2,3,6,4,3]
const number2 = [9,2,1,6,4,2,5,7,1] 
const number3 = [] // [8,3,3]



// soal 4
udin = {
  money: 1000000000,
  carPreference: {
    buildBy: 'jpn',
    needed: 2,
    rangePrice: {from: 200000000, to: 450000000},
    type: ['SUV', 'Hatchback']
  },
  carport: [],
}

let showRoom = [
  {buildBy: 'jpn', brand: 'toyota', price: 123000000, model: 'Agya', type: 'City Car'},
  {buildBy: 'jpn', brand: 'toyota', price: 275000000, model: 'honda city', type: 'Hatchback'}, // v
  {buildBy: 'jpn', brand: 'toyota', price: 305000000, model: 'honda city', type: 'sedan'},  
  {buildBy: 'eu', brand: 'chevrolete', price: 350000000, model: 'trax', type: 'SUV'},
  {buildBy: 'jpn', brand: 'toyota', price: 550000000, model: 'fortuner', type: 'SUV'},
  {buildBy: 'jpn', brand: 'honda', price: 375000000, model: 'HRV', type: 'SUV'}, /// v
]

// outputnya
/*
{
  money: 350000000,
  carPreference: {
    type: 'jpn',
    needed: 2,
    rangePrice: {from: 200000000, to: 450000000},
    mandatoryType: ['SUV', 'Hatchback']
  },
  carport: [
    honda city,
    HRV
  ],
}
*/



let table = [
  ["Kode Absen", "Name", "No Hp", "Github"],
  ["RCTN043ONL004", "Andika Wijaya", "82316747626", "https://github.com/andikawij"],
  ["RCTN043ONL005", "Ken Grisya", "081223123428", "https://github.com/kengirisya"],
  ["RCTN043ONL002", "Bagus Panghegar", "082299304615", "https://github.com/baguspanghegar"],
  ["RCTN043ONL001", "M Genta Ari Shandi", "085155476774", "https://github.com/geardy47"],
  ["RCTN043ONL003", "Nadya Sylviani", "'081219101996", "https://gitlab.com/nadyaslvn"],
  ["RCTN043ONL006", "Mars Theolando", "81511239138", "https://github.com/Clareand"],
  ["RCTN043ONL007", "Hapri Mariga", "082113958883", ""],
  ["RCTN043ONL008", "Novia", "08980084400", ""],
]

/*
  Halo nama: Udin, kode absen: a123, no hp: 058123221, github link: www.github.com 
 */


table[2][1]


let nameOrang = table[2][1]
let kodeAbsen = table[2][0]
let noHP = table[2][2]
let gitHub = table[2][3]

let message = `Halo nama: ${nameOrang}, kode absen: ${kodeAbsen}, no hp: ${noHP}, github link: ${gitHub}`

console.log(message)