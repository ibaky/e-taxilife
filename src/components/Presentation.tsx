// Presentation.tsx
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import styles from './Presentation.module.css';

interface ContainerProps {
 title: string;
 content: string;
 imageUrl?: string;
 link?: string;
}

const Presentation: React.FC = () => {
 const { translations } = useLanguage();
 const { services } = translations.presentation;

 const containersData = [
   { 
     title: services.privateTransport.title, 
     content: services.privateTransport.content, 
     imageUrl: "/image/TaxiPrivee.jpg", 
     link: "/transport-privee" 
   },
   { 
     title: services.longDistance.title, 
     content: services.longDistance.content, 
     imageUrl: "/image/reserve.jpg", 
     link: "/trajet-longue-distance" 
   },
   { 
     title: services.hospitalTransport.title, 
     content: services.hospitalTransport.content, 
     imageUrl: "/image/handicape.jpg", 
     link: "/transport-hospitalier" 
   }
 ];

 const additionalContainersData = [
   { 
     title: services.parcelTransport.title, 
     content: services.parcelTransport.content, 
     imageUrl: "/image/colis.jpeg", 
     link: "/transport-colis" 
   },
   { 
     title: services.eventTaxi.title, 
     content: services.eventTaxi.content, 
     imageUrl: "/image/taxiMercedes.jpg", 
     link: "/taxi-evenement" 
   }
 ];

 const Container: React.FC<ContainerProps> = ({ title, content, imageUrl, link }) => (
   <div className={styles.container1}>
     <Link href={link || "#"} passHref legacyBehavior>
       <a className={styles.linkWrapper}>
         {imageUrl && <img src={imageUrl} alt={title} className={styles.containerImage} />}
         <div className={styles.transportText}>{title}</div>
         <p>{content}</p>
       </a>
     </Link>
   </div>
 );

 return (
   <section className={styles.presentationContainer}>
     <h2 className={styles.title}>{translations.presentation.title}</h2>

     <div className={styles.containerWrapper}>
       {containersData.map((container, index) => (
         <Container
           key={index}
           title={container.title}
           content={container.content}
           imageUrl={container.imageUrl}
           link={container.link}
         />
       ))}
     </div>

     <div className={styles.containerWrapper2}>
       {additionalContainersData.map((container, index) => (
         <Container
           key={index}
           title={container.title}
           content={container.content}
           imageUrl={container.imageUrl}
           link={container.link}
         />
       ))}
     </div>
   </section>
 );
};

export default Presentation;