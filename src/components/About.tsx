import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-pool-light/30 to-pool-crystal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-pool-deep mb-6">
              O Nas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jesteśmy zespołem doświadczonych specjalistów zajmujących się profesjonalnym 
              czyszczeniem, serwisem i konserwacją basenów. Od ponad 15 lat dbamy o baseny 
              w województwach śląskim, opolskim i dolnośląskim.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nasza firma to gwarancja najwyższej jakości usług, terminowości 
              i profesjonalnego podejścia. Dysponujemy nowoczesnym sprzętem 
              i używamy sprawdzonych metod czyszczenia oraz konserwacji.
            </p>
            
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pool mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Obsługiwanych Basenów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pool mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Lat Doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pool mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Zadowolonych Klientów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pool mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Serwis Awaryjny</div>
              </div>
            </div>
            
            <Button variant="water" size="lg" className="mt-6">
              Sprawdź Nasze Rejony
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-pool to-pool-deep rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Dlaczego My?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pool-crystal mr-3 mt-1">✓</span>
                  <span>Bezpłatny przegląd i doradztwo techniczne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pool-crystal mr-3 mt-1">✓</span>
                  <span>Obsługa 3 województw: śląskie, opolskie, dolnośląskie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pool-crystal mr-3 mt-1">✓</span>
                  <span>Terminowe wykonanie usług</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pool-crystal mr-3 mt-1">✓</span>
                  <span>Profesjonalny sprzęt i środki chemiczne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pool-crystal mr-3 mt-1">✓</span>
                  <span>Serwis awaryjny 24/7 w sezonie</span>
                   <span>Kocham zone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
