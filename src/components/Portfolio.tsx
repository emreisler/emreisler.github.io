import {useState} from "react";
import Company from "./Company";
/*

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    });
});
 */

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
                        <a
                            href="#"
                            data-filter=".careem"
                            onClick={(e) => handleSelection(e,"careem")}
                            className={company === "careem" ? "active" : ""}
                        >
                            Careem
                        </a>
                        <a
                            href="#"
                            data-filter=".tucows"
                            onClick={(e) => handleSelection(e,"tucows")}
                            className={company === "tucows" ? "active" : ""}
                        >
                            Tucows Inc
                        </a>
                        <a
                            href="#"
                            data-filter=".demirören"
                            onClick={(e) => handleSelection(e,"demirören")}
                            className={company === "demirören" ? "active" : ""}
                        >
                            Demirören Technology
                        </a>
                        <a
                            href="#"
                            data-filter=".havelsan"
                            onClick={(e) => handleSelection(e,"havelsan")}
                            className={company === "havelsan" ? "active" : ""}
                        >
                            Havelsan
                        </a>
                        <a
                            href="#"
                            data-filter=".tusas"
                            onClick={(e) => handleSelection(e,"tusas")}
                            className={company === "tusas" ? "active" : ""}
                        >
                            TUSAS
                        </a>
                    </div>
                    <Company companyName={company}/>
                </div>
            </div>
        </section>
    )
}