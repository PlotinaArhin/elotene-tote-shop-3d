import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} onCartClick={() => {}} />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground italic mb-8">
              *Last Updated: July 13, 2025.*
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Trust Matters</h2>
              <p className="text-muted-foreground mb-4">
                At Eloténe (we/us), we handcraft tote bags – not data empires. This policy explains what we collect and why, plain and simple.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Collect</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Order Details:</strong> Your name, address, phone number, email (to ship your tote and send order updates).</li>
                <li><strong>Payment Info:</strong> We never see your card details. Payments are processed securely by [Momo/Bank] – they handle that.</li>
                <li><strong>Browsing Data:</strong> Basic info like device type (to make our website work properly on your phone or laptop).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use It</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>To stitch, pack, and ship your order.</li>
                <li>To reply when you message us (elotene@gmail.com)</li>
                <li>To send optional updates about new designs (only if you check "Subscribe")</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Who We Share With</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Courier Partners – just your name/address to deliver your bag.</li>
                <li>Payment Processors – strictly for transaction purposes.</li>
                <li>Never sold to advertisers or third-party marketers.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Request access to data we hold about you.</li>
                <li>Ask us to delete your account info (order records kept for 3 years per tax laws).</li>
                <li>Unsubscribe from emails anytime (link in every newsletter).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground mb-2">
                Reach our data lead at:
              </p>
              <p className="text-muted-foreground mb-2">
                Eloténe.
              </p>
              <p className="text-muted-foreground mb-2">
                elotene@gmail.com
              </p>
              <p className="text-muted-foreground italic">
                *(We respond within 72 hours).*
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;