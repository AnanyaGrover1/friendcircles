import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import CircleOfCircles from './CircleOfCircles.jsx';
import Background from './Background.jsx';
import DailyPrompt from './DailyPrompt'; // Import the DailyPrompt component
import GratitudeTextBox from './GratitudeTextBox';

ReactDOM.render(<App />, document.getElementById('root'));

export default function App() {

// Assume we have an array of people's names

const collegeNames = ['2Pi', 'Yaashree', 'Elise', 'Kanak', 'Rohit'];

const famNames = ['Mumma', 'Bhaiyya', 'Papa', 'Advika', 'Adheyan'];

const hsNames = ['Anushka', 'Ananya', 'Caitanya', 'Yashi', 'Arefa'];

return (

<main> <h1 className="title">friend circles :)</h1> <Background /> <DailyPrompt /> <GratitudeTextBox /> <h3 className="instruction">click on the circle if you were in touch</h3>
<CircleOfCircles names={collegeNames} containerClass="left-circle-group" color="grey" centerText="college"/>;

<CircleOfCircles names={famNames} containerClass="center-circle-group" color="grey" centerText="family"/> <CircleOfCircles names={hsNames} containerClass="right-circle-group" color="grey" centerText="hs"/> </main>
)

}