import React from "react";

export default function StatisticsSection() {
    const stats = [
        {
            icon: "ti-alarm-clock",
            value: "4K",
            label: "Hours Worked",
        },
        {
            icon: "ti-layers-alt",
            value: "30",
            label: "Project Finished",
        },
        {
            icon: "ti-heart-broken",
            value: "1K",
            label: "Coffee Drank",
        },
    ];

    return (
        <section className="section bg-dark text-center">
            <div className="container">
                <div className="row text-center">
                    {stats.map((stat, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="row">
                                <div className="col-5 text-right text-light border-right py-3">
                                    <div className="m-auto">
                                        <i className={`${stat.icon} icon-xl`}></i>
                                    </div>
                                </div>
                                <div className="col-7 text-left py-3">
                                    <h1 className="text-danger font-weight-bold font40">
                                        {stat.value}
                                    </h1>
                                    <p className="text-light mb-1">{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
