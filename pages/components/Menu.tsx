import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";

export default function NewMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Botão Hamburguer */}
      <button
        className="lg:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

    
      <ul className="hidden lg:flex space-x-6 text-white font-medium">
        <li className="hover:text-gray-300 cursor-pointer"><Link  href="/">
          Decodificar
        </Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link  href="/hexpage">
          Converter
        </Link></li>
        
      </ul>

     
      {isOpen && (
        <ul className="absolute right-0 mt-1 w-52 bg-blue-500 shadow-lg rounded-lg py-2 lg:hidden">
          <li className="px-4 py-2 hover:bg-blue-600 text-white cursor-pointer"><Link  href="/">
          Decodificar
        </Link></li>
          <li className="px-4 py-2 hover:bg-blue-600 text-white cursor-pointer"><Link  href="/hexpage">
          Converter
        </Link></li>
          
        </ul>
      )}
    </nav>
  );
}
