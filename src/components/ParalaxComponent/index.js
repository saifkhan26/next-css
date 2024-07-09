"use client";
import { useEffect, useState } from "react";
import classes from "./ParalaxComponent.module.css";
export default function ParalaxComponent({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const scrollHandler = () => {
    const scrollY = window.scrollY;
    setPosition({ x: 0, y: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`${classes.paralaxContainer}`}>
      {children}
      <div
        className={classes.scrollElement}
        style={{ transform: `translateY(${position.y * -0.1}px)` }}
      ></div>
    </div>
  );
}
