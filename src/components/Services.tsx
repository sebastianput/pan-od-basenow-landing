import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Projektowanie Basenów",
    description: "Indywidualne projekty dostosowane do Twojego ogrodu i potrzeb. Nowoczesne rozwiązania techniczne i estetyczne.",
    icon: "🏗️"
  },
  {
    title: "Budowa Basenów",
    description: "Kompleksowa realizacja od wykopów po wykończenie. Używamy najwyższej jakości materiałów i sprawdzonych technologii.",
    icon: "🏊‍♂️"
  },
  {
    title: "Systemy Filtracji",
    description: "Zaawansowane systemy oczyszczania wody zapewniające krystaliczną czystość przez cały sezon.",
    icon: "💧"
  },
  {
    title: "Automatyka Basenowa",
    description: "Inteligentne systemy sterowania temperatura, oświetleniem i chemią wody. Wszystko w jednej aplikacji.",
    icon: "🤖"
  },
  {
    title: "Serwis i Konserwacja",
    description: "Regularne przeglądy, czyszczenie i konserwacja. Dbamy o Twój basen przez cały rok.",
    icon: "🔧"
  },
  {
    title: "Akcesoria Basenowe",
    description: "Pełny asortyment akcesoriów: pokrywy, drabinki, oświetlenie LED, systemy grzewcze i wiele więcej.",
    icon: "🏖️"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-pool-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nasze Usługi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferujemy kompleksowe rozwiązania dla Twojego wymarzonego basenu. 
            Od projektu po codzienną obsługę.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-pool/20 hover:border-pool/50"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-water-flow">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-pool-deep">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;