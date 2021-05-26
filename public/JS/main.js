const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');

const getInfo=async(event)=>{
    event.preventDefault();
   
} 
const cityVal=cityName.value;
if(cityVal==="")
{
    city_name.innerText="Please Write the city Name before you search";

}else{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=pune&unit=metric&appid=c249dbc87692b88cd1232568110abf86`;
    const response=await fetch(url);
}
submitBtn.addEventListener('click',getInfo);