# 🌤️ KSA Weather Web App

A responsive and bilingual weather application that provides real-time weather updates for Dammam, Saudi Arabia. This project demonstrates API integration, state management, and internationalization in a modern React application.

**Live Demo:** [https://ksa-weather.netlify.app/](https://ksa-weather.netlify.app/)

---

## 📖 Description

The KSA Weather Web App fetches real-time meteorological data using the OpenWeather API. It displays the current temperature, maximum/minimum temperatures, and weather conditions. The app is designed with a sleek, translucent UI using Material UI (MUI) components and supports seamless switching between Arabic and English, automatically adjusting the layout direction (RTL/LTR) accordingly.

---

## ✨ Features

* **Real-Time Weather Data:** Fetches current conditions, temperatures, and dynamic weather icons directly from OpenWeather.
* **Bilingual Support (i18n):** Full support for English and Arabic using `react-i18next`, including dynamic date formatting using `moment.js`.
* **Dynamic Layout:** Automatically switches between Right-to-Left (RTL) for Arabic and Left-to-Right (LTR) for English.
* **Modern UI:** Built with Material UI (MUI) for responsive typography, icons, and layout components.
* **API Management:** Implements Axios with cancellation tokens to handle API requests efficiently and prevent memory leaks.

---

## 🛠️ Tech Stack

This project is built using modern front-end technologies:

* **Framework:** React 19 (via Vite)
* **Styling & Components:** Material UI (MUI) v9 & custom CSS
* **API Requests:** Axios
* **Date Formatting:** Moment.js
* **Internationalization:** i18next & react-i18next
* **Deployment:** Netlify

---

## 🚀 Getting Started

If you want to run this project locally, follow these steps.

### Prerequisites

* Node.js installed on your machine.
* An API key from [OpenWeatherMap](https://openweathermap.org/api).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Abdulmalik90/Weather-Web.git](https://github.com/Abdulmalik90/Weather-Web.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Weather-Web
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up your Environment Variables:**
    * Create a `.env` file in the root of your project.
    * Add your OpenWeather API key:
        ```env
        VITE_WEATHER_API_KEY=your_api_key_here
        ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```

6.  Open your browser and navigate to `http://localhost:5173`.

---

## 📁 Project Structure (Recommended)

To keep the repository organized as it grows, the following component-based structure is used/recommended:

```text
📦 Weather-Web
 ┣ 📂 public
 ┃ ┗ 📂 locales          # Translation JSON files (ar, en)
 ┣ 📂 src
 ┃ ┣ 📂 components       # React components (e.g., Card.jsx)
 ┃ ┣ 📂 styles           # CSS files (e.g., card.css)
 ┃ ┣ 📜 App.jsx          # Main application file
 ┃ ┗ 📜 main.jsx         # React entry point
 ┣ 📜 .env               # Environment variables (API Key)
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┗ 📜 README.md
