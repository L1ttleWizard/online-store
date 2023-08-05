import React from "react";
import { MugPlates } from "./MugPlates";

export const MoreProducts = ()=>{
    
    return(
        <section className="more_products">
            <div className="container">
                <h2 className="more_products--title">more products</h2>
                <div className="more-products-inner">
                    <MugPlates/>
                    
                </div>
            </div>
        </section>
    )
}