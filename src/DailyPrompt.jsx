import React, { useState, useEffect } from 'react';
import './DailyPrompt.css'; // Import the CSS file for DailyPrompt styling


const prompts = [
  "Send a thoughtful text message to a friend asking how their day is going",
  "Schedule a 15-minute video call with a family member to catch up",
  "Write a handwritten note to someone you appreciate and mail it",
  "Invite a friend for a virtual coffee chat or walk",
  "Plan a small surprise for a loved one, like cooking their favorite meal or buying them a small gift"
];

const getRandomPrompt = () => {
  const index = Math.floor(Math.random() * prompts.length);
  return prompts[index];
};

export default function DailyPrompt() {
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    // Choose a random prompt when the component mounts
    setPrompt(getRandomPrompt());
  }, []);

  return (
    <div className="subtitle">
      <p>Prompt: {prompt}</p>
    </div>
  );
}
