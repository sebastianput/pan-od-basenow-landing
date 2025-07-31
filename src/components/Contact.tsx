import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-pool-deep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pool-deep mb-6">
            Skontaktuj Się z Nami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Potrzebujesz czyszczenia lub serwisu basenu? Obsługujemy województwa 
            śląskie, opolskie i dolnośląskie. Skontaktuj się z nami!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-pool/20">
            <CardHeader>
              <div className="text-4xl mb-4">📞</div>
              <CardTitle className="text-pool-deep">Telefon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-pool mb-2">+48 123 456 789</p>
              <p className="text-muted-foreground">Poniedziałek - Piątek: 8:00 - 18:00</p>
              <p className="text-muted-foreground">Sobota: 9:00 - 15:00</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-pool/20">
            <CardHeader>
              <div className="text-4xl mb-4">✉️</div>
              <CardTitle className="text-pool-deep">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-pool mb-2">kontakt@panodbasenow.pl</p>
              <p className="text-muted-foreground">Odpowiadamy w ciągu 24h</p>
              <p className="text-muted-foreground">7 dni w tygodniu</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-pool/20">
            <CardHeader>
              <div className="text-4xl mb-4">📍</div>
              <CardTitle className="text-pool-deep">Adres</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-pool mb-2">ul. Serwisowa 45</p>
              <p className="text-muted-foreground">40-001 Katowice</p>
              <p className="text-muted-foreground">woj. śląskie</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-pool to-pool-deep rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Potrzebujesz Serwisu Basenu?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Umów się na bezpłatny przegląd i wycenę. Nasi specjaliści zadbają 
            o Twój basen w województwach śląskim, opolskim i dolnośląskim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-pool-deep hover:bg-pool-light border-white">
              Umów Przegląd
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white border hover:bg-white/20">
              Cennik Usług
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;