
import React, { useState, useEffect } from "react";
import vite from "../assets/vite.svg";

// Custom hook for media query
function useMediaQuery(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);
    return matches;
}

function Navbar() {
    // Use media query to show/hide nav links on mobile
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Navbar">
            <div className="logo-bar">
                <div className="img-container">
                    <img src={vite} alt="Logo" />
                </div>
                <span>THE ODIN PROJECT</span>
            </div>
            {/* links */}
            <div className="nav-links">
                {isMobile ? (
                    <>
                        <button
                            className="btn-primary"
                            onClick={() => setMenuOpen((open) => !open)}
                            style={{ marginBottom: "10px" }}
                        >
                            {menuOpen ? "Close" : "Menu"}
                        </button>
                        {menuOpen && (
                            <nav>
                                <ul>
                                    <li><a href="#">All paths</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Community</a></li>
                                    <li><a href="#">Support us</a></li>
                                    <li><a href="#">Sign in</a></li>
                                    <div className="btn-primary"><button>Get Started</button></div>
                                </ul>
                            </nav>
                        )}
                    </>
                ) : (
                    <nav>
                        <ul>
                            <li><a href="#">All paths</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Support us</a></li>
                            <li><a href="#">Sign in</a></li>
                            <div className="btn-primary"><button>Get Started</button></div>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}

export default Navbar;