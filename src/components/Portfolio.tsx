import {useState} from "react";
import Company from "./Company";

export default function Portfolio() {

    const [company, setCompany] = useState("tucows")
    const handleSelection = (event: any, value: string) => {
        event.preventDefault();
        setCompany(value);
    };
    return (
        <section className="section bg-custom-gray" id="portfolio">
            <div className="container">
                <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>
                <div className="portfolio">
                    <div className="filters">
                        <button
                            data-filter=".tucows"
                            onClick={(e) => handleSelection(e, "tucows")}
                            className={company === "tucows" ? "active" : ""}
                        >
                            Tucows Inc
                        </button>
                        <button
                            data-filter=".demirören"
                            onClick={(e) => handleSelection(e, "demirören")}
                            className={company === "demirören" ? "active" : ""}
                        >
                            Demirören Technology
                        </button>
                        <button
                            data-filter=".havelsan"
                            onClick={(e) => handleSelection(e, "havelsan")}
                            className={company === "havelsan" ? "active" : ""}
                        >
                            Havelsan
                        </button>
                        <button
                            data-filter=".tusas"
                            onClick={(e) => handleSelection(e, "tusas")}
                            className={company === "tusas" ? "active" : ""}
                        >
                            TUSAS
                        </button>
                        <button
                            data-filter=".freelance"
                            onClick={(e) => handleSelection(e, "freelance")}
                            className={company === "freelance" ? "active" : ""}
                        >
                            Freelance
                        </button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Company companyName={company}/>
                </div>
            </div>
        </section>
    )
}