const temperaturefeild=document.querySelector(".weather1");

const cityfeild=document.querySelector(".weather2 p");
const datefeild=document.querySelector(".weather2 span");
const emojifeild=document.querySelector(".weather3 img");
const weatherfeild=document.querySelector(".weather3 span");
const searchfeild=document.querySelector("#search");
const formfeild=document.querySelector(".Given");


let target="New Delhi"

const fetchdata=async(target)=>{


try {
    
    const url =`https://api.weatherapi.com/v1/current.json?key=d5823a5729744e3d8d7141555231906&q=${target}`

    const response= await fetch(url);
    const data = await response.json();
   
    const {
        current:{temp_c,condition:{
            text,icon
        }},
        location:{name,localtime}
    }=data;
    updateDom(temp_c,name,localtime,icon,text);
} catch (error) {
    alert("Enter valid location");
}

};

function updateDom(temperature,city,time,emoji,text){

    temperaturefeild.innerText=temperature;
    cityfeild.innerText=city;
    const exactTime=time.split(" ")[1];
    const exactdate=time.split(" ")[0];
   const exactDay=new Date(exactdate).getDay();
   
datefeild.innerText=`${exactTime} - ${getDayFUllName(exactDay)} - ${exactdate}` 

    emojifeild.src=emoji;
    weatherfeild.innerText=text;



}

fetchdata(target);

function getDayFUllName(num){
    switch (num) {
        case 0:
            
            return "Sunday";
        case 1:
            
            return "Monday";
        case 2:
            
            return "Tuesday";
        case 3:
            
            return "Wednesday";
        case 4:
            
            return "Thursday";
        case 5:
            
            return "Friday";
        case 6:
            
            return "Saturday";
    
        default:
            return "Dont Know"
    }

}
const search=(e)=>{
    e.preventDefault();
    target=searchfeild.value;
    // console.log(target);
    fetchdata(target);
}
formfeild.addEventListener("submit",search)