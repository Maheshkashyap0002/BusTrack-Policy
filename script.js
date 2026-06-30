/* ==========================================
   PREMIUM PRIVACY POLICY WEBSITE
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       Loader
    ===================================== */
    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
                loader.remove();
            }, 600);
        }, 1200);
    });

    /* =====================================
       Scroll Progress
    ===================================== */
    const progress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {
        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent =
            (window.scrollY / total) * 100;

        progress.style.width =
            percent + "%";
    });


    /* =====================================
       Theme Toggle
    ===================================== */
    const themeBtn =
        document.getElementById(
            "themeToggle"
        );

        
    let dark = true;

    if (themeBtn) {

        themeBtn.addEventListener(
            "click",
            () => {

                dark = !dark;

                if (dark) {

                    document.documentElement
                        .style.setProperty(
                            "--bg",
                            "#0A0A0A"
                        );

                } else {

                    document.documentElement
                        .style.setProperty(
                            "--bg",
                            "#F5F5F5"
                        );
                }
            }
        );
    }





    /* =====================================
       Search
    ===================================== */
    const search =
        document.getElementById(
            "searchInput"
        );

    if (search) {

        search.addEventListener(
            "keyup",
            e => {

                const value =
                    e.target.value
                        .toLowerCase();

                document
                    .querySelectorAll(
                        ".policy-section"
                    )
                    .forEach(
                        section => {

                            const text =
                                section
                                    .innerText
                                    .toLowerCase();

                            section.style.display =
                                text.includes(
                                    value
                                )
                                    ? "block"
                                    : "none";
                        }
                    );
            }
        );
    }

    /* =====================================
       Reveal Animation
    ===================================== */
    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .style.opacity =
                                "1";

                            entry.target
                                .style.transform =
                                "translateY(0)";
                        }
                    }
                );
            },
            {
                threshold: .15
            }
        );

    document
        .querySelectorAll(
            ".policy-section, .stat-card, .contact"
        )
        .forEach(el => {

            el.style.opacity = "0";

            el.style.transform =
                "translateY(60px)";

            el.style.transition =
                "all .8s ease";

            observer.observe(el);
        });

    /* =====================================
       Stats Counter
    ===================================== */
    const counters =
        document.querySelectorAll(
            ".counter"
        );

    counters.forEach(counter => {

        const text =
            counter.innerText;

        const target =
            parseInt(text);

        if (isNaN(target))
            return;

        let count = 0;

        const interval =
            setInterval(() => {

                count +=
                    Math.ceil(
                        target / 40
                    );

                if (
                    count >= target
                ) {

                    counter.innerText =
                        text;

                    clearInterval(
                        interval
                    );

                } else {

                    counter.innerText =
                        count;
                }

            }, 30);
    });

    /* =====================================
       TOC Highlight
    ===================================== */
    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".toc a"
        );

    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(
                section => {

                    const top =
                        section
                            .offsetTop -
                        200;

                    if (
                        window.scrollY >=
                        top
                    ) {

                        current =
                            section.id;
                    }
                }
            );

            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );

                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );
                    }
                }
            );
        }
    );

    /* =====================================
       Print
    ===================================== */
    const printBtn =
        document.querySelector(
            ".secondary-btn"
        );

    if (printBtn) {

        printBtn.addEventListener(
            "click",
            () => {

                window.print();

            }
        );
    }

    /* =====================================
       Download PDF
    ===================================== */
    const downloadBtn =
        document.querySelector(
            ".primary-btn"
        );

    if (downloadBtn) {

        downloadBtn.addEventListener(
            "click",
            () => {

                showToast(
                    "Preparing PDF..."
                );

                setTimeout(() => {

                    window.print();

                }, 1000);

            }
        );
    }

    
    /* =====================================
       Toast
    ===================================== */
    const toast =
        document.querySelector(
            ".toast"
        );

    function showToast(
        message
    ) {

        if (!toast)
            return;

        toast.innerText =
            message;

        toast.style.display =
            "block";

        setTimeout(() => {

            toast.style.display =
                "none";

        }, 2500);
    }

    /* =====================================
       Floating Elements
    ===================================== */
    document
        .querySelectorAll(
            ".floating-shapes div"
        )
        .forEach(
            (el, index) => {

                el.animate(
                    [
                        {
                            transform:
                                "translateY(0px)"
                        },
                        {
                            transform:
                                "translateY(-40px)"
                        },
                        {
                            transform:
                                "translateY(0px)"
                        }
                    ],
                    {
                        duration:
                            4000 +
                            index *
                                1000,

                        iterations:
                            Infinity
                    }
                );
            }
        );

    /* =====================================
       Hero Parallax
    ===================================== */
    window.addEventListener(
        "scroll",
        () => {

            const hero =
                document.querySelector(
                    ".hero-card"
                );

            if (hero) {

                hero.style.transform =
                    `translateY(${
                        window.scrollY *
                        .15
                    }px)`;
            }
        }
    );

    /* =====================================
       Mobile Menu
    ===================================== */
    const burger =
        document.querySelector(
            ".hamburger"
        );

    const nav =
        document.querySelector(
            ".nav-links"
        );

    if (
        burger &&
        nav
    ) {

        burger.addEventListener(
            "click",
            () => {

                nav.classList.toggle(
                    "mobile-open"
                );

            }
        );
    }

    /* =====================================
       Smooth Anchors
    ===================================== */
    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                e => {

                    e.preventDefault();

                    const target =
                        document.querySelector(
                            anchor.getAttribute(
                                "href"
                            )
                        );

                    if (target) {

                        target.scrollIntoView(
                            {
                                behavior:
                                    "smooth",
                                block:
                                    "start"
                            }
                        );
                    }
                }
            );
        });

    /* =====================================
       Fake Particles
    ===================================== */
    const particles =
        document.getElementById(
            "particles"
        );

    if (particles) {

        for (
            let i = 0;
            i < 100;
            i++
        ) {

            const dot =
                document
                    .createElement(
                        "div"
                    );

            dot.style.position =
                "absolute";

            dot.style.width =
                "2px";

            dot.style.height =
                "2px";

            dot.style.background =
                "white";

            dot.style.opacity =
                ".3";

            dot.style.left =
                Math.random() *
                    100 +
                "%";

            dot.style.top =
                Math.random() *
                    100 +
                "%";

            dot.animate(
                [
                    {
                        transform:
                            "translateY(0)"
                    },
                    {
                        transform:
                            "translateY(-100px)"
                    }
                ],
                {
                    duration:
                        3000 +
                        Math.random() *
                            6000,

                    iterations:
                        Infinity
                }
            );

            particles.appendChild(
                dot
            );
        }
    }

    /* =====================================
       Floating Action Button
    ===================================== */
    const fab =
        document.querySelector(
            ".fab"
        );

    if (fab) {

        fab.addEventListener(
            "click",
            () => {

                showToast(
                    "Support: mahesh@gmail.com"
                );

            }
        );
    }

    console.log(
        "Premium Privacy Policy Website Loaded"
    );
});

/* =====================================
   FAQ SEARCH FILTER (SMART)
===================================== */

const faqSearchInput = document.getElementById("faqSearchInput");
const faqItems = document.querySelectorAll(".faq-item");

if (faqSearchInput) {
    faqSearchInput.addEventListener("input", (e) => {

        const value = e.target.value.toLowerCase();

        faqItems.forEach(item => {

            const text = item.innerText.toLowerCase();

            if (text.includes(value)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });
}

/* AUTO OPEN FIRST FAQ */
const firstFAQ = document.querySelector(".faq-item");
if (firstFAQ) {
    firstFAQ.classList.add("active");
}




document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const btn = item.querySelector(".faq-question");

        btn.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach(i => i.classList.remove("active"));

            if (!isActive) {
                item.classList.add("active");
            }

        });

    });

});






















