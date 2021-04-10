export default function activeDarkMode(btn) {

    const $myBtn = document.querySelector(btn);

    document.addEventListener("click", e => {
        if (e.target.matches(".sun")) {
            document.querySelector(".moon").classList.remove("hidden");
            document.querySelector(".sun").classList.add("hidden");
            document.querySelector("body").classList.remove("oscurecer");
            localStorage.setItem("theme", "sun")

        }

        if (e.target.matches(".moon")) {
            document.querySelector(".moon").classList.add("hidden");
            document.querySelector(".sun").classList.remove("hidden");
            document.querySelector("body").classList.add("oscurecer");
            localStorage.setItem("theme", "moon")


        }

    })
}