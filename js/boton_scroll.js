export default function scrollTopButton(btn) {
    const $scrollBtn = document.querySelector(btn);



    window.addEventListener("scroll", e => {
        if (document.documentElement.scrollTop > 100) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");

        }

    });

    document.addEventListener("click", e => {
        if (e.target.matches(btn)) {
             document.documentElement.scrollTop = 0;
        }

    });
}