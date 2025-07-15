import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Terms of Service for Eloténe
          </h1>
          
          <p className="text-sm text-muted-foreground mb-8 italic">
            *Effective: July 13, 2025*
          </p>

          <p className="text-muted-foreground mb-8">
            By using Eloténé's website or buying our products, you agree to:
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Ownership
            </h2>
            <p className="text-muted-foreground mb-4">
              All designs, logos, and "Eloténe" branding are our intellectual property.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>You own the tote bag; we own the design rights. No reselling as your own creation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Orders & Payments
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Orders are final once payment clears.</li>
              <li>Prices in GHS (Ghana Cedis). We absorb 3% payment processing fees – you pay the listed price.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Product Use
            </h2>
            <p className="text-muted-foreground mb-4">
              Our totes are for personal/light commercial use.
            </p>
            <p className="text-muted-foreground mb-2">
              We're not liable for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-8">
              <li>Damage from overloading (max weight: 4kg per bag)</li>
              <li>Colour fading from sun exposure (hand-dyed fabrics vary)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Disputes & Liability
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Maximum liability = cost of your order.</li>
              <li>Disputes resolved first via email negotiation, then through Accra courts if unresolved.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Website Rules
            </h2>
            <p className="text-muted-foreground mb-2">
              Please do not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Scrape our designs or product images.</li>
              <li>Disrupt site functionality.</li>
              <li>Place fraudulent orders.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Policy Changes
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
              <li>Updates posted on this page. Major changes emailed to subscribers.</li>
            </ul>
          </section>

          <p className="text-muted-foreground font-medium italic">
            *Governed by Ghanaian law.*
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;