import React from "react";

export default function Skill(props: { skillName: string, percantage: string, logoPath: string }) {

    if (props.logoPath === undefined || props.logoPath === "") {
        return (
            <h6>
                {props.skillName}
            </h6>
        )
    }
    return (
        <>
            <h6>
                <img src={props.logoPath} alt="SQL Logo" className="mini-logo"/>
                {props.skillName}
            </h6>
            <div className="progress mb-3">
                {/*<div className="progress-bar bg-danger" role="progressbar"*/}
                {/*     aria-valuenow="75"*/}
                {/*     aria-valuemin="0" aria-valuemax="100"></div>*/}
            </div>
        </>

    )

}