import Header from '../components/Header';
import Footer from '../components/Footer';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Shipping Policy for Eloténe
          </h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Getting Your Order to You!
            </h2>
            <p className="text-muted-foreground mb-4">
              Thanks for choosing Eloténe! Here's how we handle shipping – please give this a quick read before you order.
            </p>
            <p className="text-muted-foreground mb-6">
              Right now, we ship all across Ghana.
            </p>
            
            <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
              <li>
                <strong>Orders going to Accra:</strong> If the item's in stock, we aim to get it to you within 2 to 3 business days after your order is confirmed and paid.
              </li>
              <li>
                <strong>Orders outside Accra:</strong> Delivery usually takes 3 to 5 business days after confirmation, as long as we have the item ready.
              </li>
            </ul>

            <p className="text-muted-foreground mb-4">
              Heads up: These times are estimates. Sometimes things like courier delays, bad weather, or other unexpected stuff can slow things down. While we can't be held responsible for these delays, we promise we'll do everything we reasonably can to get your order to you on time.
            </p>

            <p className="text-muted-foreground mb-4">
              We only start packing up your order once it's fully confirmed and paid for. Please double-check your delivery address is spot on and try to be around when your package is scheduled to arrive.
            </p>

            <p className="text-muted-foreground mb-4">
              <strong>Super Important:</strong> If you aren't available to accept the delivery and the courier has to bring the package back to us, we won't be able to resend your order or give you a refund. This rule is essential to keep our products neat and in good condition for everyone.
            </p>

            <p className="text-muted-foreground font-medium">
              By ordering from Eloténe, you're confirming you've read, understood, and agree to this shipping policy.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;