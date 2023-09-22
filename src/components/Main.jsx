import { CardPlaca } from "./CardPlaca";
import { useEffect, useRef, useState } from "react";
import { spring } from "react-flip-toolkit";
import { Firestore } from "../utils/firebase";
import Mock from "./nomes.json"; // Importe o JSON fictício


export function Main() {
  const [letras, setLetras] = useState(Mock);
  const containerRef = useRef(null);
  useEffect(() => {
    Firestore.collection('placar')
      .onSnapshot(async (snap) => {
        const results = [];
        snap.forEach(async (doc) => {
          const valores = doc.data();
          results.push({
            uid: doc.id,
            ...valores,
          });
        });
        dataRegistros(results[0]);
        efeito();
      });
  }, []);

  function efeito() {
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
        delay: i * 5,
        onComplete: () => {
          // add callback logic here if necessary
        },
      });
    });
  }

  function dataRegistros(results) {
    const caracterHorarios = [];
    const caracterGanhadores = [];
    const caracterTickets = [];
    results.horarios.map((e) => {
      const dados = controllCaracteres(5, e);
      caracterHorarios.push({
        e,
        caracteres: dados
      })
    });
    results.ganhadores.map((e) => {
      const dados = controllCaracteres(12, e);
      caracterGanhadores.push({
        e,
        caracteres: dados
      })
    });
    results.ticket.map((e) => {
      const dados = controllCaracteres(6, e);
      caracterTickets.push({
        e,
        caracteres: dados
      })
    });
    setLetras({ ...letras, horarios: caracterHorarios, ganhadores: caracterGanhadores, ticket: caracterTickets });
  }

  function controllCaracteres(qtdCaracter, value) {
    const valorTratado = value.split("");
    const calcPreenche = valorTratado.length;
    for (let index = 0; index <= (qtdCaracter - 1) - calcPreenche; index++) {
      valorTratado.push("");
    }
    return valorTratado;
  }

  return (
    <div className="bg-[#1a1a1a] h-screen">
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
            {letras.horarios.map((letra) => (
              letra.caracteres &&
              letra.caracteres.map((e, index) => <CardPlaca key={index} letra={e} />)
            ))}
          </div>
        </div>

        <div className="w-[1900px] space-y-8">
          {letras.ganhadores.map((letra) => (
            <div className="flex flex-wrap gap-8 ">
              {letra.caracteres && letra.caracteres.map((e, index) => (
                <CardPlaca key={index} letra={e} />
              ))}
            </div>
          ))}
        </div>

        <div className="w-[950px] flex flex-col justify-center items-center gap-8">
          {letras.ticket.map((letra) => (
            <div className="flex flex-wrap gap-8 ">
              {letra.caracteres && letra.caracteres.map((e, index) => (
                <CardPlaca key={index} letra={e} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
