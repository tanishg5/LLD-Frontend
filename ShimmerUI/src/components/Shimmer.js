import React from "react"
import { useState, useEffect } from "react"
function Shimmer() {
    return (
        // dummy cards - data
        <>
            {Array(10).fill(0).map((n, i) => {
                return (
                    <div key={i} className="p-5 m-5 border border-black rounded-lg">
                        <div className="w-64 h-64 bg-gray-200"></div>
                    </div>
                )
            })
            }
        </>
    )
}

export default Shimmer