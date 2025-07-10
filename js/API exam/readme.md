# 🌦️ Simple Weather App

This is a **Weather App** built using **HTML**, **JavaScript**, and the [OpenWeatherMap API](https://openweathermap.org/api) 🌍. You can enter any city and get real-time weather information including temperature, humidity, wind speed, and more! 🌤️

---

## 🚀 Features

- 🌎 Search for weather by **city name**
- 🌡️ View **temperature**, **feels like**, **humidity**, and **wind speed**
- 🕒 Real-time **date and time**
- 🌤️ Includes a relevant **weather icon**
- ⚠️ Displays error message if city is not found

---

## 🧰 Technologies Used

- **HTML** 🧱
- **Vanilla JavaScript** 🧠
- **OpenWeatherMap API** 🌐
- **CSS (optional)** 🎨

---

## 🔧 Setup Instructions



You can also host it using services like GitHub Pages or Netlify for free!

🔑 API Key
This app uses the OpenWeatherMap API. You need an API key to use it.

Sign up at openweathermap.org

Replace the API key in the script:

js
Copy
Edit
const apiKey = "YOUR_API_KEY_HERE";
# 📸 video







https://github.com/user-attachments/assets/3eb5a91a-265d-4d4f-aca2-cb51fcd13c8e









<sub>Replace this with your own screenshot of the app</sub>

🐞 Error Handling
The app will show an error message if:

The city is not found ❌

There’s a network issue 🌐

Make sure to uncomment the .catch() block in your JavaScript for better error feedback:

js
Copy
Edit
.catch(error => {
    const weatherOutput = document.getElementById("weatherOutput");
    weatherOutput.innerHTML = `<p class="error">Error: ${error.message}</p>`;
});
🛠️ Future Improvements
Add recent search history 🕘

Add a loading spinner 🔄

Allow location-based weather using geolocation 🌍

👨‍💻 Author
Created by Your Name 💻

📜 License
This project is licensed under the MIT License.

Happy Coding! ☀️🌧️🌪️
