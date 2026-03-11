const Portfolio = () => {
    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT IMAGE */}
                    <div className="col-6">
                        <div className="portfolio-image">
                            <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/mocup1.png" alt="Crypto App"/>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-6">
                        <div className="portfolio-content">
                            <h2>
                                Build a portfolio <br />
                                with popular coins
                            </h2>

                            <p>
                                To achieve a diversified portfolio, look for asset classes that
                                have low or negative correlations so that if moves down, the
                                other tends to it. ETFs and mutual funds are easy ways to select asset.
                            </p>

                            <p>
                                The best way to start a crypto portfolio is to have at least a
                                60% stake in Bitcoin & Ethereum which you can easily do with this app.
                            </p>

                            <button className="btn-get-started">
                                Get Started
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Portfolio