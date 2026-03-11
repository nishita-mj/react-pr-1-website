import React from 'react'

const Hero = () => {
    return (
        // <section className="hero">
        //     <div className="container hero-flex d-flex mt-5">

        //         {/* Left Content */}
        //         <div className="hero-left">
        //             <h1>
        //                 The crypto <br />
        //                 trading app for <br />
        //                 the next-gen
        //             </h1>

        //             <p>
        //                 Fugu is the app that gives you access to trading tools that you
        //                 can actively buy & sell digital currencies in an optimal way.
        //             </p>

        //             {/* Store Buttons */}
        //             <div className="store-buttons">
        //                 <img
        //                     src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        //                     alt="App Store"
        //                 />
        //                 <img
        //                     src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        //                     alt="Google Play"
        //                 />
        //             </div>
        //             <div className="rating">
        //                 <div className="users">
        //                     <span>👤</span><span>👤</span><span>👤</span>
        //                 </div>
        //                 <div>
        //                     <strong>64,739</strong>
        //                     <span> Happy Customers</span>
        //                 </div>
        //                 <div className="stars">
        //                     <strong>4.8/5</strong>
        //                     <span> ⭐⭐⭐⭐⭐</span>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Right Image */}
        //         <div className="hero-right">
        //             <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/hand-mocup.png" alt="Crypto App" />
        //         </div>

        //     </div>
        // </section>
        <section className="hero">
            <div className="container">
                <div className="row g-0 align-items-center">

                    {/* Left */}
                    <div className="col-6 hero-left">
                        <h1>
                            The crypto <br />
                            trading app for <br />
                            the next-gen
                        </h1>

                        <p>
                            Fugu is the app that gives you access to trading tools that you
                            can actively buy & sell digital currencies in an optimal way.
                        </p>
                        <div className="store-buttons">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play"/>
                        </div>
                        <div className="rating">
                            <div>
                                <strong>64,739</strong>
                                <span> Happy Customers</span>
                            </div>
                            <div className="stars">
                                <strong>4.8/5</strong>
                                <span> ⭐⭐⭐⭐⭐</span>
                            </div>           </div>
                    </div>

                    {/* Right */}
                    <div className="col-6 hero-right">
                        <img src="https://famous-souffle-7b597e.netlify.app/images/all-img/hand-mocup.png" alt="Crypto App" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero