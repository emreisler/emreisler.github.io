import services from "./services";
import ServiceCard from "./ServiceCard";


export default function Service() {
    return (
        <section className="section" id="service">
            <div className="container">
                <h2 className="mb-5 pb-4"><span className="text-danger">My</span> Services</h2>
                <div className="row">
                    {services.map((service) => (
                        <ServiceCard key={service.header} header={service.header} description={service.description}
                                     className={service.logo}/>
                    ))}
                </div>
            </div>
        </section>
    )
}