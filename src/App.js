import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className='App'>
      <div class='container'>
        <Weather defaultCity='Lisbon' />
        <footer>
          <a
            href='https://github.com/greyliath/weather-app-react'
            target='_blank'
            rel='noreferrer'
          >
            open-sourced code by greyliath
          </a>
        </footer>
      </div>
    </div>
  );
}
