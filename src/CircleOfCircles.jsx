import React, { useState, useEffect } from "react"; //;

import "./CircleOfCircles.css";

const CircleOfCircles = ({ names, color, centerText, containerClass }) => {
  const [clickedCircles, setClickedCircles] = useState(
    new Array(names.length).fill(false),
  );

  const numCircles = 5;
  const angleStep = (2 * Math.PI) / numCircles;
  const originalColor = color; // Save the original color

  const handleCircleClick = (index) => {
    // Create a new state array where only the clicked circle index is true
    const newClickedCircles = clickedCircles.map((item, idx) =>
      idx === index ? true : item,
    );
    setClickedCircles(newClickedCircles);

    // // Set another timeout to reset color to original after one  minute
    setTimeout(() => {
      
        setClickedCircles((currentClickedCircles) => {
          const updatedClickedCircles = [...currentClickedCircles];
          updatedClickedCircles[index] = false;
          return updatedClickedCircles;
        });
      }, 60 * 1000); // One minute
    
  };

  const circleStyle = (index) => {
    const angle = angleStep * index;
    const radius = 140; // Distance from center to each circle
    const clicked = clickedCircles[index];
    return {
      position: "absolute",
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      backgroundColor: clicked ? "#75d193" : originalColor, // Change color on click
      top: `${radius - Math.cos(angle) * radius}px`,
      left: `${radius + Math.sin(angle) * radius}px`,
      background: color,
      transform: clicked ? "scale(1.1)" : "scale(1)", // Scaled up if clicked
      transition: "transform 0.5s, background-color 0.5s", // Animate the transform and background-color change
    };
  };

  // Generate the circles array with names provided by the user.
  const circles = names.map((name, index) => (
    <div
      key={index}
      style={circleStyle(index)}
      className="circle"
      onClick={() => handleCircleClick(index)}
    >
      <span className="circle-text">{name}</span>{" "}
      {/* Use the name instead of index */}
    </div>
  ));

  // Provide a fallback if no names provided or not enough names
  CircleOfCircles.defaultProps = {
    // Filler names to ensure there are always 5 circles
    names: ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"],
    color: "teal", // Default color
    centerText: "Center", // Default center text
    containerClass: "", // Default container class
  };

  return (
    <div className={`${containerClass} circle-container`}>
      <div className="center-circle">
        <p className="center-circle-text">{centerText}</p>
      </div>
      {circles}
    </div>
  );
};

export default CircleOfCircles;
