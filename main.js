$(function () {
  const prop11 = document.getElementById('prop11');
  const prop12 = document.getElementById('prop12');
  const prop13 = document.getElementById('prop13');
  const prop14 = document.getElementById('prop14');
  const prop15 = document.getElementById('prop15');
  const prop16 = document.getElementById('prop16');


  const prop21 = document.getElementById('prop21');
  const prop22 = document.getElementById('prop22');
  const prop23 = document.getElementById('prop23');
  const prop24 = document.getElementById('prop24');
  const prop25 = document.getElementById('prop25');
  const prop26 = document.getElementById('prop26');


  const prop31 = document.getElementById('prop31');
  const prop32 = document.getElementById('prop32');
  const prop33 = document.getElementById('prop33');
  const prop34 = document.getElementById('prop34');
  const prop35 = document.getElementById('prop35');
  const prop36 = document.getElementById('prop36');


  const prop41 = document.getElementById('prop41');
  const prop42 = document.getElementById('prop42');
  const prop43 = document.getElementById('prop43');
  const prop44 = document.getElementById('prop44');
  const prop45 = document.getElementById('prop45');
  const prop46 = document.getElementById('prop46');


  const prop51 = document.getElementById('prop51');
  const prop52 = document.getElementById('prop52');
  const prop53 = document.getElementById('prop53');
  const prop54 = document.getElementById('prop54');
  const prop55 = document.getElementById('prop55');
  const prop56 = document.getElementById('prop56');


  const photo1 = document.getElementById('photo1');
  const photo2 = document.getElementById('photo2');
  const photo3 = document.getElementById('photo3');
  const photo4 = document.getElementById('photo4');
  const photo5 = document.getElementById('photo5');


  $('.rev_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });


  const naruto = {
    name: "Enid",
    "native city": "San Francisco",
    ninjutsu: 10,
    taijutsu: 5,
    genjutsu: 0,
    "total points": 15,
    img: 'img/enid.jpg',
  }


  const gaara = {
    name: "Morticia and Gomez Addams",
    "native city": "New Jersey",
    ninjutsu: 4,
    taijutsu: 2,
    genjutsu: 6,
    "total points": 12,
    img: 'img/MandL.jpg',
  }


  const itachi = {
    name: "Taylor",
    "native city": "Sheffield",
    ninjutsu: 4,
    taijutsu: 10,
    genjutsu: 10,
    "total points": 24,
    img: 'img/Taylor.jpg',
  }


  const kakashu = {
    name: "Wednesday",
    "native city": "Oregon",
    ninjutsu: 0,
    taijutsu: 10,
    genjutsu: 10,
    "total points": 20,
    img: 'img/Wednesday.jpg',
  }


  const saske = {
    name: "Xavier",
    "native city": "Los Angeles",
    ninjutsu: 7,
    taijutsu: 5,
    genjutsu: 3,
    "total points": 15,
    img: 'img/Xavier.jpg',
  }


  function showNaruto() {
    photo1.style.backgroundImage = `url(${naruto.img})`
    prop11.textContent = `Ім'я: ${naruto.name}`;
    prop12.textContent = `Рідне місто: ${naruto["native city"]}`;
    prop13.textContent = `Доброта: ${naruto.ninjutsu}`;
    prop14.textContent = `Сила: ${naruto.taijutsu}`;
    prop15.textContent = `Жорстокість: ${naruto.genjutsu}`;
    prop16.textContent = `Цікавість: ${naruto["total points"]}`;
  }


  function showGaara() {
    photo2.style.backgroundImage = `url(${gaara.img})`
    prop21.textContent = `Ім'я: ${gaara.name}`;
    prop22.textContent = `Рідне місто: ${gaara["native city"]}`;
    prop23.textContent = `Доброта: ${gaara.ninjutsu}`;
    prop24.textContent = `Сила: ${gaara.taijutsu}`;
    prop25.textContent = `Жорстокість: ${gaara.genjutsu}`;
    prop26.textContent = `Цікавість : ${gaara["total points"]}`;
  }


  function showItachi() {
    photo3.style.backgroundImage = `url(${itachi.img})`
    prop31.textContent = `Ім'я: ${itachi.name}`;
    prop32.textContent = `Рідне місто: ${itachi["native city"]}`;
    prop33.textContent = `Доброта: ${itachi.ninjutsu}`;
    prop34.textContent = `Сила: ${itachi.taijutsu}`;
    prop35.textContent = `Жорстокість: ${itachi.genjutsu}`;
    prop36.textContent = `Цікавість: ${itachi["total points"]}`;
  }


  function showKakashu() {
    photo4.style.backgroundImage = `url(${kakashu.img})`
    prop41.textContent = `Ім'я: ${kakashu.name}`;
    prop42.textContent = `Рідне місто: ${kakashu["native city"]}`;
    prop43.textContent = `Доброта: ${kakashu.ninjutsu}`;
    prop44.textContent = `Сила: ${kakashu.taijutsu}`;
    prop45.textContent = `Жорстокість: ${kakashu.genjutsu}`;
    prop46.textContent = `Цікавість: ${kakashu["total points"]}`;
  }


  function showSaske() {
    photo5.style.backgroundImage = `url(${saske.img})`
    prop51.textContent = `Ім'я: ${saske.name}`;
    prop52.textContent = `Рідне місто: ${saske["native city"]}`;
    prop53.textContent = `Доброта: ${saske.ninjutsu}`;
    prop54.textContent = `Сила: ${saske.taijutsu}`;
    prop55.textContent = `Жорстокість: ${saske.genjutsu}`;
    prop56.textContent = `Цікавість: ${saske["total points"]}`
  }


  showNaruto();
  showGaara();
  showItachi();
  showKakashu();
  showSaske();
});






