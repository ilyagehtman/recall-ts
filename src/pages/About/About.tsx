import React from "react";
import classes from "./About.module.sass";
import RecallContainer from "../../component/RecallContainer.tsx";
import { SmallString } from "../../component/String/String.tsx";
import paragraphSvg from "../../assets/paragraph.svg";

type AboutProps = {}

const About: React.FC<AboutProps> = () => {
  return <RecallContainer>
    <div className={ classes.about }>
      <Applique/>
      <Title/>
    </div>
  </RecallContainer>;
};

const Applique: React.FC<AboutProps> = () => {
  return (
    <div className={ classes.applique }>
      <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M132.734 136.159H4.97781C3.30577 136.159 1.92536 134.78 2.00313 133.111C2.00313 133.111 26.3644 76.1752 56.4029 70.5263C56.9667 70.4292 57.025 69.7109 56.4806 69.5168C55.9362 69.3227 34.1608 32.7697 34.1608 32.7697C34.1608 32.7697 50.0841 3.90396 64.7825 2.23452C85.8775 -0.172583 103.784 16.2695 103.784 36.8851C103.784 51.7742 94.4321 64.5085 81.2696 69.5168C80.7447 69.7109 80.803 70.4292 81.3474 70.5263C111.366 76.1752 135.708 133.111 135.708 133.111C135.786 134.78 134.406 136.159 132.734 136.159Z"
          stroke="#E0E2E5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0593 -1.74343e-05L12.4639 38.8307L15.1816 39.7793L28.777 0.948554L26.0593 -1.74343e-05Z"
              fill="#E0E2E5"/>
        <path d="M0.24548 23.0594L41.2407 19.588L40.9951 16.72L-0.000178346 20.1914L0.24548 23.0594Z" fill="#E0E2E5"/>
      </svg>
      <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M102.381 68.797C120.871 68.797 135.841 53.8497 135.841 35.3888C135.841 16.9279 120.871 2 102.381 2C102.381 2 69.815 16.0544 68.9595 33.7776C68.9206 34.3017 68.9206 34.8453 68.9206 35.4082C68.9206 34.8453 68.9206 34.3017 68.8817 33.7776C68.0262 16.0738 53.3862 2 35.4603 2C16.9706 2 2 35.4082 2 35.4082C2 53.8691 35.4992 68.8164 35.4603 68.8164H35.4992C35.4992 68.8164 28.8263 100.094 29.3263 100.594C29.8263 101.094 68.9595 100.594 68.9984 100.594C68.9595 101.235 68.9206 101.875 68.9206 102.555C68.9206 120.977 83.9301 135.963 102.381 135.963C102.381 135.963 135.841 120.977 135.841 102.555C135.841 84.0937 120.871 69.1464 102.381 69.1464V68.797Z"
          stroke="#E0E2E5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.24597 6.3394L45.2412 2.86804L44.9956 3.85018e-05L4.00031 3.4714L4.24597 6.3394Z" fill="#E0E2E5"/>
        <path d="M1.03876 29.4942L39.4229 14.6847L38.3841 12.0001L5.90831e-06 26.8097L1.03876 29.4942Z" fill="#E0E2E5"/>
      </svg>
      <svg width="138" height="137" viewBox="0 0 138 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M68.94 33.7776C69.7955 16.0544 84.455 2 102.361 2C120.812 2 135.822 16.9473 135.822 35.4082C135.822 35.7188 135.822 36.0876 135.783 36.3982C135.822 36.4759 135.822 36.5341 135.783 36.6118C136.036 42.7654 133.217 72.7183 69.7178 134.682C69.2317 135.148 46.7241 83.5541 46.238 83.0882L2 35.4082L13.238 8.58819C52.738 8.58819 48.238 8.58819 68.8817 35.4082L68.94 33.7776Z"
          stroke="#E0E2E5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

const Title: React.FC<AboutProps> = () => {
  return (
    <div className={ classes.title }>
      <img src={ paragraphSvg } alt={ "p" }/>
      <SmallString
        center
        value={ "часто, чтобы сохранить воспоминание о моменте, мы забираем с собой и храним памятные предметы. это может быть что угодно:\n" +
          "монетка, камень, билет из автобуса. но одно важно точно — все эти предметы не имеют материальной ценности. во время, когда\n" +
          "большинство фото хранятся в галерее, мы все чаще не можем испытать с ними эмоциональную связь и удаляем воспоминания\n" +
          "за ненадобностью. recall создан, чтобы переносить воспоминания из пикселей в материальный мир, создавать новую связь между\n" +
          "человеком, воспоминаниями и предметом." }
      />
    </div>
  );
};

export default About;