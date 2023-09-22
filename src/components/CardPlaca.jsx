import { useEffect, useState } from "react";
import "./style.scss"

export function CardPlaca({ data }) {
  const [intervalAnimateControll, setintervalAnimateControll] = useState(false);

  useEffect(() => {
    const randontimeAnimate = Math.floor(Math.random() * (120000 - 30000 + 1)) + 30000;
    setInterval(() => {
      setintervalAnimateControll(true)
      setTimeout(() => {
        setintervalAnimateControll(false)
      }, 3000);
    }, randontimeAnimate);

  }, [])

  function generateRandomCharArray(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charArray = [];
    const charsetLength = charset.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charsetLength);
      charArray.push(charset[randomIndex]);
    }

    return charArray;
  }

  return (
    <>
      {data.caracteres && data.caracteres.map((e, indexCaracter) =>
        <>
          <div key={indexCaracter} className={`box-card   bg-[url('/placa.png')] relative bg-contain bg-center bg-no-repeat w-32 h-60 text-[110px] text-white font-bold flex items-center justify-center square uppercase`} >
            <p>{e}</p>
            {intervalAnimateControll && generateRandomCharArray(10).map((letraAleatoria, index) =>
              <div key={index} className={`box-card animar-placar bg-[url('/placa.png')] bg-contain bg-center bg-no-repeat w-32 h-60 text-[110px] text-white font-bold flex items-center justify-center square`}
                style={{ animationDelay: `${index * 750}ms` }}
              >
                <p>{e !== '' && letraAleatoria}</p>
              </div>
            )}
          </div>
        </>
      )
      }
    </>
  )
}
