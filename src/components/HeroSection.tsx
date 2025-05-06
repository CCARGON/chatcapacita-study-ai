
import { Button } from '../components/ui/button';
import { ArrowRight, BookOpen, Sparkles, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const [animatedText, setAnimatedText] = useState('ENEM');
  const examTypes = ['ENEM', 'Vestibulares', 'Concursos', 'Certificações'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(prev => {
        const currentIndex = examTypes.indexOf(prev);
        return examTypes[(currentIndex + 1) % examTypes.length];
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-chatcapacita-light-purple/30 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex items-center mb-3 animate-fade-in">
              <div className="bg-chatcapacita-purple text-white rounded-full p-1 mr-2">
                <Sparkles size={18} />
              </div>
              <span className="text-chatcapacita-purple font-medium">Impulsione seus estudos com IA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins leading-tight animate-fade-in">
              Prepare-se para vencer: seu novo jeito de <span className="relative">
                <span className="text-chatcapacita-purple">aprender</span>
                <svg className="absolute -bottom-2 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0,5 Q50,15 100,5" stroke="#E5DEFF" strokeWidth="8" fill="none" />
                </svg>
              </span> chegou!
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Inteligência artificial, planos de estudo inteligentes, correção de redações e gamificação — tudo para você conquistar o <span className="font-bold text-chatcapacita-purple transition-all duration-700">{animatedText}</span>.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button 
                className="bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-6 px-8 text-lg font-medium group relative overflow-hidden"
                size="lg"
              >
                <span className="absolute right-full top-0 h-full w-full bg-white/20 transition-all duration-500 group-hover:right-0 group-hover:opacity-0"></span>
                <span className="flex items-center gap-2">
                  <BookOpen size={20} /> 
                  Comece Gratuitamente
                </span>
              </Button>
              <Button 
                variant="outline" 
                className="border-chatcapacita-purple text-chatcapacita-purple hover:bg-chatcapacita-light-purple flex items-center gap-2 py-6 px-8 text-lg font-medium group"
                size="lg"
                onClick={() => scrollToSection('como-funciona')}
              >
                <span>Veja como Funciona</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-white bg-chatcapacita-light-${i === 1 ? 'purple' : i === 2 ? 'blue' : 'green'} flex items-center justify-center text-xs font-bold`}>
                    {i}K+
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">Estudantes já aprovados</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg animate-float">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-chatcapacita-light-blue rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-chatcapacita-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-chatcapacita-light-yellow rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                  alt="Dashboard do ChatCapacita"
                  className="rounded-lg shadow-2xl border-8 border-white transition-all hover:shadow-chatcapacita-purple/20 hover:scale-[1.02] duration-500"
                />
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-chatcapacita-purple h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                      <Rocket size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Aula IA</p>
                      <p className="text-sm text-green-500">Ao vivo agora</p>
                    </div>
                  </div>
                </div>
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
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg animate-pulse">
                  <div className="bg-chatcapacita-light-yellow h-12 w-12 rounded-full flex items-center justify-center text-chatcapacita-purple font-bold">
                    10x
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 py-6 px-8 bg-chatcapacita-light-purple/20 rounded-xl backdrop-blur-sm animate-fade-in grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Professores IA", value: "12+" },
            { label: "Matérias", value: "20+" },
            { label: "Exercícios", value: "10k+" },
            { label: "Taxa de aprovação", value: "94%" }
          ].map((stat, i) => (
            <div key={i} className="p-2">
              <p className="text-2xl md:text-3xl font-bold text-chatcapacita-purple">{stat.value}</p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
