import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = ({ children, srOptions }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, srOptions);
    }
  });

  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealComponent;