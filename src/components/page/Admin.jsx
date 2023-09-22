import "./style.scss"
import Mock from "../nomes.json"; // Importe o JSON fictício
import { useEffect, useState } from "react";
import { Firestore } from "../../utils/firebase";

export function Admin() {
  const [letras, setLetras] = useState(Mock);
  const [logado, setlogado] = useState(false);
  const [password, setpassword] = useState('');
  useEffect(() => {
    // Firestore.collection('placar').doc('4fqdPaCl1fRk5r1IwPJG').set(Mock);
    getData();
  }, []);

  async function getData() {
    const user = await Firestore.collection("placar").get();
    if (user?.docs?.length) {
      let registro = [];
      user.docs.forEach((element) => {
        const save = { id: element.id, ...element.data() }
        registro.push(save);
      });
      setLetras(registro[0]);
    }
  }

  function changeHorario(index, value) {
    const newValue = { ...letras };
    newValue.horarios[index] = value;
    setLetras({ ...letras, horarios: newValue.horarios })
  }
  function changeGanhadores(index, value) {
    const newValue = { ...letras };
    newValue.ganhadores[index] = value;
    setLetras({ ...letras, ganhadores: newValue.ganhadores })
  }
  function changeTicket(index, value) {
    const newValue = { ...letras };
    newValue.ticket[index] = value;
    setLetras({ ...letras, ticket: newValue.ticket })
  }

  async function salvar() {
    const save = { ...letras }
    delete save.id
    await Firestore.collection('placar').doc('4fqdPaCl1fRk5r1IwPJG').set(save);
    alert('Registros salvos');
  }


  return (
    <div className="main-admin">
      {logado ?
        <>
          <div className="box">
            <div className="form-controll horarios">
              <input
                type="text"
                value={letras.horarios[0]}
                maxLength={5}
                onChange={(e) => changeHorario(0, e.target.value)}
              />
              <input
                type="text"
                value={letras.horarios[1]}
                maxLength={5}
                onChange={(e) => changeHorario(1, e.target.value)}
              />
              <input
                type="text"
                value={letras.horarios[2]}
                maxLength={5}
                onChange={(e) => changeHorario(2, e.target.value)}
              />
              <input
                type="text"
                value={letras.horarios[3]}
                maxLength={5}
                onChange={(e) => changeHorario(3, e.target.value)}
              />
              <input
                type="text"
                value={letras.horarios[4]}
                maxLength={5}
                onChange={(e) => changeHorario(4, e.target.value)}
              />
              <input
                type="text"
                value={letras.horarios[5]}
                maxLength={5}
                onChange={(e) => setLetras({ ...letras, })}
              />
            </div>
            <div className="form-controll ganhadores">
              <input
                type="text"
                value={letras.ganhadores[0]}
                maxLength={12}
                onChange={(e) => changeGanhadores(0, e.target.value)}
              />
              <input
                type="text"
                value={letras.ganhadores[1]}
                maxLength={12}
                onChange={(e) => changeGanhadores(1, e.target.value)}
              />
              <input
                type="text"
                value={letras.ganhadores[2]}
                maxLength={12}
                onChange={(e) => changeGanhadores(2, e.target.value)}
              />
              <input
                type="text"
                value={letras.ganhadores[3]}
                maxLength={12}
                onChange={(e) => changeGanhadores(3, e.target.value)}
              />
              <input
                type="text"
                value={letras.ganhadores[4]}
                maxLength={12}
                onChange={(e) => changeGanhadores(4, e.target.value)}
              />
              <input
                type="text"
                value={letras.ganhadores[5]}
                maxLength={12}
                onChange={(e) => changeGanhadores(5, e.target.value)}
              />
            </div>
            <div className="form-controll ticket">
              <input
                type="text"
                value={letras.ticket[0]}
                maxLength={5}
                onChange={(e) => changeTicket(0, e.target.value)}
              />
              <input
                type="text"
                value={letras.ticket[1]}
                maxLength={5}
                onChange={(e) => changeTicket(1, e.target.value)}
              />
              <input
                type="text"
                value={letras.ticket[2]}
                maxLength={5}
                onChange={(e) => changeTicket(2, e.target.value)}
              />
              <input
                type="text"
                value={letras.ticket[3]}
                maxLength={5}
                onChange={(e) => changeTicket(3, e.target.value)}
              />
              <input
                type="text"
                value={letras.ticket[4]}
                maxLength={5}
                onChange={(e) => changeTicket(4, e.target.value)}
              />
              <input
                type="text"
                value={letras.ticket[5]}
                maxLength={5}
                onChange={(e) => changeTicket(5, e.target.value)}
              />
            </div>
          </div>
          <div className="actions">
            <button onClick={salvar}>Salvar</button>
          </div>
        </>
        :
        <div className="main-login">
          <div className="box-login">
            <h2>Logar</h2>
            <input type="password" onChange={(e) => setpassword(e.target.value)} />
            <button onClick={() => (password === '1212@x' ? setlogado(true) : alert('Acesso negado'))}>Entrar</button>
          </div>
        </div>
      }
    </div>
  );
}
