// Onboarding.jsx

// Onboarding.jsx

import './Onboarding.css';
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook

export default function Onboarding({ onSubmit }) {
  const { isAuthenticated, isLoading } = useAuth0(); // Use useAuth0 hook for authentication state
  const [circleData, setCircleData] = useState({
    circle1: { title: 'College', names: ['', '', '', '', ''] },
    circle2: { title: 'Family', names: ['', '', '', '', ''] },
    circle3: { title: 'High School', names: ['', '', '', '', ''] },
  });

  const handleChange = (e, circleType, index) => {
    const { name, value } = e.target;
    setCircleData(prevData => {
      const updatedData = { ...prevData };
      if (name === 'title') {
        updatedData[circleType].title = value;
      } else {
        updatedData[circleType].names[index] = value;
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(circleData);
  };

  // If loading, show loading message or spinner
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <div>Please log in to continue</div>;
  }

  return (
    <div className="onboarding-container">
      <form onSubmit={handleSubmit} className="onboarding-form">
        <h1 className="form-title">Welcome to Friend Circles</h1>
        <p className="form-description">Please enter the titles and names of your friends in each circle. You can add up to five names per circle.</p>
        {Object.keys(circleData).map(circleType => (
          <div key={circleType} className="circle-group">
            <label>
               Title:
              <input
                type="text"
                name="title"
                value={circleData[circleType].title}
                onChange={(e) => handleChange(e, circleType)}
              />
            </label>
            {circleData[circleType].names.map((name, index) => (
              <label key={index}>
                Friend Name:
                <input
                  type="text"
                  name={`name-${index}`}
                  value={name}
                  onChange={(e) => handleChange(e, circleType, index)}
                />
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}



// Onboarding.jsx

// Onboarding.jsx

// import './Onboarding.css';
// import React, { useState } from 'react';
// import SignUp from './SignUp'; // Adjust the path as per your file structure

// export default function Onboarding({ onSubmit }) {
//   const [circleData, setCircleData] = useState({
//     circle1: { title: 'College', names: ['', '', '', '', ''] },
//     circle2: { title: 'Family', names: ['', '', '', '', ''] },
//     circle3: { title: 'High School', names: ['', '', '', '', ''] },
//   });

//   const handleCircleChange = (e, circleType, index) => {
//     const { name, value } = e.target;
//     setCircleData(prevData => {
//       const updatedData = { ...prevData };
//       if (name === 'title') {
//         updatedData[circleType].title = value;
//       } else {
//         updatedData[circleType].names[index] = value;
//       }
//       return updatedData;
//     });
//   };

//   const handleCircleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(circleData);
//   };

//   const handleSignUpSuccess = () => {
//     // Redirect to main application or next step
//     console.log('Sign up successful! Redirecting...');
//     // Example: history.push('/main-app'); // If using React Router
//   };

//   return (
//     <div className="onboarding-container">
//       <h1>Welcome to Friend Circles</h1>
//       <SignUp onSuccess={handleSignUpSuccess} />

//       <form onSubmit={handleCircleSubmit} className="circle-data-form">
//         <h2>Circle Data Input</h2>
//         {Object.keys(circleData).map(circleType => (
//           <div key={circleType} className="circle-group">
//             <label>
//               Title:
//               <input
//                 type="text"
//                 name="title"
//                 value={circleData[circleType].title}
//                 onChange={(e) => handleCircleChange(e, circleType)}
//               />
//             </label>
//             {circleData[circleType].names.map((name, index) => (
//               <label key={index}>
//                 Friend Name {index + 1}:
//                 <input
//                   type="text"
//                   name={`name-${index}`}
//                   value={name}
//                   onChange={(e) => handleCircleChange(e, circleType, index)}
//                 />
//               </label>
//             ))}
//           </div>
//         ))}
//         <button type="submit">Submit Circle Data</button>
//       </form>
//     </div>
//   );
// }
