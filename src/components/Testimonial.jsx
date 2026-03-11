const Testimonial = () => {
    return (
        <section className="testimonial-section">
            <div className="container">

                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="testimonial-title">
                            User gives feedback <br /> using our crypto app
                        </h2>
                    </div>
                </div>

                {/* TESTIMONIAL CARDS */}
                <div className="row mt-5">

                    {/* CARD 1 */}
                    <div className="col-4">
                        <div className="testimonial-card">
                            <div className="user-info">
                                <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/testimonial1.png" alt="user" />
                                <div>
                                    <h6>Marcel Gafam</h6>
                                    <span>@margafam</span>
                                </div>
                            </div>

                            <h5>Very satisfied 😊</h5>
                            <p>
                                I started with the Fugu app and now I am planning on
                                upgrading to higher value & $25 welcome bonus.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="col-4">
                        <div className="testimonial-card">
                            <div className="user-info">
                                <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/testimonial2.png" alt="user" />
                                <div>
                                    <h6>Patrick Perfetto</h6>
                                    <span>@patrickfetto</span>
                                </div>
                            </div>

                            <h5>Really happy with the app 💰</h5>
                            <p>
                                My experience is great & the app is very well designed.
                                Crypto marketing is very good.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="col-4">
                        <div className="testimonial-card">
                            <div className="user-info">
                                <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/testimonial3.png" alt="user" />
                                <div>
                                    <h6>Alex Zansir</h6>
                                    <span>@alexzan</span>
                                </div>
                            </div>

                            <h5>I love it! ❤️</h5>
                            <p>
                                I have been using Fugu crypto app since December 2021.
                                Everything is smooth and secure.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial