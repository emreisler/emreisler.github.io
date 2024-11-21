import React from "react";
import ResumeSubHeader from "./ResumeSubHeader";
import ResumeItem from "./ResumeItem";
import Skill from "./Skill";
import goLogo from "../assets/imgs/go-logo.png"
import javaLogo from "../assets/imgs/java-logo.png"
import jsLogo from "../assets/imgs/js-logo.png"
import pythonLogo from "../assets/imgs/python-logo.png"
import sqlLogo from "../assets/imgs/sql-logo.png"
import kafkaLogo from "../assets/imgs/kafka-logo.png"
import redisLogo from "../assets/imgs/redis-logo.png"
import k8Logo from "../assets/imgs/k8s-logo.png"
import dockerLogo from "../assets/imgs/docker-logo.png"
import awsLogo from "../assets/imgs/aws-logo.png"
import psgLogo from "../assets/imgs/postgresql-logo.png"

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
                                                subText=""/>
                                    <ResumeItem time="2021-2022" company="Demirören Technology"
                                                header="Backend Software Engineer"
                                                subText=""/>
                                    <ResumeItem time="2020-2021" company="Havelsan" header="Full Stack Software Engineer"
                                                subText=""/>
                                    <ResumeItem time="2013-2020" company="TUSAS" header="Full Stack Software Engineer"
                                                subText=""/>
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
                                <ResumeSubHeader header="Tools"/>
                                <div className="card-body pb-2">
                                    <Skill skillName="PostgreSQL" percantage="" logoPath={psgLogo}/>
                                    <Skill skillName="Kafka" percantage="" logoPath={kafkaLogo}/>
                                    <Skill skillName="Redis" percantage="" logoPath={redisLogo}/>
                                    <Skill skillName="Docker" percantage="" logoPath={dockerLogo}/>
                                    <Skill skillName="Kubernetes" percantage="" logoPath={k8Logo}/>
                                    <Skill skillName="Amazon Web Services" percantage="" logoPath={awsLogo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}