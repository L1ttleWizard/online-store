import React from "react";

export const FeaturedMugs = ()=>{

    return(
        <section className="feature-mugs">
            <div className="container">
                <h2 className="feature-mugs--title">featured mugs</h2>
                <div className="flex-wrapper">
                    <div className="mug--standard--big wow slideInUp" data-wow-offset={3}>
                        <div className="overlay" />
                        <img src="img/pink premium ceramic.jpg" alt="pink mug" />
                        <p className="mug-subtext">Pink Premium Ceramic</p>
                        <div className="cost-wrapper">
                            <span className="cost-standard">$ 99.00 USD</span>
                        </div>
                        <a href="#" className="visuallyhidden">
                            explore mug
                        </a>
                    </div>
                    <div className="mug--onsale--big wow slideInUp" data-wow-offset={3}>
                        <span className="mug-sale">On sale.</span>
                        <div className="overlay" />
                        <img src="img/golden designers mug.jpg" alt="golden mug" />
                        <div className="overlay" />
                        <a href="#" className="visuallyhidden">
                            explore mug
                        </a>
                        <p className="mug-subtext">Golden Designers Mug</p>
                        <div className="cost-wrapper">
                            <span className="cost-sale">$50.00 USD</span>
                            <span className="cost-standard">$ 69.00 USD</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}