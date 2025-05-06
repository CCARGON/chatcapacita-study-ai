
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-chatcapacita-purple font-poppins text-2xl font-bold">Chat<span className="text-chatcapacita-dark-blue">Capacita</span></span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#como-funciona" className="text-gray-700 hover:text-chatcapacita-purple font-medium transition-colors">Como Funciona</a>
          <a href="#recursos" className="text-gray-700 hover:text-chatcapacita-purple font-medium transition-colors">Recursos</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-chatcapacita-purple font-medium transition-colors">Depoimentos</a>
          <a href="#faq" className="text-gray-700 hover:text-chatcapacita-purple font-medium transition-colors">FAQ</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="font-medium">Login</Button>
          <Button className="bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white font-medium">
            Começar Grátis
          </Button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-700 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#como-funciona" 
              className="text-gray-700 hover:text-chatcapacita-purple font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#recursos" 
              className="text-gray-700 hover:text-chatcapacita-purple font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#depoimentos" 
              className="text-gray-700 hover:text-chatcapacita-purple font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-chatcapacita-purple font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2 flex flex-col space-y-3">
              <Button variant="outline" className="w-full font-medium">Login</Button>
              <Button className="w-full bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white font-medium">
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
