import DashGrid from "@/src/modules/dashboard/components/DashGrid";
import Sidebar from "@/src/shared/components/Sidebar";

// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <main className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <DashGrid/>
    </main>
  );
}
