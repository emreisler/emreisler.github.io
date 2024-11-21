import React from "react";

export default function ResumeItem(props: { time: string, company: string, header: string, subText: string }) {
    return (
        <>
            <h6 className="title text-danger">{props.time}</h6>
            <p>{props.company}</p>
            <p>{props.header}</p>
            <p>{props.subText}</p>
            <hr/>
        </>
    )
}