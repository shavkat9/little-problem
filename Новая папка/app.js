alert ("Working")
const firstName = [
     "Shavkat", " XOlboy", "Salim", "Shagzod",
      "Muhammadjon", "Ehromjon", " Toxirbek", "Lochinbek", 
      "Samandar", "Ashiqu", "Devona", "Nizamiddin", "Ali"
];
const lastName = [
     "Alamov", "Berdibekov", "Kuziboyev", "Samanaov", 
     "Xolov", "Ashov", "Kenjayev", "Memenov",
      " Toxirov", "Sodiqov", "Qalanov"
];

function getName() {
     var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)]
     return randomName;
}
function nameQty(){
     var userQty = document.querySelector('.qty').value;
     document.querySelector('.nameList').innerHTML = ''
     if(userQty > 20) {
          document.querySelector('.nameList').innerHTML = 'Only 10 nMES CAN BE GENERate'
     }
     else {
          for(var i = 0; i < userQty; i++){
               document.querySelector('.nameList').innerHTML +=getName() + '<br>';
          }
     }
}