
import { useState } from 'react';
import { Award, Book, Calendar, Pencil, Users, Sparkles, ArrowRight, Brain, Headphones, Image, Rocket, BadgePercent, GraduationCap, AudioLines, Camera, Trophy, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Professores IA Personalizados",
    description: "Aprenda com professores de IA que se adaptam ao seu estilo de aprendizado - mais direto, divertido ou detalhado conforme sua preferência.",
    icon: <Book className="w-10 h-10 text-chatcapacita-purple" />,
    color: "bg-chatcapacita-light-purple",
    hoverColor: "hover:bg-chatcapacita-purple/10"
  },
  {
    title: "Correção de Redação ENEM",
    description: "Receba avaliações detalhadas com feedback específico em cada competência do ENEM, com exemplos e melhorias para seu texto.",
    icon: <Pencil className="w-10 h-10 text-chatcapacita-dark-blue" />,
    color: "bg-chatcapacita-light-blue",
    hoverColor: "hover:bg-chatcapacita-light-blue/30"
  },
  {
    title: "Planner Inteligente Adaptativo",
    description: "Estude com um cronograma que se ajusta automaticamente com base no seu desempenho, identificando prioridades e reforçando pontos fracos.",
    icon: <Calendar className="w-10 h-10 text-green-600" />,
    color: "bg-chatcapacita-light-green",
    hoverColor: "hover:bg-chatcapacita-light-green/30"
  },
  {
    title: "Comunidade Gamificada",
    description: "Participe de batalhas de conhecimento, ganhe medalhas, suba de nível e aprenda em competições divertidas com outros estudantes.",
    icon: <Trophy className="w-10 h-10 text-amber-500" />,
    color: "bg-chatcapacita-light-yellow",
    hoverColor: "hover:bg-chatcapacita-light-yellow/30"
  },
  {
    title: "Assistente de Carreira",
    description: "Descubra universidades, cursos e profissões que combinam com seu perfil e receba orientação para trilhar seu caminho profissional.",
    icon: <Award className="w-10 h-10 text-pink-500" />,
    color: "bg-chatcapacita-light-red",
    hoverColor: "hover:bg-chatcapacita-light-red/30"
  },
  {
    title: "Envio de Fotos e Áudios",
    description: "Tire fotos de exercícios ou envie mensagens de voz com dúvidas para obter respostas instantâneas e precisas da nossa IA.",
    icon: <Camera className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-100",
    hoverColor: "hover:bg-blue-100/50"
  }
];

const plans = [
  {
    name: "Básico",
    description: "Para quem está começando a se preparar",
    price: "R$29,90",
    color: "bg-chatcapacita-light-green",
    buttonColor: "bg-green-600 hover:bg-green-700",
    icon: <Rocket className="w-8 h-8 text-green-600" />,
    features: [
      "Acesso à IA para dúvidas básicas",
      "Planner de estudos semanal",
      "Materiais de estudo essenciais",
      "Correção simples de redações",
      "Banco de questões comentadas"
    ]
  },
  {
    name: "Intermediário",
    description: "Preparação completa para ENEM e vestibulares",
    price: "R$59,90",
    color: "bg-chatcapacita-light-blue",
    buttonColor: "bg-chatcapacita-dark-blue hover:bg-blue-800",
    icon: <GraduationCap className="w-8 h-8 text-chatcapacita-dark-blue" />,
    features: [
      "Acesso ilimitado à IA adaptativa",
      "Planner personalizado detalhado",
      "Correção avançada de redações",
      "Simulados com feedback detalhado",
      "Envio de fotos e áudio para dúvidas",
      "Batalhas de conhecimento gamificadas",
      "Comunidade de estudos"
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
      "Mentoria personalizada com tutores",
      "Análise de desempenho avançada com IA",
      "Materiais exclusivos para concursos",
      "Programa de gamificação premium",
      "Simulados específicos para concursos",
      "Suporte prioritário 24/7",
      "Desconto em parceiros educacionais"
    ]
  }
];

