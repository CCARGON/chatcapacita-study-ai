
import { Button } from '../components/ui/button';
import { Rocket, Star, ArrowRight, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const CtaSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-20 bg-gradient-to-b from-chatcapacita-light-purple/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-chatcapacita-light-purple/40 to-transparent"></div>
      
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-chatcapacita-light-blue rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-20 right-10 w-60 h-60 bg-chatcapacita-light-yellow rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-chatcapacita-light-green rounded-full opacity-30 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-chatcapacita-purple to-chatcapacita-dark-blue text-white">
              <div className="inline-flex items-center p-2 bg-white/10 rounded-lg mb-6">
                <GraduationCap className="w-6 h-6 mr-2 text-white" />
                <span className="font-medium">Tempo de estudo reduzido</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins leading-tight">
                Comece sua jornada rumo à aprovação com a inteligência do futuro.
              </h2>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Acesso a todos os recursos premium',
                  'Plano de estudos personalizado',
                  'Professores IA 24h por dia',
                  'Comunidade exclusiva de aprovados'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 mr-2 flex-shrink-0 text-chatcapacita-light-yellow" fill="#FEF7CD" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center text-chatcapacita-light-yellow font-medium">
                <span className="mr-2">Perguntas?</span>
                <a href="#faq" className="underline hover:text-white transition-colors">Veja nosso FAQ</a>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-50 to-white">
              <Rocket className="w-12 h-12 text-chatcapacita-purple mb-6" />
              
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Pronto para decolar seus estudos?</h3>
              <p className="text-gray-600 mb-8">Junte-se a milhares de estudantes que transformaram seu aprendizado com IA.</p>
              
              <div 
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button 
                  className={`bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-6 px-8 text-lg font-medium w-full transition-all duration-300 ${isHovered ? 'shadow-lg shadow-chatcapacita-purple/30' : ''}`}
                  size="lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    Quero Estudar com IA Agora
                    <ArrowRight size={18} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </span>
                </Button>
                
                {isHovered && (
                  <div className="absolute -bottom-10 left-0 right-0 text-center animate-fade-in">
                    <p className="text-sm text-gray-500">7 dias grátis, cancele quando quiser</p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img 
                        src={`https://source.unsplash.com/random/150x150?face&sig=${i}`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={14} fill="#FFD700" stroke="none" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">95 avaliações recentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
