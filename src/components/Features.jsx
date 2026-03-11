const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="section-title">
                    Combines the best <br /> features of crypto
                </h2>

                <div className="row">
                    {/* LEFT COLUMN */}
                    <div className="col-6">
                        <div className="feature-box">
                            <div className="icon">
                                <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/icon1.png" alt="security" />
                            </div>
                            <h4>Industry-leading security</h4>
                            <p>
                                Security tokens are digital that represent & transferred ownership
                                rights to a blockchain token.
                            </p>
                            <a href="#">Discover More →</a>
                        </div>

                        <div className="feature-box">
                            <div className="icon">
                                <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/icon3.png" alt="storage" />
                            </div>
                            <h4>Cold storage for most users</h4>
                            <p>
                                A cold wallet, otherwise known as a hardware wallet cold storage,
                                is a physical device that keeps offline.
                            </p>
                            <a href="#">Discover More →</a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-6">
                        <div className="feature-box">
                            <div className="icon">
                                <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/icon2.png" alt="ownership" />
                            </div>
                            <h4>Ownership over your coins</h4>
                            <p>
                                The most reliable way to prove ownership of crypto currencies is to
                                sign a specified message with a key.
                            </p>
                            <a href="#">Discover More →</a>
                        </div>

                        <div className="feature-box">
                            <div className="icon">
                                <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/icon4.png" alt="insurance" />
                            </div>
                            <h4>Crime insurance against theft</h4>
                            <p>
                                Crime insurance protects a company from loss of money, securities,
                                inventory from fraud events.
                            </p>
                            <a href="#">Discover More →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features