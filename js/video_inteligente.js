export default function smartVideo() {
    const $videos = document.querySelectorAll("video[data-smart-video]");

    const cb = (entries) => {

        entries.forEach(entry => {
            window.addEventListener("visibilitychange", e => {
                if (document.visibilityState === "visible") {
                    entry.target.play();

                } else {
                    entry.target.pause();
                }

            })



            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }



        });

    };

    const observer = new IntersectionObserver(cb, {
        threshold: 0.5
    })

    $videos.forEach(el => observer.observe(el))


}