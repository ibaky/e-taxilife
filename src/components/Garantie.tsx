// Garantie.tsx
import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLanguage } from '../context/LanguageContext';
import styles from "./Garantie.module.css";

interface GarantieProps {
 animated?: boolean;
}

const Garantie: React.FC<GarantieProps> = ({ animated = false }) => {
 const [isVisible, setIsVisible] = useState(false);
 const garantieRef = useRef<HTMLElement | null>(null);
 const { translations } = useLanguage();

 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting) {
         setIsVisible(true);
         observer.unobserve(entry.target);
       }
     },
     { threshold: 0.2 }
   );

   if (garantieRef.current) {
     observer.observe(garantieRef.current);
   }

   return () => {
     if (garantieRef.current) {
       observer.unobserve(garantieRef.current);
     }
   };
 }, []);

 return (
   <section 
     ref={garantieRef}
     className={`${styles.garantieContainer} ${(animated && isVisible) ? styles.animated : ""}`}
   >
     <img 
       src="/image/stop.jpg" 
       alt={translations.garantie.imageAlt} 
       className={styles.garentieImage}
     />
     
     <div className={styles.garantieEnfant}>
       <div className={styles.garantieText}>
         {translations.garantie.title} <br /> 
         {translations.garantie.subtitle}
       </div>

       <div className={styles.animationTextContainer}>
         <Player
           autoplay
           loop
           src="/animations/wired-outline-860-electric-car-hover-pinch.json"
           style={{ height: "70px", width: "70px" }}
         />
         <div className={styles.textNextToAnimation}>
           {translations.garantie.electricTaxi}
         </div>
       </div>

       <div className={styles.animationTransportContainer}>
         <Player
           autoplay
           loop
           src="/animations/wired-outline-651-disabled-person-hover-pinch.json"
           style={{ height: "70px", width: "70px" }}
         />
         <div className={styles.textNextToAnimation}>
           {translations.garantie.transportForAll}
         </div>
       </div>

       <div className={styles.animationStandardContainer}>
         <Player
           autoplay
           loop
           src="animations/wired-outline-405-non-stop-24-h-hover-spin (1).json"
           style={{ height: "70px", width: "70px" }}
         />
         <div className={styles.textNextToAnimation}>
           {translations.garantie.available24_7}
         </div>
       </div>
     </div>
   </section>
 );
};

export default Garantie;