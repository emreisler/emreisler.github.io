import React from "react";
import ResumeSubHeader from "./ResumeSubHeader";
import ResumeItem from "./ResumeItem";
import Skill from "./Skill";
import goLogo from "../assets/imgs/go-logo.png"
import javaLogo from "../assets/imgs/java-logo.png"
import jsLogo from "../assets/imgs/js-logo.png"
import pythonLogo from "../assets/imgs/python-logo.png"
import sqlLogo from "../assets/imgs/sql-logo.png"

export default function Resume() {
    return (
        <>
            <section className="section" id="resume">
                <div className="container">
                    <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <ResumeSubHeader header="Expertise"/>
                                <div className="card-body">
                                    <ResumeItem time="2022 - Current" company="Tucows Inc"
                                                header="Platform Software Engineer"
                                                subText="Platform solutions"/>
                                    <ResumeItem time="2021-2022" company="Demirören Technology"
                                                header="Backend Software Engineer"
                                                subText="Platform solutions"/>
                                    <ResumeItem time="2020-2021" company="Havelsan" header="Software Engineer"
                                                subText="Platform solutions"/>
                                    <ResumeItem time="2013-2020" company="TUSAS" header="Software Engineer"
                                                subText="Platform solutions"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <ResumeSubHeader header="Education"/>
                                <div className="card-body">
                                    <ResumeItem time="2021-2022" company="TOBB University of Economics and Technology" header="Computer Engineering"
                                                subText="Masters degree" />
                                    <ResumeItem time="2006-2011" company="Çukurova University" header="Mechanical Engineering"
                                                subText="Bachelors degree"/>
                                    <ResumeItem time="2002-2006" company="Ankara Atatürk High School" header="High School Degree"
                                                subText=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <ResumeSubHeader header="Skills"/>
                                <div className="card-body pb-2">
                                    <Skill skillName="Go" percantage="" logoPath={goLogo}/>
                                    <Skill skillName="Java" percantage="" logoPath={javaLogo}/>
                                    <Skill skillName="Javascript" percantage="" logoPath={jsLogo}/>
                                    <Skill skillName="Python" percantage="" logoPath={pythonLogo}/>
                                    <Skill skillName="SQL" percantage="" logoPath={sqlLogo}/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <div className="pull-left">
                                        <h4 className="mt-2">Languages</h4>
                                        <span className="line"></span>
                                    </div>
                                </div>
                                <div className="card-body pb-2">
                                    <Skill skillName="English" percantage="" logoPath=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}