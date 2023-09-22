import React, { useState, useEffect } from 'react';

const AirportScoreboard = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const textToDisplay = data[currentIndex].flight + ' - ' + data[currentIndex].status;

    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < textToDisplay.length) {
        setCurrentText((prevText) => prevText + textToDisplay.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          // Aguarda um momento antes de apagar o texto
          let reverseIndex = textToDisplay.length - 1;
          const reverseInterval = setInterval(() => {
            if (reverseIndex >= 0) {
              setCurrentText((prevText) => prevText.slice(0, -1));
              reverseIndex--;
            } else {
              clearInterval(reverseInterval);
              setCurrentIndex((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
              );
            }
          }, 100); // Intervalo para apagar o texto
        }, 1000); // Tempo de espera antes de apagar o texto
      }
    }, 100); // Intervalo para exibir cada caractere

    return () => clearInterval(interval);
  }, [data, currentIndex]);

  return (
    <div className="airport-scoreboard">
      <div className="scoreboard-item">{currentText}</div>
    </div>
  );
};

export default AirportScoreboard;
