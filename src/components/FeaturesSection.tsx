
import { useState } from 'react';
import { Award, Book, Calendar, Pencil, Users, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Professores IA Personalizados",
    description: "Aprenda como quiser — mais sério, divertido ou técnico. Nossos professores de IA se adaptam ao seu estilo único de aprendizagem.",
    icon: <Book className="w-10 h-10 text-chatcapacita-purple" />,
    color: "bg-chatcapacita-light-purple",
    hoverColor: "hover:bg-chatcapacita-purple/10"
  },
  {
    title: "Correção de Redação Nota 1000",
    description: "Receba avaliações detalhadas com feedback comparativo que realmente ajuda a melhorar sua escrita e argumentação.",
    icon: <Pencil className="w-10 h-10 text-chatcapacita-dark-blue" />,
    color: "bg-chatcapacita-light-blue",
    hoverColor: "hover:bg-chatcapacita-light-blue/30"
  },
  {
    title: "Planner Inteligente",
    description: "Organize seu tempo com um cronograma de estudos personalizado que se adapta ao seu progresso e identifica prioridades.",
    icon: <Calendar className="w-10 h-10 text-green-600" />,
    color: "bg-chatcapacita-light-green",
    hoverColor: "hover:bg-chatcapacita-light-green/30"
  },
  {
    title: "Comunidade Gamificada",
    description: "Participe de competições divertidas, ganhe pontos, suba de nível e aprenda colaborando com outros estudantes.",
    icon: <Users className="w-10 h-10 text-amber-500" />,
    color: "bg-chatcapacita-light-yellow",
    hoverColor: "hover:bg-chatcapacita-light-yellow/30"
  },
  {
    title: "Assistente de Carreira",
    description: "Explore universidades, cursos e profissões que combinam com seu perfil, preparando seu caminho para o sucesso.",
    icon: <Award className="w-10 h-10 text-pink-500" />,
    color: "bg-chatcapacita-light-red",
    hoverColor: "hover:bg-chatcapacita-light-red/30"
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-chatcapacita-light-purple/10" id="recursos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-chatcapacita-light-purple px-3 py-1 rounded-full mb-4">
            <Sparkles size={16} className="text-chatcapacita-purple" />
            <span className="text-sm font-medium text-chatcapacita-purple">Recursos exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Recursos que <span className="text-chatcapacita-purple">transformam</span> seu estudo em sucesso:
          </h2>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.color} rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${feature.hoverColor} cursor-pointer group relative overflow-hidden`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400/30">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              
              <div className="p-3 rounded-full bg-white shadow-md mb-6 w-16 h-16 flex items-center justify-center relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-700 relative z-10">{feature.description}</p>
              
              {activeFeature === index && (
                <div className="mt-4 flex gap-2 items-center animate-fade-in">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-xs text-green-700 font-medium">Recurso popular</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-xl shadow-lg border border-chatcapacita-light-purple">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-chatcapacita-purple">Experimente todos os recursos educacionais</h3>
              <p className="mt-2 text-gray-600">Nossos recursos são projetados por educadores e especialistas em pedagogia para maximizar seu aprendizado.</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-2 px-6 rounded-lg transition-colors flex gap-2 items-center group">
                <span>Ver demonstração</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
