import { Button } from "@/components/ui/button";
import heroPool from "@/assets/hero-pool.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPool})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pool-deep/80 via-pool/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pan Od
            <span className="block bg-gradient-to-r from-pool-crystal to-pool-light bg-clip-text text-transparent">
              Basenów
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-pool-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Profesjonalne czyszczenie, serwis i konserwacja basenów w województwach śląskim, 
            opolskim i dolnośląskim. Dbamy o Twój basen przez cały rok.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Bezpłatny Przegląd
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-pool-deep">
              Nasze Usługi
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-water-flow">
        <div className="w-2 h-16 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;