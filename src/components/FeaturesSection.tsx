
import { useState } from 'react';
import { Award, Book, Calendar, Pencil, Users, Sparkles, ArrowRight, Brain, Headphones, Image, Rocket, BadgePercent, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';

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
  },
  {
    title: "Reconhecimento de Imagens e Áudio",
    description: "Envie fotos de exercícios ou fale com nossa IA para obter respostas rápidas e precisas às suas dúvidas.",
    icon: <Image className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-100",
    hoverColor: "hover:bg-blue-100/50"
  }
];

const plans = [
  {
    name: "Básico",
    description: "Ideal para quem está começando a se preparar",
    price: "R$29,90",
    color: "bg-chatcapacita-light-green",
    buttonColor: "bg-green-600 hover:bg-green-700",
    icon: <Rocket className="w-8 h-8 text-green-600" />,
    features: [
      "Acesso à IA para dúvidas básicas",
      "Planner de estudos semanal",
      "Materiais de estudo essenciais",
      "Correção simples de redações"
    ]
  },
  {
    name: "Intermediário",
    description: "Preparação completa para vestibulares e ENEM",
    price: "R$59,90",
    color: "bg-chatcapacita-light-blue",
    buttonColor: "bg-chatcapacita-dark-blue hover:bg-blue-800",
    icon: <GraduationCap className="w-8 h-8 text-chatcapacita-dark-blue" />,
    features: [
      "Acesso ilimitado à IA adaptativa",
      "Planner personalizado detalhado",
      "Correção avançada de redações",
      "Simulados com feedback detalhado",
      "Envio de fotos e áudio para dúvidas"
    ],
    popular: true
  },
  {
    name: "Avançado",
    description: "Para aprovação em concursos de alta performance",
    price: "R$99,90",
    color: "bg-chatcapacita-light-purple",
    buttonColor: "bg-chatcapacita-purple hover:bg-purple-800",
    icon: <Brain className="w-8 h-8 text-chatcapacita-purple" />,
    features: [
      "Tudo do plano Intermediário",
      "Mentoria personalizada com tutores especializados",
      "Análise de desempenho avançada com IA",
      "Materiais exclusivos para concursos",
      "Programa de gamificação premium com descontos em parceiros",
      "Simulados específicos para concursos"
    ]
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<number>(1); // Plano intermediário como padrão
  
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
        
        {/* Seção de planos */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-chatcapacita-light-yellow px-3 py-1 rounded-full mb-4">
              <BadgePercent size={16} className="text-amber-600" />
              <span className="text-sm font-medium text-amber-600">Escolha seu plano</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
              Planos para todos os <span className="text-chatcapacita-purple">objetivos</span> de estudo
            </h2>
            <p className="mt-4 text-gray-600">
              Escolha o plano ideal para sua jornada de estudos e conquiste sua aprovação com a ajuda da nossa tecnologia avançada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 ${plan.color} border-2 ${activePlan === index ? 'border-chatcapacita-purple shadow-xl scale-105' : 'border-transparent'} transition-all duration-300 relative`}
                onMouseEnter={() => setActivePlan(index)}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-chatcapacita-purple text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                
                <p className="text-gray-700 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="text-green-600 bg-white rounded-full p-1 shadow-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.buttonColor} text-white py-3 px-4 rounded-lg transition-colors`}
                >
                  Começar Agora
                </Button>
                
                {plan.popular && (
                  <div className="mt-4 text-center">
                    <span className="text-sm text-chatcapacita-purple font-medium">7 dias grátis de teste</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-chatcapacita-light-purple">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-chatcapacita-light-purple rounded-lg">
                  <Headphones className="w-6 h-6 text-chatcapacita-purple" />
                </div>
                <h3 className="text-xl font-bold text-chatcapacita-purple">Envio de Áudio e Imagens</h3>
              </div>
              <p className="text-gray-700">
                Tire foto do seu exercício ou grave suas dúvidas por áudio. Nossa IA entende e responde de forma clara e didática, como se fosse um professor particular ao seu lado.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  </div>
                  <span>Reconhecimento de fórmulas matemáticas em imagens</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  </div>
                  <span>Conversão de áudio para texto com alta precisão</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <Button 
                className="bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-2 px-6 rounded-lg transition-colors flex gap-2 items-center group"
              >
                <span>Experimentar recursos</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
