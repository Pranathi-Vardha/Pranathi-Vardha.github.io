var userInfo = {name : "", image : "", username : ""};
var chnagemypic = function(){

    fetch("https://randomuser.me/api").then((response)=>response.json()).then(data)=>{
    userinfo.name = data.results[0].name.first;
    userinfo.image = data.results[0].picture.large;
    userinfo.username =data.results[0].login.username;
    document.getElementByid("myimage").src =userinfo.image;
    document.getElementByid("myname").innerHTML = userinfo.name;
    document.getElementByid("mydesig").innerHTML = userinfo.username;
    });
}
