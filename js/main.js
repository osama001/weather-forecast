

// let api =` https://api.weatherapi.com/v1/forecast.json?key=cef5e7e3db69496899700907230508&q=${city}&days=7`


// first card declerations
let last= document.getElementById('last')
let day1= document.getElementById('day1')
let date1= document.getElementById('date1')
let citylab= document.getElementById('citylab')
let day1img= document.getElementById('day1img')
let firstDesc= document.getElementById('firstDesc')
let Ftemp= document.getElementById('Ftemp')

//second card decleratins
let day2= document.getElementById('day2')
let day2img= document.getElementById('day2img')
let day2temp= document.getElementById('day2temp')
let day2temps= document.getElementById('day2temps')
let day2desc= document.getElementById('day2desc')





let day3= document.getElementById('day3')
let day3img= document.getElementById('day3img')
let day3temp= document.getElementById('day3temp')
let day3temps= document.getElementById('day3temps')
let day3desc= document.getElementById('day3desc')



let searchinp= document.getElementById('searchinp')


let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
async function getWeather(city){
    let dataReq = await fetch(` http://api.weatherapi.com/v1/forecast.json?key=cef5e7e3db69496899700907230508&q=${city}&days=7`)
    let dataRes = await dataReq.json()
     currentDay= new Date(dataRes.current.last_updated)
     currentINdex = currentDay.getDay()
     currentDayName=days[currentINdex]
     day1.innerHTML=currentDayName
     date1.innerHTML=currentDay.toString().slice(3,10)
     if(currentINdex => 6 ){
        currentINdex = 0

        tomorrow= days[currentINdex]
        day2.innerHTML=tomorrow
        after2days= days[currentINdex+1]
        day3.innerHTML=after2days
     }else{
        tomorrow= days[currentINdex+1]
        day2.innerHTML=tomorrow
        after2days= days[currentINdex+2]
        day3.innerHTML=after2days
     }
    Firstsrc = dataRes.current.condition.icon
     FirstText= dataRes.current.condition.text
     Ftemp.innerHTML=  dataRes.current.temp_c
     citylab.innerHTML=dataRes.location.name
     firstDesc.innerHTML=FirstText
    
     
     day1img.setAttribute('src',Firstsrc)

     // day2 settings 
     
     day2img.src = dataRes.forecast.forecastday[1].day.condition.icon
     day2desc.innerHTML = dataRes.forecast.forecastday[1].day.condition.text
     day2temp.innerHTML=dataRes.forecast.forecastday[1].day.maxtemp_c
     day2temps.innerHTML=dataRes.forecast.forecastday[1].day.mintemp_c

        //day3 settings
     thirdsrc = dataRes.forecast.forecastday[2].day.condition.icon
     
     day3img.setAttribute('src',thirdsrc)
     day3desc.innerHTML = dataRes.forecast.forecastday[2].day.condition.text
     day3temp.innerHTML=dataRes.forecast.forecastday[2].day.maxtemp_c
     day3temps.innerHTML=dataRes.forecast.forecastday[2].day.mintemp_c
     console.log(day1img,day2img,day3img)

}



getWeather('egypt')
  function print(a){
    console.log(a)
  }
searchinp.addEventListener('input',function(e){
    getWeather(e.target.value)
})

