"use client"

import Lenis from "lenis";
import Footer from "./components/Footer";
import "./globals.css";
import { useEffect, useState } from "react";
const Layout = ({ children }) => {
    const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        infinite: false,
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      return () => {
        lenis.destroy();
      };
    }, []);
  
    return (
      <>
        
            {children}
            <Footer />
       
      </>
    );
  };
  
  export default Layout;