import { useEffect } from "react";

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function showOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = "flex";
    }
}

export function hideOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = "none";
    }
}

export function showAboutOverlay():any {
    const overlayAbout = document.getElementById("overlayAbout");
    if (overlayAbout) {
        overlayAbout.style.display = "flex";
    }
}

export function hideAboutOverlay():any {
    const overlayAbout = document.getElementById("overlayAbout");
    if (overlayAbout) {
        overlayAbout.style.display = "none";
    }
}

export function useNavbarScroll() {
    useEffect(() => {
        const navbar = document.getElementById("navbar-items");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.add("navbar-items-scroll");
                }
            } else {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.remove("navbar-items-scroll");
                }
            }
        });
    }, []);
}

export function useNavbarImageScroll(){
    useEffect(() => {
        const navbar = document.getElementById("navbar-image");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.add("logo-image-scroll");
                }
            } else {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.remove("logo-image-scroll");
                }
            }
        });
    }, []);
}

export function useHamburgerScroll() {
    useEffect(() => {
        const navbar = document.getElementById("hamburger");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.add("navbar-hamburger-scroll");
                }
            } else {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.remove("navbar-hamburger-scroll");
                }
            }
        });
    }, []);
}

export function useHamburgerAboutScroll() {
    useEffect(() => {
        const navbar = document.getElementById("hamburger-about");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.add("navbar-hamburger-scroll");
                }
            } else {
                if(navbar) {
                    // @ts-ignore
                    navbar.classList.remove("navbar-hamburger-scroll");
                }
            }
        });
    }, []);
}


// @ts-ignore
export const toggleLanguagefunction = (language, setLanguage) => {
    const newLanguage = language === "bosnian" ? "english" : "bosnian";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
};

// @ts-ignore
export const toggleLanguageMobilefunction = (language, setLanguage) => {
    const overlay= document.getElementById("overlay");
    const newLanguage = language === "bosnian" ? "english" : "bosnian";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    if(overlay) {
        // @ts-ignore
        overlay.style.display = "none";
    }
};

// @ts-ignore
export const toggleLanguageMobileAboutfunction = (language, setLanguage) => {
    const overlayAbout = document.getElementById("overlayAbout");
    const newLanguage = language === "bosnian" ? "english" : "bosnian";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // @ts-ignore
    overlayAbout.style.display = "none";
};



