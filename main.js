function currentLocaleTime() {
    const currentTime = new Date().toLocaleTimeString()
    document.querySelector('.currentTime').innerHTML = currentTime
}
setInterval(currentLocaleTime, 1000)
currentLocaleTime()

const inputValue = document.getElementById('cityName')
const buttonSearch = document.getElementById('btnSearch')
const link = 'http://api.weatherstack.com/current?access_key=eecf76a7dc2bf883d6271c1d1b7e304c'
const title = document.querySelector('.title')


const currentCityWeather = async () => {

        const response = await fetch(`${link}&query=${inputValue.value}&units=m`)
        const data = await response.json()

        document.querySelector('.cityName').innerHTML = data.location.name + ', ' + data.location.country
        document.querySelector('.icon').innerHTML = `<img src="${data.current.weather_icons[0]}" style="border-radius:10px; margin:10px">`
        document.querySelector('.temp').innerHTML = `<img src="thermometer.png" alt="thermometer" height="75px" width="30px" style="margin-right:15px;">` + '  ' + Math.round(data.current.temperature) + '&deg' + 'C'
        document.querySelector('.weather').innerHTML = data.current.weather_descriptions[0]
        document.getElementById('barometer').innerHTML = `<img src="barometer.png" alt="barometer" height="30px" width="30px"></img>`  + ' ' + data.current.pressure + ' hPa'
        document.getElementById('wind').innerHTML = `<img src="wind.png" alt="wind" height="30px" width="30px">` + ' ' + data.current.wind_speed + ' km/h'

        title.remove()
        document.querySelector('#background').classList.add('active')
    }

currentCityWeather()

buttonSearch.addEventListener('click', currentCityWeather)
inputValue.addEventListener('keydown', (event) => {
    if (event.key == "Enter"){
        currentCityWeather()
    }
  })