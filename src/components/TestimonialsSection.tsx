
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Souza",
    age: "17 anos",
    text: "Subi 220 pontos no ENEM usando o ChatCapacita! O plano de estudos IA fez toda diferença. O sistema se adaptou perfeitamente ao meu ritmo de aprendizado.",
    avatar: "👩‍🎓",
    color: "bg-chatcapacita-light-purple",
    stars: 5,
    achievement: "Aprovada em Medicina"
  },
  {
    name: "Lucas Ferreira",
    age: "19 anos",
    text: "A correção de redação foi surreal. Senti que aprendi 10x mais rápido. Em apenas 2 meses, minha nota subiu de 600 para 900 pontos!",
    avatar: "👨‍🎓",
    color: "bg-chatcapacita-light-blue",
    stars: 5,
    achievement: "Nota 960 na redação"
  },
  {
    name: "Profª Camila Rocha",
    age: "Cursinho Beta",
    text: "Oferecer o ChatCapacita aos alunos foi um divisor de águas na nossa escola. Vimos um aumento de 40% na taxa de aprovação em universidades públicas.",
    avatar: "👩‍🏫",
    color: "bg-chatcapacita-light-green",
    stars: 5,
    achievement: "47 alunos aprovados"
  },
  {
    name: "João Pedro",
    age: "18 anos",
    text: "Estudar ficou divertido! As batalhas de conhecimento me mantiveram motivado a aprender cada vez mais. Aprovado em Engenharia na UFRJ!",
    avatar: "👨‍💻",
    color: "bg-chatcapacita-light-yellow",
    stars: 4,
    achievement: "Aprovado em 1º lugar"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrevious = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-chatcapacita-light-purple/10 to-white overflow-hidden" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-chatcapacita-light-purple px-3 py-1 rounded-full mb-4">
            <Sparkles size={16} className="text-chatcapacita-purple" />
            <span className="text-sm font-medium text-chatcapacita-purple">Histórias de sucesso</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Quem usou, <span className="text-chatcapacita-purple">recomendou!</span>
          </h2>
        </div>
        
        <div className="mt-16 relative">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative">
                <Quote size={120} className="absolute -top-8 -left-8 text-chatcapacita-light-purple opacity-20 transform -scale-x-100" />
                <div 
                  className={`${testimonials[activeIndex].color} rounded-xl p-8 relative overflow-hidden transition-all duration-500`}
                >
                  <div className="bg-white rounded-lg p-8 shadow-xl relative z-10">
                    <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                      <div className="flex items-center">
                        <div className="text-4xl mr-4 p-2 bg-chatcapacita-light-purple rounded-full">{testimonials[activeIndex].avatar}</div>
                        <div>
                          <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                          <p className="text-sm text-gray-600">{testimonials[activeIndex].age}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-chatcapacita-light-yellow py-1 px-3 rounded-full animate-pulse">
                        <span className="text-amber-500 text-xs font-medium">{testimonials[activeIndex].achievement}</span>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {Array(testimonials[activeIndex].stars).fill(0).map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" className="mr-1" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonials[activeIndex].text}"</p>
                    
                    <div className="absolute -bottom-2 -right-2 text-chatcapacita-purple text-5xl opacity-20">"</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-chatcapacita-purple w-6" : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setAutoplay(false);
                      setActiveIndex(index);
                    }}
                  />
                ))}
              </div>
              
              <div className="flex justify-between mt-8">
                <button 
                  className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-chatcapacita-purple transition-colors"
                  onClick={handlePrevious}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-chatcapacita-purple transition-colors"
                  onClick={handleNext}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-chatcapacita-purple mb-2">+40%</div>
            <p className="text-gray-600">Aumento médio nas notas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-chatcapacita-purple mb-2">97%</div>
            <p className="text-gray-600">Alunos satisfeitos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-chatcapacita-purple mb-2">10K+</div>
            <p className="text-gray-600">Aprovações em 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
