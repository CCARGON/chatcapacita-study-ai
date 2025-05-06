
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Rocket, Award, Heart } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "O ChatCapacita funciona em celular?",
    answer: "Sim! Nosso aplicativo é totalmente responsivo e funciona perfeitamente em Android e iOS. Você pode estudar em qualquer lugar, a qualquer momento, com a mesma experiência de alta qualidade.",
    icon: <BookOpen className="text-chatcapacita-purple" size={18} />
  },
  {
    question: "Posso experimentar gratuitamente?",
    answer: "Claro! Oferecemos 7 dias gratuitos para você testar todas as funcionalidades premium. Não é necessário cartão de crédito para começar seu período de teste.",
    icon: <Rocket className="text-chatcapacita-dark-blue" size={18} />
  },
  {
    question: "Ele corrige redações do ENEM?",
    answer: "Sim. Nosso sistema foi treinado com milhares de redações nota 1000 e segue rigorosamente os critérios oficiais do ENEM. Você receberá feedback detalhado em cada uma das cinco competências avaliadas.",
    icon: <Award className="text-green-600" size={18} />
  },
  {
    question: "Quanto custa depois do teste?",
    answer: "Oferecemos planos a partir de R$29/mês, com acesso total a todas as funcionalidades. Também temos opções trimestrais e anuais com descontos especiais para quem deseja um compromisso maior.",
    icon: <Heart className="text-pink-500" size={18} />
  },
  {
    question: "Tenho suporte humano?",
    answer: "Sim! Além da IA, nossa equipe de suporte está disponível todos os dias das 8h às 22h para ajudar com qualquer dúvida. Também contamos com professores especialistas que supervisionam o conteúdo e podem auxiliar em questões pedagógicas mais complexas.",
    icon: <BookOpen className="text-amber-500" size={18} />
  }
];

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-20 h-20 bg-chatcapacita-light-purple rounded-lg rotate-12 animate-float opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-chatcapacita-light-yellow rounded-full animate-float opacity-60" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-chatcapacita-light-blue rounded-lg -rotate-12 animate-float opacity-60" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-chatcapacita-light-green rounded-full animate-float opacity-60" style={{ animationDelay: "2s" }}></div>
      
      {/* Elementos educacionais flutuantes */}
      <div className="absolute top-1/4 left-5 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="bg-white p-2 rounded-lg shadow-md rotate-6">
          <span className="text-xl">📚</span>
        </div>
      </div>
      <div className="absolute bottom-1/3 right-5 animate-float" style={{ animationDelay: "1.8s" }}>
        <div className="bg-white p-2 rounded-lg shadow-md -rotate-6">
          <span className="text-xl">🎓</span>
        </div>
      </div>
      <div className="absolute top-2/3 right-20 animate-float" style={{ animationDelay: "2.3s" }}>
        <div className="bg-white p-2 rounded-lg shadow-md rotate-12">
          <span className="text-xl">🔬</span>
        </div>
      </div>
      <div className="absolute top-40 left-1/3 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="bg-white p-2 rounded-lg shadow-md -rotate-3">
          <span className="text-xl">🧠</span>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white relative" id="faq">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
              Dúvidas Frequentes
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-chatcapacita-light-yellow -z-10 transform skew-x-3"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre o ChatCapacita e como podemos ajudar em sua jornada educacional.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            onValueChange={(value) => setActiveQuestion(value)}
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className={`border border-gray-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                  activeQuestion === `item-${index}` ? 'bg-white shadow-md' : 'bg-gray-50'
                }`}
              >
                <AccordionTrigger className="text-lg font-medium py-4 px-6 hover:text-chatcapacita-purple transition-colors flex items-center gap-3">
                  <span className="p-2 rounded-full bg-gray-100 flex items-center justify-center">
                    {faq.icon}
                  </span>
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-6 pt-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 bg-chatcapacita-light-purple/20 rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="bg-chatcapacita-purple/10 p-4 rounded-full">
              <Rocket size={32} className="text-chatcapacita-purple" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Ainda tem dúvidas?</h3>
              <p className="text-gray-600 mb-4">Nossa equipe está pronta para ajudar você em sua jornada educacional.</p>
              <a 
                href="#" 
                className="inline-flex items-center text-chatcapacita-purple hover:text-chatcapacita-dark-blue gap-2 font-medium transition-colors"
              >
                Fale com nossa equipe
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
