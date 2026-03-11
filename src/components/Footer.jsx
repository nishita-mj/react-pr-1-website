const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    {/* LOGO + TEXT */}
                    <div className="col-3">
                        <h4 className="footer-logo">Fugu</h4>
                        <p className="footer-text">
                            Cryptocurrency trading is offered through an account
                            with the fugu crypto app. Our simplified zero commission
                            pricing for use stocks.
                        </p>
                        <p className="copyright">
                            © Copyright 2022, All Rights Reserved by Mthemeus
                        </p>
                    </div>

                    {/* PRODUCT */}
                    <div className="col-3">
                        <h5>Product</h5>
                        <ul>
                            <li>Invest</li>
                            <li>Crypto</li>
                            <li>Cash Card</li>
                            <li>Learn</li>
                            <li>Snacks</li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div className="col-3">
                        <h5>Company</h5>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Blog post</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="col-3">
                        <h5>Contact</h5>
                        <p>+088-234-6534</p>
                        <p>example@gmail.com</p>

                        <div className="social-icons">
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer