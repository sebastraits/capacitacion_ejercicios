export default function networkStatus() {



    const IsOnline = () => {
        const $div = document.createElement("div");

        if (navigator.onLine) {
            $div.textContent = "Coneccion Reestablecida";
            $div.classList.add("online");
        } else {
            $div.textContent = "Coneccion Perdida";
            $div.classList.add("offline");
        }

        document.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => {
            document.body.removeChild($div);
        }, 2000);

    }
    window.addEventListener("online", e => IsOnline());
    window.addEventListener("offline", e => IsOnline());
}