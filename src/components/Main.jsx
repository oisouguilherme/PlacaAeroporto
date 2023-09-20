import { CardPlaca } from "./CardPlaca";
import React, { useEffect, useRef } from "react";
import { spring } from "react-flip-toolkit";

export function Main() {
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

  return (
    <>
      <header className="bg-[#292a2e] text-7xl font-bold text-[#fbcb2b] flex justify-between text-center py-20 px-12">
        <div className="flex justify-between w-[2000px]">
          <h2>HORÁRIO DO SORTEIO</h2>
          <h2>GANHADOR</h2>
        </div>
        <div className="flex justify-between w-[700px] pr-32">
          <h2>GATE</h2>
          <h2>VOO</h2>
        </div>
      </header>
      <main className="bg-[#1a1a1a] flex gap-32 py-12 px-4" ref={containerRef}>
        <div className="w-[800px] flex flex-col justify-center items-center gap-8">
          <div className="flex flex-wrap gap-8">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8">
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8">
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
          </div>
          <div className="flex flex-wrap gap-8 ">
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
        <div className="w-[300px] flex flex-col justify-center items-center gap-8">
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
        </div>
        <div className="w-[300px] flex flex-col justify-center items-center gap-8">
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
          <div className="flex flex-wrap gap-8 ">
            <CardPlaca />
            <CardPlaca />
          </div>
        </div>
      </main>
    </>
  );
}
