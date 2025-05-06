
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O ChatCapacita funciona em celular?",
    answer: "Sim! Totalmente responsivo para Android e iOS."
  },
  {
    question: "Posso experimentar gratuitamente?",
    answer: "Claro! Você tem 7 dias gratuitos para testar tudo."
  },
  {
    question: "Ele corrige redações do ENEM?",
    answer: "Sim. Nosso sistema foi treinado com redações nota 1000 e critérios do ENEM."
  },
  {
    question: "Quanto custa depois do teste?",
    answer: "Planos a partir de R$29/mês, com acesso total."
  },
  {
    question: "Tenho suporte humano?",
    answer: "Sim! Além da IA, nossa equipe está disponível para dúvidas."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Dúvidas Frequentes
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-chatcapacita-purple transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
