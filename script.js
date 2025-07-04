const b=document.getElementById("check");
let {latitude,longitude}={ latitude: 0, longitude: 0 };
let l=1;
async function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
async function fetchLocation() {
  try {
    const position = await getUserLocation();
    ({ latitude, longitude } = position.coords);
    
    weather();
  } catch (error) {
    alert("Failed to get location:", error.message);
  }
}

async function weather()
{let url;

     if(l==0)
        { 
             l=1;
              url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=06aa3afd13ca973f4ff7119506ca20aa`;
        }
        else{
    const city=document.getElementById("city").value;
    if(city.trim()=="")
    {
        alert("please enter a city");
    }
    else
    {
       
      
      url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06aa3afd13ca973f4ff7119506ca20aa`;
    
    }
}try {
         let response=await fetch(url);
         if(!response.ok)
         {
             throw new Error(`Http new error : ${response.status}`);
                
         }

         const data= await response.json();
         const showdataoutp=`
           City 🏭: ${data.name} <br>
           Temperature 🌡️ :${data.main.temp}<br>
           Weather ☁️: ${data.weather[0].description}
         `;
        document.getElementById("show").innerHTML=showdataoutp;
            
     } catch (error) {

         alert(error.message);
     }
}
   // document.getElementById("show").style.background="red";
   b.addEventListener("click",weather);
   document.getElementById("location").addEventListener("click",async()=>{
    l=0;await fetchLocation()});