document.getElementById("username").value ="YOUR-ID";
document.getElementById("password").value = "YOUR-PASSWORD";
var captcha = document.getElementById("login").textContent.split(" ");
console.log(typeof(captcha))
for(var i = 260; i < 280; i++){
    console.log(captcha[i])
}
if(captcha[263] == "add"){
    var a, b;
    a = parseInt(captcha[266])
    b = parseInt(captcha[268])
    document.getElementById("valuepkg3").value = (a+b).toString()
    // alert(a+b)
    
}
if(captcha[263] == "subtract"){
    var a, b;
    a = parseInt(captcha[266])
    b = parseInt(captcha[268])
    document.getElementById("valuepkg3").value = (a-b).toString()
    // alert(a-b)
}
if(captcha[264] == "first"){
    var a, b;
    a = parseInt(captcha[268])
    b = parseInt(captcha[270])
    document.getElementById("valuepkg3").value = (a).toString()
    // alert(a-b)
}
if(captcha[264] == "second"){
    var a, b;
    a = parseInt(captcha[268])
    b = parseInt(captcha[270])
    document.getElementById("valuepkg3").value = (b).toString()
    // alert(a-b)
}
document.getElementById("loginbtn").click()