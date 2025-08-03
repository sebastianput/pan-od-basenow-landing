import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Pan Od <span className="text-pool-crystal">Basenów</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-white hover:text-pool-crystal transition-colors">Strona Główna</a>
            <a href="#services" className="text-white hover:text-pool-crystal transition-colors">Usługi</a>
            <a href="#about" className="text-white hover:text-pool-crystal transition-colors">O Nas</a>
            <a href="#services" className="text-white hover:text-pool-crystal transition-colors">Realizacje</a>
            <a href="#contact" className="text-white hover:text-pool-crystal transition-colors">Kontakt</a>
          </nav>
          
          <a href="#contact">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pool-deep">
              Zadzwoń Teraz
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;