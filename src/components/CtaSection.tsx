
import { Button } from '../components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-chatcapacita-light-purple/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Comece sua jornada rumo à aprovação com a inteligência do futuro.
          </h2>
          <div className="mt-10">
            <Button 
              className="bg-chatcapacita-purple hover:bg-chatcapacita-dark-blue text-white py-6 px-8 text-lg font-medium"
              size="lg"
            >
              Quero Estudar com IA Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
