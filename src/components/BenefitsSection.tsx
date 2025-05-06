
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitProps {
  text: string;
  className?: string;
}

const Benefit = ({ text, className }: BenefitProps) => {
  return (
    <div className={cn("flex items-start gap-3 p-4", className)}>
      <div className="bg-chatcapacita-purple/10 rounded-full p-1 mt-0.5">
        <Check size={18} className="text-chatcapacita-purple" />
      </div>
      <p className="text-lg text-gray-800">{text}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            O que o ChatCapacita faz por você:
          </h2>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Benefit 
            text="Professores IA 24h no seu bolso"
            className="bg-chatcapacita-light-purple/30 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          />
          <Benefit 
            text="Correção de redações com nota e feedback reais" 
            className="bg-chatcapacita-light-blue/30 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          />
          <Benefit 
            text="Planos de estudo personalizados automaticamente" 
            className="bg-chatcapacita-light-green/30 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          />
          <Benefit 
            text="Batalhas de conhecimento para se divertir aprendendo" 
            className="bg-chatcapacita-light-yellow/30 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          />
          <Benefit 
            text="Explicações visuais incríveis para dominar qualquer matéria" 
            className="bg-chatcapacita-light-red/30 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          />
          <Benefit 
            text="Comunidade de estudantes conectados com IA moderadora" 
            className="bg-chatcapacita-light-purple/30 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
