// import './App.css'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import CircleOfCircles from './CircleOfCircles.jsx';
// import Background from './Background.jsx';
// import DailyPrompt from './DailyPrompt'; // Import the DailyPrompt component
// import GratitudeTextBox from './GratitudeTextBox';

// ReactDOM.render(<App />, document.getElementById('root'));

// export default function App() {

// // Assume we have an array of people's names

// const collegeNames = ['2Pi', 'Yaashree', 'Elise', 'Kanak', 'Rohit'];

// const famNames = ['Mumma', 'Bhaiyya', 'Papa', 'Advika', 'Adheyan'];

// const hsNames = ['Anushka', 'Ananya', 'Caitanya', 'Yashi', 'Arefa'];

// return (

// <main> <h1 className="title">friend circles :)</h1> <Background /> <DailyPrompt /> <GratitudeTextBox /> <h3 className="instruction">click on the circle if you were in touch</h3>
// <CircleOfCircles names={collegeNames} containerClass="left-circle-group" color="grey" centerText="college"/>;

// <CircleOfCircles names={famNames} containerClass="center-circle-group" color="grey" centerText="family"/> <CircleOfCircles names={hsNames} containerClass="right-circle-group" color="grey" centerText="hs"/> </main>
// )

// }


// App.jsx

// App.jsx

import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CircleOfCircles from './CircleOfCircles';
import Background from './Background';
import DailyPrompt from './DailyPrompt';
import GratitudeTextBox from './GratitudeTextBox';
import Onboarding from './Onboarding.jsx'; // Import the Onboarding component
import LoginButton from './LoginButton'; // Import the LoginButton component
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0(); // Use useAuth0 hook for authentication state
  const [circleData, setCircleData] = useState(null);

  const handleOnboardingSubmit = (data) => {
    setCircleData(data);
  };

  useEffect(() => {
    if (circleData) {
      window.scrollTo(0, 0);
    }
  }, [circleData]);

  // If loading, show loading message or spinner
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1 className="title">friend circles :)</h1>
      <Background />

      {/* Conditionally render components based on authentication and circleData */}
      {isAuthenticated && (
        <>
          <DailyPrompt />
          <GratitudeTextBox />
          <h3 className="instruction">click on the circle if you were in touch</h3>
        </>
      )}

      {/* Conditional rendering based on authentication status */}
      {!isAuthenticated ? (
        <LoginButton /> // Render LoginButton if not authenticated
      ) : !circleData ? (
        <Onboarding onSubmit={handleOnboardingSubmit} /> // Render Onboarding component after login if circleData is not set
      ) : (
        <>
          <CircleOfCircles names={circleData.circle1.names} containerClass="left-circle-group" color="grey" centerText={circleData.circle1.title} />
          <CircleOfCircles names={circleData.circle2.names} containerClass="center-circle-group" color="grey" centerText={circleData.circle2.title} />
          <CircleOfCircles names={circleData.circle3.names} containerClass="right-circle-group" color="grey" centerText={circleData.circle3.title} />
        </>
      )}
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

