const Faq = () => {
  return (
     <section className="faq-section">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-6">
            <h2 className="faq-title">
              Frequently <br /> asked questions
            </h2>

            <p className="faq-desc">
              Frequently asked questions about our crypto currency app.
              The crypto security for conducting trusted transactions.
            </p>

            <a href="#" className="faq-link">
              Don't find the answer? Contact us here
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-6">

            <div className="faq-item">
              <h5>Is it safe to use crypto app?</h5>
              <p>
                Yes, Fugu crypto app and Coinbase are safe and use security
                measures that are industry-standard or above for U.S.-based.
              </p>
            </div>

            <div className="faq-item">
              <h5>How do I connect fugu to my crypto wallet?</h5>
              <p>
                Once you've approved a connection request from the app the
                fugu can send transaction requests to wallet, which you must
                also manually approve in the Wallet.
              </p>
            </div>

            <div className="faq-item">
              <h5>How do you make money with crypto app?</h5>
              <p>
                Investors buy coins such as Bitcoin, Litecoin, Ethereum,
                Ripple and more and wait until their value rises.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Faq