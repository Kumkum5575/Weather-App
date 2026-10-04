# 🌤️ React Weather App

A responsive and user-friendly **Weather Application built with React.js** that allows users to search for any city and view its current weather information using the **OpenWeather API**.

## ✨ Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* ☁️ Display weather conditions
* 💧 Show humidity information
* 🌬️ Display wind information
* 🌍 Search weather for different cities
* ⚠️ Error handling for invalid city names
* 📱 Responsive and clean user interface
* ⚡ Real-time weather data using OpenWeather API

## 🛠️ Tech Stack

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Material UI (MUI)**
* **OpenWeather API**
* **Vite**
* **Git & GitHub**

## 📸 Screenshots

### 🔍 Weather Search

![Weather Search](./public/screenshots/weather-search.png)

### 🌤️ Weather Information

![Weather Information](./public/screenshots/weather.png)

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Kumkum5575/Weather-App.git
```

### 2. Navigate to the Project

```bash
cd Weather-App
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create a `.env` file in the root directory:

```env
VITE_WEATHER_URL="https://api.openweathermap.org/data/2.5/weather"
VITE_WEATHER_API_KEY="your_openweather_api_key"
```

Replace `your_openweather_api_key` with your own OpenWeather API key.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the application.

## 🔐 Environment Variables

The project uses environment variables for the OpenWeather API configuration.

```env
VITE_WEATHER_URL=
VITE_WEATHER_API_KEY=
```

The actual `.env` file should **not be uploaded to GitHub**.

A `.env.sample` file can be included in the repository with placeholder values.

## 📂 Project Structure

```text
Weather-App/
│
├── public/
│   └── screenshots/
│       ├── weather-search.png
│       └── weather.png
│
├── src/
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   ├── Weather.jsx
│   ├── Weather.css
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .env
├── .env.sample
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 How It Works

1. The user enters a city name in the search box.
2. The application sends a request to the OpenWeather API.
3. The API returns the current weather data.
4. React processes the received data.
5. Weather information is displayed using the `Weather` and `InfoBox` components.
6. If the city is not found, an error message is displayed.

## 🎯 Learning Outcomes

Through this project, I practiced:

* Building reusable React components
* Using the `useState` hook
* Handling form submissions
* Fetching data from an external API
* Working with asynchronous JavaScript
* Using environment variables with Vite
* Conditional rendering
* Using Material UI components
* Handling API errors
* Styling React components with CSS
* Managing projects with Git and GitHub

## 🔮 Future Improvements

* 🌍 Add current location detection
* 📅 Add 5-day weather forecast
* 🌙 Add dark/light mode
* 🌡️ Add Celsius/Fahrenheit toggle
* ⭐ Add favorite cities
* 📊 Add weather charts
* 🎨 Add improved animations and UI

## 👩‍💻 Author

**Kumkum Tyagi**

Computer Science Student | Aspiring Frontend Developer

This project was created as part of my **React.js and Frontend Development learning journey**.

---

⭐ If you found this project useful, consider giving it a star!
