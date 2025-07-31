import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Czyszczenie Basenów",
    description: "Kompleksowe czyszczenie dna, ścian i powierzchni wody. Usuwanie zanieczyszczeń, liści i innych osadów.",
    icon: "🧽"
  },
  {
    title: "Serwis Techniczny",
    description: "Profesjonalny serwis pomp, filtrów, systemów grzewczych i automatyki basenowej. Szybka diagnostyka i naprawa.",
    icon: "🔧"
  },
  {
    title: "Konserwacja Sezonowa",
    description: "Przygotowanie basenu na sezon letni i zimowy. Zabezpieczenie instalacji przed mrozem.",
    icon: "❄️"
  },
  {
    title: "Chemia Wody",
    description: "Testowanie i regulacja poziomu pH, chloru i innych parametrów wody. Zapewniamy bezpieczną kąpiel.",
    icon: "⚗️"
  },
  {
    title: "Naprawa Usterek",
    description: "Szybka naprawa przecieków, uszkodzeń folii, problemów z filtracją i automatyką basenową.",
    icon: "🛠️"
  },
  {
    title: "Wymiana Wyposażenia",
    description: "Wymiana zużytych filtrów, pomp, lamp i innych elementów wyposażenia basenowego.",
    icon: "🔄"
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
            Kompleksowe usługi czyszczenia, serwisu i konserwacji basenów w województwach 
            śląskim, opolskim i dolnośląskim.
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