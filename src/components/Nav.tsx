import avatar from "../assets/imgs/avatar.jpg"
import React from 'react';

export function Nav() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const NavButton = ({ label, sectionId }: { label: string; sectionId?: string }) => (
        <li className="nav-item">
            <button className="nav-link" onClick={() => sectionId && scrollToSection(sectionId)}>
                {label}
            </button>
        </li>
    );

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
            <div className="container">
                {/* Toggler for Mobile View */}
                <button
                    className="navbar-toggler ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Navbar Content */}
                <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                    {/* Left Navigation */}
                    <ul className="navbar-nav mr-auto">
                        <NavButton label="Home" sectionId="home" />
                        <NavButton label="About" sectionId="about" />
                        <NavButton label="Resume" sectionId="resume" />
                    </ul>

                    {/* Brand Information */}
                    <ul className="navbar-nav brand">
                        <img src={avatar} alt="Brand" className="brand-img" />
                        <li className="brand-txt">
                            <h5 className="brand-title">Emre İŞLER</h5>
                            <div className="brand-subtitle">Senior Software Engineer</div>
                        </li>
                    </ul>

                    {/* Right Navigation */}
                    <ul className="navbar-nav ml-auto">
                        <NavButton label="Portfolio" sectionId="portfolio" />
                        <NavButton label="Blog" sectionId="blog" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
