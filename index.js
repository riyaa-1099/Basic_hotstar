
let carousel_div=document.getElementById("carousel")
function carousel(){
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/370/1350370-h-0a160a9cdc75
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1298/1351298-h-66706310312e
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/SHOW/6363/6363/6363-h
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8315/1328315-h-017b4fc66d35
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h
// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/467/1380467-h-b73c1489f6d3

let images=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/370/1350370-h-0a160a9cdc75","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7382/1357382-h-e8e07b3880aa","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/467/1380467-h-b73c1489f6d3"]

let imgElement = document.createElement("img");
imgElement.src=images[0];
carousel_div.append(imgElement)

let i=1;

setInterval(function(){

if(i==images.length){
    i=0;
}

imgElement.src=images[i];
carousel_div.append(imgElement)

    i++;
},3000)

}
carousel()

const movies=[
{
    name: 'Masaan',
    release: "12 October",
    rating:4 ,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe"
},
{
    name: 'Dr.Strange',
    release: "12 October",
    rating:6 ,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676"
},
{
    name:'Avengers' ,
    rating:7 ,
    release: "12 October",
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/370/1350370-h-0a160a9cdc75" 
},
{
    name: 'Goodluck Jerry',
    release: "12 October",
    rating:9 ,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1298/1351298-h-66706310312e" 
},
{
    name:'KGF2' ,
    rating:7 ,
    release: "12 October",
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/SHOW/6363/6363/6363-h" 
},
{
    name: 'KGF',
    release: "12 October",
    rating:8 ,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8315/1328315-h-017b4fc66d35" 
},
{
    name: 'MSD',
    release: "12 October",
    rating:2 ,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h" 
},
{
    name:"RRR" ,
    release: "12 October",
    rating:9 ,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/467/1380467-h-b73c1489f6d3" 
},
{
    name: 'Dr.Strange',
    release: "12 October",
    rating:6 ,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676"
},
];

function appendMovies(data){


let loader_div=document.getElementById('loader_div')
 loader_div.style.display='none';
 
let data_div=document.getElementById('movies');
data_div.innerHTML=null;

data.forEach(function(el){
let div=document.createElement('div');

let p_name=document.createElement('p');
p_name.innerHTML=`Name: ${el.name}`;

let p_release=document.createElement('p');
p_release.innerHTML=`Release-Date: ${el.release}`;

let p_rating=document.createElement('p');
p_rating.innerHTML=`Rating: ${el.rating}`;

let img=document.createElement('img');
img.id="poster";
img.src=el.img;

div.append(img, p_name,p_release, p_rating);
data_div.append(div);

});
    
}

// appendMovies(movies);

function sortlh(){
    let data = movies;
data=data.sort((a,b)=>a.rating-b.rating);
appendMovies(data);
}
function sorthl(){
    let data = movies;
data=data.sort((a,b)=>b.rating-a.rating);
appendMovies(data);
}

let getmeData=new Promise(function(resolve,reject){
    setTimeout(function(){
        let data=movies;
        if(data !=null){
    resolve(data)
  
        }
    else{
    reject("ERR: Server could not get movies data");
    }
    },3000);
    });
    
    getmeData
    .then(function(success){
    appendMovies(success);
    
    })
    
    .catch(function(error){
    
    console.log('error',error);
    
    });


