import React, { useState, useEffect } from "react";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dim");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dim" ? "emerald" : "dim");
  };

  return (
    <div className="relative">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <div className="pt-10">
        <Introduction 
          name="Sion Kim"
          image={`${process.env.PUBLIC_URL}/profile.png`}
          job="Student"
          description="IT enthusiast who loves science, stock investing, and exploring quantum computing." />
        <Projects
          title="Projects"
          projects={[
            {
              subTitle: "EZDB",
              description: "Designed for MySQL",
              image: `${process.env.PUBLIC_URL}/ezdb.png`,
              link: "https://ezdb.info/",
              skills: ["Python", "MySQL", "EC2"],
            },
            {
              subTitle: "Project 2",
              description: "Desc.",
              image: `${process.env.PUBLIC_URL}/ezdb.png`,
              link: "https://example.com",
              skills: ["Skill 1", "Skill 2"],
            },
          ]}
        />
        <Portfolio 
          title="Investment Portfolio" 
          investments={[
            { stock: "IONQ", percentage: 70 },
            { stock: "HON", percentage: 20 },
            { stock: "LAES", percentage: 10 },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
