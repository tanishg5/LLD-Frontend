import React from "react";
import { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
function Body() {
    const [meme, SetMeme] = useState(null);

    useEffect(() => { // when the page loads call this api
        fetchMeme();
    }, [])

    const fetchMeme = async () => {
        const data = await fetch("https://meme-api.com/gimme/20");
        const response = await data.json();
        SetMeme(response.memes);
    }
    return (
        <div className="flex flex-wrap">
            {
                !meme ?  ( <Shimmer/>) : (
                    meme.map((meme, i) => {
                        return (
                            <MemeCard key={i} data={meme} />
                        )
                    })
                )
            }
        </div>
    )
}

export default Body;