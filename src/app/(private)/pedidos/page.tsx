import Sidebar from "@/src/shared/components/Layout/Sidebar";
import PageHeader from "@/src/shared/components/Page-Header";

export default function PedidosPage(){
  return(
    <main className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* conteúdo */}
      <div className="flex-1 p-8 space-y-8">
        <PageHeader
          title="Pedidos"
          subtitle="Acompanhe e gerencie seus pedidos aqui"
        />
      </div>


    </main>
  );
}