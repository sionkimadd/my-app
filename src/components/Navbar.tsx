import React, { useState, useEffect, CSSProperties } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getWinnipegTime = () => {
    const options: Intl.DateTimeFormatOptions = { timeZone: "America/Winnipeg", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
    return new Intl.DateTimeFormat("en-US", options).format(time);
  };

  const [hours, minutes, seconds] = getWinnipegTime().split(":");

  return (
    <div className="sticky top-4 z-50 flex justify-center px-4 md:px-8 lg:px-0">
      <div className="navbar bg-base-300 rounded-xl px-6 py-3 max-w-4xl w-full">
        <span className="countdown font-mono text-2xl hidden md:inline">
          <span style={{ "--value": parseInt(hours) } as CSSProperties}></span>:
          <span style={{ "--value": parseInt(minutes) } as CSSProperties}></span>:
          <span style={{ "--value": parseInt(seconds) } as CSSProperties}></span>
        </span>
        <div className="flex flex-1 justify-evenly px-2">
          <a
            href="https://github.com/sionkimadd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium no-hover">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sion-kim-124ab52b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium no-hover">
            LinkedIn
          </a>

          <div className="text-lg font-bold no-hover">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;