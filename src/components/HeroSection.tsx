
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-chatcapacita-light-purple/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins leading-tight">
              Prepare-se para vencer: seu novo jeito de aprender chegou!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
              Inteligência artificial, planos de estudo inteligentes, correção de redações e gamificação — tudo para você conquistar o ENEM e os vestibulares.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-6 px-8 text-lg font-medium"
                size="lg"
              >
                Comece Gratuitamente
              </Button>
              <Button 
                variant="outline" 
                className="border-chatcapacita-purple text-chatcapacita-purple hover:bg-chatcapacita-light-purple flex items-center gap-2 py-6 px-8 text-lg font-medium"
                size="lg"
                onClick={() => scrollToSection('como-funciona')}
              >
                Veja como Funciona
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center animate-float">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-chatcapacita-light-blue rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-chatcapacita-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-chatcapacita-light-yellow rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                  alt="Dashboard do ChatCapacita"
                  className="rounded-lg shadow-2xl border-8 border-white"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                      IA
                    </div>
                    <div>
                      <p className="font-medium">Professor IA</p>
                      <p className="text-sm text-gray-500">Online 24h/dia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
