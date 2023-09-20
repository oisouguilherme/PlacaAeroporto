import { CardPlaca } from "./CardPlaca";
import React, { useEffect, useRef, useState } from "react";
import { spring } from "react-flip-toolkit";
import nomesData from "./nomes.json"; // Importe o JSON fictício

export function Main() {
  const [letras, setLetras] = useState([]);
  /*Documentação react-flip https://github.com/aholachek/react-flip-toolkit */
  const containerRef = useRef(null);
  useEffect(() => {
    const squares = [...containerRef.current.querySelectorAll(".square")];
    squares.forEach((el, i) => {
      spring({
        config: "wobbly",
        values: {
          translateY: [-15, 0],
          opacity: [0, 1],
        },
        onUpdate: ({ translateY, opacity }) => {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        },
        delay: i * 25,
        onComplete: () => {
          // add callback logic here if necessary
        },
      });
    });
  }, []);

  useEffect(() => {
    const nomes = nomesData.nomes;
    const letras = nomes.flatMap((nome) => nome.split(""));
    setLetras(letras);
    console.log(letras);
  }, []);

  return (
    <>
      <header className="bg-[#292a2e] text-7xl font-bold text-[#fbcb2b] flex justify-between text-center py-20 px-12">
        <div className="flex justify-between w-[2000px]">
          <h2>HORÁRIO DO SORTEIO</h2>
          <h2>GANHADOR</h2>
        </div>
        <div className="flex justify-between w-[700px] pr-32">
          <h2>No. do Ticket</h2>
        </div>
      </header>
      <main className="bg-[#1a1a1a] flex gap-16 py-12 px-4" ref={containerRef}>
        <div className="w-[800px] flex flex-col justify-center items-center gap-8">
          <div className="flex flex-wrap gap-8">
            {letras.map((letra, index) => (
              <CardPlaca key={index} letra={letra} />
            ))}
          </div>
        </div>

        <div className="w-[1900px] space-y-8">
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
        </div>

        <div className="w-[950px] flex flex-col justify-center items-center gap-8">
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
        </div>
      </main>
    </>
  );
}
