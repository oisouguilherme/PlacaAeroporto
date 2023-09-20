export function CardPlaca({ letra }) {

  return (
    <div className="bg-[url('/placa.png')] bg-contain bg-center bg-no-repeat w-32 h-64 text-[110px] text-white font-bold flex items-center justify-center square">
      <p>{letra}</p>
    </div>
  );
}
