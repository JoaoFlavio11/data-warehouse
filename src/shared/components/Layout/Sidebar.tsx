'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaClipboardList,
  FaTruck,
  FaWarehouse,
  FaChartBar,
  FaCog,
} from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: <FaHome className="w-5 h-5" />, path: '/dashboard' },
    { name: 'Pedidos', icon: <FaClipboardList className="w-5 h-5" />, path: '/pedidos' },
    { name: 'Veículos e rotas', icon: <FaTruck className="w-5 h-5" />, path: '/veiculos-rotas' },
    { name: 'Galpões', icon: <FaWarehouse className="w-5 h-5" />, path: '/galpoes' },
    { name: 'Relatórios', icon: <FaChartBar className="w-5 h-5" />, path: '/relatorios' },
    { name: 'Configurações', icon: <FaCog className="w-5 h-5" />, path: '/configuracoes' },
  ];

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen p-6 flex flex-col rounded-4xl m-4">
      <div className="flex items-center space-x-2 border-b border-slate-700 pb-4 mb-6">
        <span className="text-xl font-semibold text-sky-400">Bem vindo!</span>
      </div>

      <nav className="flex-1">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`
                    flex items-center space-x-3 p-3 rounded-xl transition-colors duration-200 mb-2
                    ${isActive ? 'bg-slate-700 text-white' : 'hover:bg-slate-700'}
                  `}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
