import React from 'react';

import HeroBanner from "../components/HeroBanner";
import FooterBanner from "../components/FooterBanner";
import Product from "../components/Product";

import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
    return (
        <div>
            <HeroBanner />
            {console.log(bannerData)}
            <div className="products-heading">
                <h2>Best Selling Products</h2>
                <p>Speakers of many variations</p>
            </div>

            <div className="products-container">
                {products?.map((product) => product.name)}
            </div>

            <FooterBanner />
        </div>
    )
}

export const getServersideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: {
            products,
            bannerData
        }
    }
}

export default Home;