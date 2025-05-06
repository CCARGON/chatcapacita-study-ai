
import { Award, Book, Calendar, Pencil, Users } from 'lucide-react';

const features = [
  {
    title: "Professores IA Personalizados",
    description: "Aprenda como quiser — mais sério, divertido ou técnico.",
    icon: <Book className="w-10 h-10 text-chatcapacita-purple" />,
    color: "bg-chatcapacita-light-purple"
  },
  {
    title: "Correção de Redação Nota 1000",
    description: "Avaliações detalhadas com feedback comparativo.",
    icon: <Pencil className="w-10 h-10 text-chatcapacita-dark-blue" />,
    color: "bg-chatcapacita-light-blue"
  },
  {
    title: "Planner Inteligente",
    description: "Estude de forma organizada e eficaz.",
    icon: <Calendar className="w-10 h-10 text-green-600" />,
    color: "bg-chatcapacita-light-green"
  },
  {
    title: "Comunidade Gamificada",
    description: "Junte-se a batalhas de conhecimento e torne-se o campeão!",
    icon: <Users className="w-10 h-10 text-amber-500" />,
    color: "bg-chatcapacita-light-yellow"
  },
  {
    title: "Assistente de Carreira",
    description: "Descubra os melhores caminhos para seu futuro.",
    icon: <Award className="w-10 h-10 text-pink-500" />,
    color: "bg-chatcapacita-light-red"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="recursos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Recursos que transformam seu estudo em sucesso:
          </h2>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.color} rounded-lg p-8 hover:shadow-lg transition-all flex flex-col items-center text-center`}
            >
              <div className="p-3 rounded-full bg-white shadow-md mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
