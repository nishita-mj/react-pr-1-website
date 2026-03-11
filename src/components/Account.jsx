const Account = () => {
    return (
        <section className="open-account-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT IMAGE */}
                    <div className="col-6">
                        <div className="account-image">
                            <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/mocup2.png" alt="Crypto mobile app"/>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-6">
                        <div className="account-content">

                            <h2>
                                Open an account in <br />
                                3 easy steps
                            </h2>

                            <p className="account-desc">
                                Become a better investor on the go, right in the app.
                                Join a new generation of crypto investors. Easy interface
                                to create an account.
                            </p>

                            {/* STEP 1 */}
                            <div className="account-step">
                                <div className="step-icon">
                                    <img src="https://famous-souffle-7b597e.netlify.app/images/svg/download.svg" alt=""/>
                                </div>
                                <div className="step-text">
                                    <h5>Download and create an account easily</h5>
                                    <p>
                                        Download it through Google Play or the App Store easy.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div className="account-step">
                                <div className="step-icon">
                                    <img src="https://famous-souffle-7b597e.netlify.app/images/svg/link.svg" alt=""/>
                                </div>
                                <div className="step-text">
                                    <h5>Link your bank account & make a payment</h5>
                                    <p>
                                        Add a personal checking account at the bottom of link.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div className="account-step">
                                {/* <div className="step-icon">⚡</div> */}
                                <div className="step-icon">
                                    <img src="https://famous-souffle-7b597e.netlify.app/images/svg/lightning-bolt.svg" alt=""/>
                                </div>
                                <div className="step-text">
                                    <h5>Start buying & selling crypto as you wish</h5>
                                    <p>
                                        Although many people prefer to apply the buy and hold.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Account