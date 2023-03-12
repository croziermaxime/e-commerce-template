import React from "react";
import Link from "next/link";

import { urlFor} from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">{ heroBanner }</p>
                <h3>MID TEXT</h3>
                <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image"/>
                <div>
                    <Link href="/product/ID">
                        <button type="button">BUTTON TEXT</button>
                    </Link>
                    <div className="desc">
                        <h5>Description</h5>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;