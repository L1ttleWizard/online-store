"use client"
import React from "react";
import { storyConfig } from "../../../public/Data/configs";
console.log(storyConfig);
export const Story = ()=>{
    return (
        <section className="wow slideInUp our_story" data-wow-offset={3}>
            <div className="container" style={{ textAlign: "center" }}>
                <div className="content-wrap">
                    <h2>
                        {storyConfig.quote}
                    </h2>
                    <p>
                        {storyConfig.content}
                    </p>
                    <a href={storyConfig.storyLink} style={{ color: "#a25f4b" }}>
                        Read the full Story
                    </a>
                </div>
            </div>
        </section>
    )
}