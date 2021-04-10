(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {


        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status >= 200 && xhr.status < 300) {
            let Json = JSON.parse(xhr.responseText);
            Json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $xhr.appendChild($fragment)

        } else {

            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `error ${xhr.status} - ${message}`
        }
        // console.log(xhr)

    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.send();


})();


(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(res)
        })
        .then(Json => {
            Json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $fetch.appendChild($fragment)
            // $fetch.innerHTML = json;
        })
        .catch(err => {
            console.log("Estamos en el catch", err);
            let message = err.statusText || "Ocurrio un error"
            $fetch.innerHTML = `Error ${err.status}: ${message}`
        }).finally(() => {
            console.log("Esto se ejecuta siempre")
        });

})();

(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();
            if (!res.ok) {
                throw {
                    status: res.status,
                    statusText: res.statusText
                }

            }
            // console.log(res, json)
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $fetchAsync.appendChild($fragment)

        } catch (error) {
            let message = error.statusText || "Ocurrio un error"
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`
        } finally {}
    }
    getData();
})();

(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            res.data.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $axios.appendChild($fragment)
        })
        .catch(err => {
            let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            // console.log("Axios, esto se ejecuta siempre")
        });
})();


(() => {
    const $axiosasync = document.getElementById("axiosasync"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            json = await res.data
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $axiosasync.appendChild($fragment)

        } catch (error) {
            let message = error.response.statusText || "Ocurrio un error";
            $axiosasync.innerHTML = `Error ${error.response.status}: ${message}`;
        } finally {
            console.log("axiosasynct, esto se ejecuta siempre")
        }

    }

    getData();
})();