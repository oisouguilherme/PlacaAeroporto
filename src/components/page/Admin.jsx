import "./style.scss";
import Mock from "../nomes.json"; // Importe o JSON fictício
import { useEffect, useState } from "react";
import { Firestore } from "../../utils/firebase";

export function Admin() {
  const [letras, setLetras] = useState(Mock);
  const [logado, setlogado] = useState(false);
  const [password, setpassword] = useState("");
  useEffect(() => {
    // Firestore.collection('placar').doc('4fqdPaCl1fRk5r1IwPJG').set(Mock);
    getData();
  }, []);

  async function getData() {
    const user = await Firestore.collection("placar").get();
    if (user?.docs?.length) {
      let registro = [];
      user.docs.forEach((element) => {
        const save = { id: element.id, ...element.data() };
        registro.push(save);
      });
      setLetras(registro[0]);
    }
  }

  function changeHorario(index, value) {
    const newValue = { ...letras };
    newValue.horarios[index] = value;
    setLetras({ ...letras, horarios: newValue.horarios });
  }
  function changeGanhadores(index, value) {
    const newValue = { ...letras };
    newValue.ganhadores[index] = value;
    setLetras({ ...letras, ganhadores: newValue.ganhadores });
  }
  function changeTicket(index, value) {
    const newValue = { ...letras };
    newValue.ticket[index] = value;
    setLetras({ ...letras, ticket: newValue.ticket });
  }

  async function salvar() {
    const save = { ...letras };
    delete save.id;
    await Firestore.collection("placar").doc("4fqdPaCl1fRk5r1IwPJG").set(save);
    alert("Registros salvos");
  }

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      {logado ? (
        <>
          <div className="grid lg:grid-cols-3 gap-12 p-4 sm:p-12">
            <div className=" flex flex-col gap-2">
              <h2 className="text-[#fbcb2b] text-2xl pb-4 font-bold">
                Horários do Sorteio
              </h2>
              <input
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Exemplo:(12:30)"
                type="text"
                value={letras.horarios[0]}
                maxLength={5}
                onChange={(e) => changeHorario(0, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Exemplo ( 12:30 )"
                value={letras.horarios[1]}
                maxLength={5}
                onChange={(e) => changeHorario(1, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Exemplo ( 12:30 )"
                value={letras.horarios[2]}
                maxLength={5}
                onChange={(e) => changeHorario(2, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Exemplo ( 12:30 )"
                value={letras.horarios[3]}
                maxLength={5}
                onChange={(e) => changeHorario(3, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Exemplo ( 12:30 )"
                value={letras.horarios[4]}
                maxLength={5}
                onChange={(e) => changeHorario(4, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Exemplo ( 12:30 )"
                value={letras.horarios[5]}
                maxLength={5}
                onChange={(e) => changeHorario(5, e.target.value)}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h2 className="text-[#fbcb2b] text-2xl pb-4 font-bold">
                GANHADORES
              </h2>
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Nome dos ganhadores (max: 12 caracteres)"
                value={letras.ganhadores[0]}
                maxLength={12}
                onChange={(e) => changeGanhadores(0, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Nome dos ganhadores (max: 12 caracteres)"
                value={letras.ganhadores[1]}
                maxLength={12}
                onChange={(e) => changeGanhadores(1, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Nome dos ganhadores (max: 12 caracteres)"
                value={letras.ganhadores[2]}
                maxLength={12}
                onChange={(e) => changeGanhadores(2, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Nome dos ganhadores (max: 12 caracteres)"
                value={letras.ganhadores[3]}
                maxLength={12}
                onChange={(e) => changeGanhadores(3, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Nome dos ganhadores (max: 12 caracteres)"
                value={letras.ganhadores[4]}
                maxLength={12}
                onChange={(e) => changeGanhadores(4, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Nome dos ganhadores (max: 12 caracteres)"
                value={letras.ganhadores[5]}
                maxLength={12}
                onChange={(e) => changeGanhadores(5, e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#fbcb2b] text-2xl pb-4 font-bold">
                No. do Ticket
              </h2>
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Número do Ticket (max: 6 caracteres)"
                value={letras.ticket[0]}
                maxLength={6}
                onChange={(e) => changeTicket(0, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Número do Ticket (max: 6 caracteres)"
                value={letras.ticket[1]}
                maxLength={6}
                onChange={(e) => changeTicket(1, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Número do Ticket (max: 6 caracteres)"
                value={letras.ticket[2]}
                maxLength={6}
                onChange={(e) => changeTicket(2, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Número do Ticket (max: 6 caracteres)"
                value={letras.ticket[3]}
                maxLength={6}
                onChange={(e) => changeTicket(3, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Número do Ticket (max: 6 caracteres)"
                value={letras.ticket[4]}
                maxLength={6}
                onChange={(e) => changeTicket(4, e.target.value)}
              />
              <input
                type="text"
                className="bg-zinc-50 rounded-lg py-2 px-4"
                placeholder="Número do Ticket (max: 6 caracteres)"
                value={letras.ticket[5]}
                maxLength={6}
                onChange={(e) => changeTicket(5, e.target.value)}
              />
            </div>
          </div>
          <div className="px-4 sm:px-12">
            <button
              onClick={salvar}
              className="bg-[#fbcb2b] hover:bg-yellow-300 duration-300 w-full py-3 rounded-lg font-bold text-lg mt-12"
            >
              Salvar
            </button>
          </div>
        </>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col gap-4 items-center p-4 sm:p-12 w-full max-w-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#fbcb2b]">Bem vindo!</h2>
              <p className="text-white">
                Faça Login com sua senha para entrar
              </p>
            </div>
            <input
              className="bg-zinc-50 rounded-lg py-2 px-4 w-full"
              type="password"
              placeholder="Digite sua senha para entrar"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              className="bg-[#fbcb2b] text-black duration-200 font-bold hover:text-white py-3 w-full rounded-lg"
              onClick={() =>
                password === "1212@x" ? setlogado(true) : alert("Acesso negado")
              }
            >
              Entrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
