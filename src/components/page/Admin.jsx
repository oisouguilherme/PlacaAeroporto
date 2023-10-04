import "./style.scss";
import Mock from "../nomes.json"; // Importe o JSON fictício
import { useEffect, useState } from "react";
import { Firestore } from "../../utils/firebase";

import ExcelJS from "exceljs";

export function Admin() {
  const [letras, setLetras] = useState(Mock);
  const [logado, setlogado] = useState(false);
  const [password, setpassword] = useState("");
  const [registros, setregistros] = useState([]);
  useEffect(() => {
    // Firestore.collection('placar').doc('4fqdPaCl1fRk5r1IwPJG').set(Mock);
    getData();
    getGanhadores();
  }, []);

  async function getGanhadores() {
    const user = await Firestore.collection("historicoGanhadores").get();
    if (user?.docs?.length) {
      let registro = [];
      user.docs.forEach((element) => {
        const save = { id: element.id, ...element.data() };
        if (save.ticket !== '') {
          registro.push(save);
        }
      });

      registro.forEach(item => {
        item.dataFormatada = formatarData(item.date)
      });

      setregistros(removeDuplicates(registro));
    }
  }

  const removeDuplicates = (data) => {
    const uniqueTickets = {};
    data.forEach((item) => {
      if (!uniqueTickets[item.ticket]) {
        uniqueTickets[item.ticket] = true;
      }
    });
    const filteredData = data.filter((item) => uniqueTickets[item.ticket]);
    return filteredData;
  };

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
    for (let index = 0; index <= 5; index++) {
      await Firestore.collection("historicoGanhadores").add({
        ganhadores: save.ganhadores[index],
        horario: save.horarios[index],
        ticket: save.ticket[index],
        date: new Date()
      });

    }
    alert("Registros salvos");
  }

  function formatarData(data) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(data.seconds * 1000).toLocaleDateString(undefined, options);
  }

  function exportToExcel() {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Registros");
    worksheet.columns = [
      { header: 'GANHADOR', key: 'ganhadores' },
      { header: 'HORARIO', key: 'horario' },
      { header: 'TICKET', key: 'ticket' },
      { header: 'DATA DO REGISTRO', key: 'dataFormatada' },
    ];

    registros.forEach((item) => {
      worksheet.addRow(item);
    });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "registros.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    });
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
          <div className="p-10">
            <table className="w-full border-collapse bg-yellow-200">
              <thead>
                <tr className="bg-yellow-500 text-white font-semibold">
                  <th className="py-2 px-4">Ganhador</th>
                  <th className="py-2 px-4">Horario</th>
                  <th className="py-2 px-4">Ticket</th>
                  <th className="py-2 px-4">Data do registro</th>
                </tr>
              </thead>
              <tbody>
                {registros.length && registros.map((e, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-yellow-100" : "bg-yellow-200"}
                  >
                    <td className="border py-2 px-4">{e.ganhadores}</td>
                    <td className="border py-2 px-4">{e.horario}</td>
                    <td className="border py-2 px-4">{e.ticket}</td>
                    <td className="border py-2 px-4">{e.dataFormatada}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={exportToExcel}
              className="bg-[#fbcb2b] hover:bg-yellow-300 duration-300 w-full py-3 rounded-lg font-bold text-lg mt-12"
            >
              Fazer download
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
