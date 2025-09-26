// src/shared/components/ChartContainer.tsx
import { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  heightClass?: string; // Classe Tailwind para altura (ex: h-40, h-64)
}

export default function ChartContainer({ title, children, heightClass = 'h-40' }: ChartContainerProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-gray-500 text-sm mb-4">{title}</h2>
      {/* O div interno precisa ser 'relative' e ter uma altura definida (heightClass) */}
      <div className={`relative w-full ${heightClass} flex items-center justify-center text-gray-400 overflow-hidden`}>
        {children}
      </div>
    </div>
  );
}