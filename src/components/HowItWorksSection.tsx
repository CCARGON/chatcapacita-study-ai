
import { Button } from '../components/ui/button';

const steps = [
  {
    number: 1,
    title: "Crie sua conta grátis",
    description: "Responda algumas perguntas para conhecer seu nível.",
    color: "bg-chatcapacita-light-purple",
    textColor: "text-chatcapacita-purple"
  },
  {
    number: 2,
    title: "Receba seu plano personalizado",
    description: "Estude de forma estratégica.",
    color: "bg-chatcapacita-light-blue",
    textColor: "text-chatcapacita-dark-blue"
  },
  {
    number: 3,
    title: "Evolua e vença",
    description: "Pratique, melhore e seja premiado a cada conquista.",
    color: "bg-chatcapacita-light-green",
    textColor: "text-green-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Comece em 3 passos simples
          </h2>
        </div>
        
        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative bg-white rounded-xl p-6 shadow-lg z-10 transform transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className={`${step.textColor} text-2xl font-bold`}>{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-6 px-8 text-lg font-medium"
            size="lg"
          >
            Criar Conta Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
