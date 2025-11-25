import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuGestor from "../../components/menuGestor";

export default function HomeGestor() {
  const navigate = useNavigate();
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("planosCriados")) || [];
    setPlanos(dados);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#03033D] text-white flex flex-col px-6 pt-6 pb-24">
      <h1 className="text-2xl font-bold mb-6">Planos disponíveis</h1>

      <div className="flex justify-center items-center mb-10">
        <button
          className="w-32 h-32 rounded-2xl border-[6px] border-blue-500 flex items-center justify-center bg-[#03033D]"
          onClick={() => navigate("/gestor/PlanoCategoria")}
        >
          <span className="text-6xl font-bold text-blue-500">+</span>
        </button>
      </div>

      {planos.length === 0 ? (
        <p className="text-center opacity-70">Nenhum plano cadastrado ainda.</p>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {planos.map((p) => (
            <div
              key={p.id}
              className="bg-white text-black rounded-xl p-4 shadow w-full"
            >
              <p><strong>Categoria:</strong> {p.nomePlano}</p>
              <p><strong>Valor:</strong> R$ {p.valor}</p>
              <p><strong>Período:</strong> {p.dataInicio} até {p.dataFim}</p>
              <p><strong>Pagamento:</strong> {p.pagamento}</p>
            </div>
          ))}
        </div>
      )}

      <MenuGestor />
    </div>
  );
}
