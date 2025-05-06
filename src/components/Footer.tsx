
import { Instagram, Linkedin, TikTok } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-chatcapacita-purple text-xl font-poppins font-bold">Chat<span className="text-white">Capacita</span></span>
            <p className="mt-4 text-gray-400">Transformando a educação com a inteligência artificial que entende e apoia o estudante brasileiro.</p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-chatcapacita-purple text-white p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-chatcapacita-purple text-white p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-chatcapacita-purple text-white p-2 rounded-full transition-colors">
                <TikTok size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {year} ChatCapacita. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
