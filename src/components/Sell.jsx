const Sell = () => {
    return (
        <section className="safe-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-6">
                        <div className="safe-content">
                            <h2>
                                Safe way to buy <br />
                                and sell crypto
                            </h2>

                            <p>
                                You can easily buy, sell, store, and transfer cryptocurrency
                                in one place. Get the right to buy or sell stocks at a specific
                                date for a specific price. No commissions here either.
                            </p>

                            <ul className="safe-list">
                                <li> 
                                    <img src="https://famous-souffle-7b597e.netlify.app/images/svg/check1.svg" alt="" className="mx-2" />
                                    Earn a 10-100% bonus on your weekly round-ups.
                                </li>
                                <li> 
                                    <img src="https://famous-souffle-7b597e.netlify.app/images/svg/check1.svg" alt="" className="mx-2" />
                                    Save money when you shop at some of your spots.
                                </li>
                                <li> 
                                    <img src="https://famous-souffle-7b597e.netlify.app/images/svg/check1.svg" alt="" className="mx-2" />
                                    Automatically invest part of every pay of crypto.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-6">
                        <div className="safe-image">
                            <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/video-thumb.png" alt="Safe crypto trading"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Sell