const FeatureCard = ({ feature, index, isActive, onClick }) => {
  return (
    <div 
      className={`${feature.color} rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${feature.hoverColor} cursor-pointer group relative overflow-hidden ${isActive ? 'ring-2 ring-chatcapacita-purple scale-[1.02]' : ''}`}
      onClick={() => onClick(index)}
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
      
      {isActive && (
        <div className="mt-4 flex gap-2 items-center animate-fade-in">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs text-green-700 font-medium">Recurso popular</span>
        </div>
      )}
    </div>
  );
};

const PlanCard = ({ plan, index, isActive, onClick }) => {
  return (
    <div 
      className={`rounded-xl p-8 ${plan.color} border-2 ${isActive ? 'border-chatcapacita-purple shadow-xl scale-105' : 'border-transparent'} transition-all duration-300 relative hover:shadow-lg hover:scale-[1.02] cursor-pointer`}
      onClick={() => onClick(index)}
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
  );
};

const MultimediaSection = () => {
  return (
    <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-chatcapacita-light-purple">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-chatcapacita-light-purple rounded-lg">
              <AudioLines className="w-6 h-6 text-chatcapacita-purple" />
            </div>
            <h3 className="text-xl font-bold text-chatcapacita-purple">Áudio e Imagens para Dúvidas</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Simplifique seus estudos: tire fotos de exercícios difíceis ou envie mensagens de voz com suas dúvidas. Nossa IA entende e responde como um professor particular, disponível 24/7.
          </p>
          
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <div className="text-green-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </div>
              <span>Reconhecimento de fórmulas matemáticas e diagramas</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="text-green-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </div>
              <span>Explicações detalhadas em áudio ou texto</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="text-green-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </div>
              <span>Solução passo a passo de problemas</span>
            </li>
          </ul>
          
          <Button 
            className="mt-6 bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-2 px-6 rounded-lg transition-colors flex gap-2 items-center group"
          >
            <span>Experimentar recursos</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-chatcapacita-light-purple/20 rounded-full blur-3xl transform -translate-x-1/4"></div>
          <div className="relative flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 transform -rotate-2">
              <div className="flex items-center gap-2 mb-2">
                <Camera size={20} className="text-chatcapacita-purple" />
                <p className="font-medium text-sm">Envio de Foto</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <p className="text-gray-700">Resolva a equação: 2x² + 5x - 3 = 0</p>
              </div>
              <div className="mt-3 bg-chatcapacita-light-purple/30 rounded-lg p-3">
                <p className="text-sm font-medium">ChatCapacita:</p>
                <p className="text-sm">Para resolver esta equação quadrática, vamos usar a fórmula de Bhaskara. Temos a = 2, b = 5 e c = -3.</p>
                <p className="text-sm mt-1">x = (-b ± √(b² - 4ac)) / 2a</p>
                <p className="text-sm mt-1">x = (-5 ± √(25 - 4×2×(-3))) / 4</p>
                <p className="text-sm mt-1">x = (-5 ± √(25 + 24)) / 4</p>
                <p className="text-sm mt-1">x = (-5 ± √49) / 4</p>
                <p className="text-sm mt-1">x = (-5 ± 7) / 4</p>
                <p className="text-sm mt-1">x₁ = (-5 + 7) / 4 = 2/4 = 0,5</p>
                <p className="text-sm mt-1">x₂ = (-5 - 7) / 4 = -12/4 = -3</p>
                <p className="text-sm font-medium mt-2">As raízes da equação são x = 0,5 e x = -3</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 transform rotate-1 ml-8">
              <div className="flex items-center gap-2 mb-2">
                <AudioLines size={20} className="text-blue-500" />
                <p className="font-medium text-sm">Mensagem de Voz</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-xs italic text-gray-500">"Pode me explicar o que é fotossíntese de forma simples?"</p>
                <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="mt-3 bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium">ChatCapacita:</p>
                <p className="text-sm">A fotossíntese é o processo que as plantas usam para criar seu próprio alimento usando luz solar.</p>
                <p className="text-sm mt-2">Em termos simples:</p>
                <p className="text-sm mt-1">1. A planta absorve luz solar através das folhas</p>
                <p className="text-sm mt-1">2. Captura CO₂ do ar e água do solo</p>
                <p className="text-sm mt-1">3. Usa esses ingredientes para produzir glicose (açúcar)</p>
                <p className="text-sm mt-1">4. Libera oxigênio como subproduto</p>
                <p className="text-sm mt-2">É como se a planta "cozinhasse" seu próprio alimento usando luz solar como energia!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommunityFeature = () => {
  return (
    <div className="mt-12 bg-chatcapacita-light-yellow/30 p-8 rounded-xl border border-chatcapacita-light-yellow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-chatcapacita-light-yellow rounded-full blur-3xl"></div>
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="bg-chatcapacita-purple text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                    L
                  </div>
                  <div>
                    <p className="font-medium">Lucas Silva</p>
                    <div className="flex items-center">
                      <span className="text-xs text-green-500">Nível 7</span>
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500 mx-1"></span>
                      <span className="text-xs text-gray-500">980 pts</span>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-100 px-2 py-0.5 rounded-full text-xs text-amber-600 font-medium">
                  +15 pts
                </div>
              </div>
              
              <div className="mt-3 bg-gray-50 rounded-lg p-3">
                <p className="text-sm">Alguém pode me ajudar com esse exercício de Física? Não entendi como calcular a aceleração nesse caso.</p>
              </div>
              
              <div className="mt-3 border-t border-gray-100 pt-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <button className="text-gray-500 text-sm flex items-center gap-1">
                      <MessageCircle size={16} />
                      <span>Responder</span>
                    </button>
                    <button className="text-gray-500 text-sm">Compartilhar</button>
                  </div>
                  <div className="text-xs text-gray-500">há 5 min</div>
                </div>
              </div>
              
              <div className="mt-3 pl-6 border-l-2 border-chatcapacita-light-purple">
                <div className="flex items-start gap-2">
                  <div className="bg-chatcapacita-light-purple text-chatcapacita-purple h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs mt-1">
                    P
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-sm">Prof. IA Física</p>
                      <div className="ml-2 bg-chatcapacita-light-purple px-2 py-0.5 rounded-full text-xs text-chatcapacita-purple">
                        Instrutor IA
                      </div>
                    </div>
                    <p className="text-sm mt-1">Vamos lá, Lucas! Para calcular a aceleração, você precisa usar a Segunda Lei de Newton: F = m·a. Reorganizando, a = F/m. Quer uma explicação mais detalhada?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-chatcapacita-light-yellow rounded-lg">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Comunidade Gamificada</h3>
          </div>
          
          <p className="text-gray-700 mb-4">
            Aprenda junto com outros estudantes em nossa comunidade interativa. Faça perguntas, responda dúvidas, participe de desafios e ganhe pontos e medalhas enquanto amplia seu conhecimento!
          </p>
          
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Trophy size={16} className="text-amber-600" />
              </div>
              <span>Participe de competições diárias e semanais</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Users size={16} className="text-green-600" />
              </div>
              <span>Forme grupos de estudo para objetivos comuns</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Award size={16} className="text-purple-600" />
              </div>
              <span>Ganhe recompensas e descontos exclusivos</span>
            </li>
          </ul>
          
          <Button 
            className="mt-6 bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg transition-colors flex gap-2 items-center group"
          >
            <span>Conhecer comunidade</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

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
            Recursos que <span className="text-chatcapacita-purple">transformam</span> seu estudo em sucesso
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Descubra como nossa plataforma usa inteligência artificial para criar uma experiência de aprendizado personalizada, divertida e altamente eficaz.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              onClick={setActiveFeature}
            />
          ))}
        </div>
        
        <MultimediaSection />
        
        <CommunityFeature />
        
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
              <PlanCard 
                key={index}
                plan={plan}
                index={index}
                isActive={activePlan === index}
                onClick={setActivePlan}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
