let d = new Date()
console.log(d)
let day = d.getDay()

const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",'Sunday',"Monday"]
console.log(dayArr[day])




function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = `Current Time: ${date.toLocaleTimeString("south-africa", {timeStyle: "short"})}`
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            console.log(data.daily)
            console.log(data.current.weather[0].icon)

            document.getElementById("day").innerHTML = `
            <h3 class="day">${dayArr[day]}</h3>
            `

            let weatherIconMain = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`
           document.getElementById("main").innerHTML = `
             <h4>Minimum temp🔥: ${data.daily[0].temp.min}</h4>
             <h4>Maximum temp❄️: ${data.daily[0].temp.max}</h4>  
             `

             
             document.getElementById("details").innerHTML = `
            <h4>Humidity💧: ${data.daily[0].humidity}</h4> 
            <h4>Wind Speed💨: ${data.daily[0].wind_speed}</h4>
             `

             let weatherMainImage= `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`
             document.getElementById("mainImage").innerHTML = `
              <img src="${weatherMainImage}">`


           let weatherIcon = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`
           document.getElementById("today").innerHTML = `
            <img src="${weatherIcon}">
            <h3>${dayArr[day]}</h3> 
             <h4>Minimum temp: ${data.daily[0].temp.min}</h4>
             <h4>Maximum temp: ${data.daily[0].temp.max}</h4>  
             `

           let weatherIcon2 = `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`
           document.getElementById("weather2").innerHTML = `
           <img src="${weatherIcon2}">
            <h3>${dayArr[day + 1]}</h3>
            <h4>Minimum temp: ${data.daily[1].temp.min}</h4>
            <h4>Maximum temp: ${data.daily[1].temp.max}</h4>
            `

           let weatherIcon3 = `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`
           document.getElementById("weather3").innerHTML = `
            <img src="${weatherIcon3}">
            <h3>${dayArr[day + 2]}</h3>
            <h4>Minimum temp: ${data.daily[2].temp.min}</h4>
            <h4>Maximum temp: ${data.daily[2].temp.max}</h4>
            `

           let weatherIcon4 = `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`
           document.getElementById("weather4").innerHTML = `
            <img src="${weatherIcon4}">
            <h3>${dayArr[day + 3]}</h3>
            <h4>Minimum temp: ${data.daily[3].temp.min}</h4>
            <h4>Maximum temp: ${data.daily[3].temp.max}</h4>
            `
        })
        .catch(err => console.error(err))

      
});




// show users current Location


navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))
});



