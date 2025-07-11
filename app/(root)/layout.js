"use client"

import Lenis from "lenis";
import Footer from "./components/Footer";
import "./globals.css";
import { useEffect, useState } from "react";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
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
        
           <div className="bg-gray-50">
           {children}
           <WhatsAppFloatingButton />
           <Footer />
           </div>
       
      </>
    );
  };
  
  export default Layout;