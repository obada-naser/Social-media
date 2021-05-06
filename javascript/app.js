alert("Hello")

var userName = prompt("what is your name ?");
alert('Hello' + ' ' + userName);
alert("This website is for ages between 18 and 50  ")

var age = prompt("how old are you ?");


while (age <= 18 || age >= 50) {
  if (age <= 18) {
    age = prompt("you can't come because you are too young! ");
  }

  else if (age >= 50) {
    age = prompt("you are too old for this website!");
  }

  else {
    break;
  }

}

if (age <= 50) {
  alert("you are welcome to this website!")
}


document.write('<h3>' + 'hello' + ' ' + userName + ' you are  ' + age + '</h3>')


console.log("hello");



var favSocMedia = prompt("what is your favourite social media ?");



var times = prompt('how many times do you use ' + favSocMedia + '?');
document.write('<h3>' + 'This is how many times you use ' + favSocMedia + ' ' + ':' + ' ' + times + '</h3>');


for (var i = 0; i < times; i++) {
  console.log(times);

  if (favSocMedia == "facebook") {

    document.write('<img id="facebook" src="https://www.facebook.com/images/fb_icon_325x325.png" width=15%" > ')

  }
  else if (favSocMedia == "youtube") {

    document.write('<img id="youtube "src="https://yt3.ggpht.com/ytc/AAUvwnjDwLJeWs_jcgoVvQpC7YZxWMwP-N__UH-98dxGyw=s900-c-k-c0x00ffffff-no-rj" width=15%"     > ');

  }
  else if (favSocMedia == "instagram") {

    document.write('<img src="https://nveloop.com/wp-content/uploads/2021/02/instagram.jpg" width=15%"  >')

  }

  else {
    alert("please add your favourite social media")
    break;


  }


}




