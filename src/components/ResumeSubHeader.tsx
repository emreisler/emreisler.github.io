import React from "react";

export default function ResumeSubHeader({header}: {header: string}) {
    return (
        <div className="card-header">
            <div className="mt-2">
                <h4>{header}</h4>
                <span className="line"></span>
            </div>
        </div>
    )
}