# 🌤️ WeatherApp Extension

A lightweight and responsive browser extension that displays current weather information for your location or any city you choose. Built using HTML, CSS, JavaScript, and the OpenWeatherMap API.

## 🔧 Features

* 📍 Get weather for your current location using geolocation
* 🌆 Search weather by city name
* 🌡️ Displays temperature, weather condition, and icon
* 📱 Clean and responsive popup design
* 🔄 Updates weather data every time you open the extension

## 🚀 Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/weatherappextension.git
   ```
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top right toggle)
4. Click **Load unpacked**
5. Select the cloned extension folder

## 📂 File Structure

```
weatherappextension/
│
├── manifest.json        # Extension config
├── popup.html           # UI layout
├── style.css            # Styling
├── script.js            # Weather logic
└── icons/               # Extension icons (optional)
```

## 📰 Getting City Name from Coordinates

The app uses OpenWeatherMap's reverse geocoding API to get city name:

```js
const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
```

This fetches the city name using the user’s latitude and longitude.

## 🕛 Example Output

```
Latitude: 28.61
Longitude: 77.23
City: Delhi
Temperature: 31°C
Condition: Clear Sky
```

## 📄 License

MIT License. Free to use and modify.

---

🔗 **Made with ❤️ by Atul**
