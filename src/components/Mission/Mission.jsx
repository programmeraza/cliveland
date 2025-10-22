import React from "react";
import "./Mission.scss";
import BlurText from "../BlurText/BlurText";
import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mission">
        <div className="container">
          <div className="mission__wrapper">
            <h3>{t('components.mission.title')}</h3>

            <BlurText
              text={t('components.mission.text')}
              className="mission__text"
              animateBy="words" // можно поменять на 'letters' для анимации по буквам
              direction="top"   // направление анимации (top или bottom)
              delay={100}       // задержка между словами
              stepDuration={0.3} // скорость анимации
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
