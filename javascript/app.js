 alert("Hello")

 var userName=prompt("what is your name ?");
 alert('Hello'+' '+userName);

 var age=prompt("how old are you ?");
 if (age<=50){
   alert("you are welcome to this website!")
 }
 else{
   alert("you can't come because you are too old!")
 }

 document.write('<h3>'+'hello'+' '+ userName+'</h3>'+" "+ age)


console.log("hello");
 var favSocMedia=prompt("what is your favourite social media ?");
 if(favSocMedia=="facebook"){
   document.write('<img src="https://www.facebook.com/images/fb_icon_325x325.png" "width=50px"> ')
 }
  else if(favSocMedia=="youtube"){
  document.write('<img src="https://yt3.ggpht.com/ytc/AAUvwnjDwLJeWs_jcgoVvQpC7YZxWMwP-N__UH-98dxGyw=s900-c-k-c0x00ffffff-no-rj" "width=100px>"')
 }else if(favSocMedia=="instagtam"){
   document.write('<img src="https://nveloop.com/wp-content/uploads/2021/02/instagram.jpg" "width=100px">' )


 }
 else{
   alert("please add your favourite social merdia")


 }


