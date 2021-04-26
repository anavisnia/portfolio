function makeNavLinkSmooth() {
    const navLinks = document.querySelectorAll(".navbar__link");

    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    behavior: "smooth",
                });
            });
        }
    }
}

makeNavLinkSmooth();

const spyScrolling = () => {
    const sections = document.querySelectorAll(".main__content");

    window.onscroll = () => {
        const scrollPosition =
            document.documentElement.scrollTop || document.body.scrollTop;

        for (let s in sections) {
            if (
                sections.hasOwnProperty(s) &&
                sections[s].offsetTop <= scrollPosition
            ) {
                const id = sections[s].id;
                document.querySelector(".link-active").classList.remove("link-active");

                document
                    .querySelector(`a[href*=${id}]`)
                    .parentNode.classList.add("link-active");
            }
        }
    };
};

spyScrolling();