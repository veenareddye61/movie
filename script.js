var maindiv1=document.getElementById("maindiv");
var subdiv1=document.getElementById("subdiv1");
var subdiv2=document.getElementById("subdiv2");
function getMovies(id,name,image) {
/*var movdiv
movdiv=`<div class="movcard" id="1"><div class="imgclass">
<img src="${image}" class="image1class"></div>
<div class="nameclass"><h1 class="tdivclass">'${name}'</h1>
<button class="btnclass" id="${id}" onclick="addFavorite(${id+','+name+','+image})">Add to Favorites</button>
</div></div>`*/
/*var movdiv=document.createElement("div");
movdiv.className="movcard";
movdiv.id=id;
var imgdiv=document.createElement("div");
imgdiv.className="imgclass";
var image1=document.createElement("img");
image1.src=image;
image1.className="image1class";
imgdiv.append(image1);
var namediv=document.createElement("div");
namediv.className="nameclass";
var textdiv=document.createElement("h1");
textdiv.innerText=name;
textdiv.className="tdivclass";
/*var btndiv=document.createElement("div");
btndiv.innerHTML="<button class='btnclass' onclick='addFavourite(${id},'+name+','+image+')'>Add to Favorites</button>"*/
/*var addbtn=document.createElement("button");
addbtn.innerText="Add to Favorites"
addbtn.className="btnclass";
addbtn.id=id;
addbtn.addEventListener("click",addFavourite(id));
namediv.append(textdiv,addbtn);
movdiv.append(imgdiv,namediv);
subdiv1.append(movdiv)*/
$("#subdiv1").append(`<div class="movcard" id="${id}"><div class="imgclass">
<img src="${image}" class="image1class"></div>
<div class="nameclass"><h5 class="tdivclass">${name}</h5>
<button class="btnclass" id="${id}" onClick="addFavourite('${id}','${name}','${image}')">Add to Favorites</button>
</div></div>`);

}

function getFavourites(id,name,image) {
   /* var favmovdiv=document.createElement("div");
    favmovdiv.className="movcard";
    favmovdiv.id=id;
    var fimgdiv=document.createElement("div");
    fimgdiv.className="imgclass";
    var fimage1=document.createElement("img");
    fimage1.src=image;
    fimage1.className="image1class";
    fimgdiv.append(fimage1);
    var fnamediv=document.createElement("div");
    fnamediv.className="nameclass";
    var ftextdiv=document.createElement("h1");
    ftextdiv.innerText=name;
    ftextdiv.className="tdivclass";
    fnamediv.append(ftextdiv);
    favmovdiv.append(fimgdiv,fnamediv);
    subdiv2.append(favmovdiv);*/
    $("#subdiv2").append(`<div class="movcard" id="${id}"><div class="imgclass">
    <img src="${image}" class="image1class"></div>
    <div class="nameclass"><h5 class="tdivclass">${name}</h5>
    </div></div>`)
}

function addFavourite(id,name,image) {
    console.log(id);
var obj = {
    id:id,
    name :name,
    image : image 
}
console.log(id);
$.ajax({
    type:"POST",
    url:"http://localhost:3000/favourite",
    data: JSON.stringify(obj),
    contentType: "application/json;charset=UTF-8",
    success: function(response){
        console.log(response);
    },
    error:function(err){
        console.log(err);
    }
})
}
$.get("http://localhost:3000/movies",(res)=>{

console.log(res);
for (var i=0;i<res.length;i++){
   
    getMovies(res[i].id,res[i].name,res[i].img);
}
})
$.get("http://localhost:3000/favourite",(res)=>{
    console.log(res);
    
    for(var j=0;j<res.length;j++){
        getFavourites(res[j].id,res[j].name,res[j].image);
    }
       /*getFavourites(res.id,name,image)*/;
    

    
})

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution

