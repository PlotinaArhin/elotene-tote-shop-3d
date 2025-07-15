import Header from '../components/Header';
import Footer from '../components/Footer';

const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Returns & Refunds Policy for Eloténe
          </h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              About Returns and Getting Your Money Back
            </h2>
            <p className="text-muted-foreground mb-4">
              Thanks for shopping with Eloténe! Before you buy, please take a moment to understand our policy on returns and refunds.
            </p>
            <p className="text-muted-foreground mb-4">
              Because our totebags are uniquely crafted and designed, <strong>all sales are final</strong>. We can't accept returns or exchanges. Once it leaves us, we can't take it back and resell it while guaranteeing its perfect condition.
            </p>
            <p className="text-muted-foreground mb-4">
              We generally don't offer refunds. The only exception is if we made a clear mistake – like sending you the wrong item, or if there's a verified problem with the product, that was definitely our fault during handling or packing.
            </p>
            <p className="text-muted-foreground mb-4">
              We would sincerely encourage you to check your order details carefully before paying. If you have any questions at all, just ask us first!
            </p>
            <p className="text-muted-foreground font-medium">
              Buying from us means you fully agree with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              If a Refund is Approved
            </h2>
            <p className="text-muted-foreground mb-4">
              If we agree that a refund is due (because it was our error):
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
              <li>We'll let you know once we've checked your request and decided to approve it.</li>
              <li>If approved, we'll process the refund back to your original payment method within 10 business days.</li>
              <li>Remember, it might take your bank or credit card company a few extra days for the refund to show in your account.</li>
              <li>
                <strong>Haven't still seen your refund after 15 business days since we approved it?</strong> Give us a shout at{' '}
                <a href="mailto:elotene@gmail.com" className="text-primary hover:underline">
                  eloténe@gmail.com
                </a>
              </li>
            </ol>
            <p className="text-muted-foreground">
              We'll be sure to look into it!
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnsPolicy;