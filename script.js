let condition=document.getElementById('resCondition');
let temprature=document.getElementById('resTemprature');
let humidity=document.getElementById('resHumidity');
let wind=document.getElementById('resWindKM/hr');
let city=document.getElementById('ResCityName');
let region=document.getElementById('resReagion');
let country=document.getElementById('resCountry');
let localTime=document.getElementById('resLocalTime');


let searchBtton=document.getElementById('searchbtn');



searchBtton.addEventListener('click',()=>{
    let input=document.getElementById('inp').value;
    let data=fetch(`https://api.weatherapi.com/v1/current.json?key=76495484c51f43fda1c54628251309&q=${input}&aqi=no`)
    .then((response)=>response.json())
    .then((data)=>{
          
          condition.innerHTML=data.current.condition.text;
          temprature.innerHTML=data.current.temp_c+' °C';
          humidity.innerHTML=data.current.humidity;
          wind.innerHTML=data.current.wind_kph +' Km/Hr';
          city.innerHTML=data.location.name;
          region.innerHTML=data.location.region;
          country.innerHTML=data.location.country;
          localTime.innerHTML=data.location.localtime;
          document.getElementById('inp').value=''
        





    })
    .catch((err)=>{alert("Enter Valid Location")
        input.value=''
    })
})


