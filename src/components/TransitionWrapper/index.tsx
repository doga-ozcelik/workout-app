import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./TransitionWrapper.css";
import { useTranslation } from "react-i18next";
import { NavigationContext } from "../../context/NavigationContext";

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  const { direction } = useContext(NavigationContext);
  const { i18n } = useTranslation();
  const [animating, setAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const isRTL = i18n.dir() === "rtl";

  useEffect(() => {
    setAnimating(true);
    let animClass = "";
    if (direction === "next") {
      animClass = isRTL ? "slide-in-from-left" : "slide-in-from-right";
    } else {
      animClass = isRTL ? "slide-in-from-right" : "slide-in-from-left";
    }
    setAnimationClass(animClass);

    const timer = setTimeout(() => {
      setAnimating(false);
      setAnimationClass("");
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, direction, isRTL]);

  return (
    <div
      className={`transition-wrapper ${animationClass} ${
        animating ? "animating" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
