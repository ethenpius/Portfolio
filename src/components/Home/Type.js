import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cybersecurity Analyst",
          "Digital Forensics Specialist",
          "Web Developer",
          "Electronic Evidence Trainer/Tutor",
          "SOC Analyst",
          "System Administrator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
