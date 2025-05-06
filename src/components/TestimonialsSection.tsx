
const testimonials = [
  {
    name: "Ana Souza",
    age: "17 anos",
    text: "Subi 220 pontos no ENEM usando o ChatCapacita! O plano de estudos IA fez toda diferença.",
    avatar: "👩‍🎓",
    color: "bg-chatcapacita-light-purple"
  },
  {
    name: "Lucas Ferreira",
    age: "19 anos",
    text: "A correção de redação foi surreal. Senti que aprendi 10x mais rápido.",
    avatar: "👨‍🎓",
    color: "bg-chatcapacita-light-blue"
  },
  {
    name: "Profª Camila Rocha",
    age: "Cursinho Beta",
    text: "Oferecer o ChatCapacita aos alunos foi um divisor de águas na nossa escola.",
    avatar: "👩‍🏫",
    color: "bg-chatcapacita-light-green"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Quem usou, recomendou!
          </h2>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${testimonial.color} rounded-lg p-6 relative hover:shadow-lg transition-all`}
            >
              <div className="bg-white rounded-lg p-6 shadow-md relative z-10">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="absolute -bottom-2 -right-2 text-chatcapacita-purple text-5xl opacity-20">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
