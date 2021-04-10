export default function slider() {

    const $nextBtn = document.querySelector(".slider-btns .next"),
        $prevBtn = document.querySelector(".slider-btns .prev"),
        $slides = document.querySelectorAll(".slider-slide");
    let i = 0;


    document.addEventListener("click",
        e => {
            

            function verificarUnidades() {
                if (i == -1) {
                    i = $slides.length - 1;
                }

                if (i == $slides.length) {
                    i = 0;
                }
            }

            if (e.target === $nextBtn) {

                e.preventDefault();
                $slides[i].classList.remove("active");
                i++;
                verificarUnidades();
                $slides[i].classList.add("active");
            }

            if (e.target === $prevBtn) {
                e.preventDefault();
                $slides[i].classList.remove("active");
                i--;
                verificarUnidades();
                $slides[i].classList.add("active");
            }


        })
}