export default function validarFormulario() {


    window.addEventListener("focusin", e => {
        if (e.target.className == "inputform") {
            let $id = e.target.id;
            if ($id == "inputform4") {

                document.getElementById($id).innerText = ``;
            } else {
                document.getElementById($id).setAttribute("value", "")
            }
        }

    })

    window.addEventListener("focusout", e => {
        if (e.target.className == "inputform") {
            let $id = e.target.id;
            if ($id == "inputform4" && document.getElementById($id).innerText == ``) {
                document.getElementById($id).innerText = `Comentarios`;
            }

            if ($id == "inputform3" && document.getElementById($id).getAttribute("value") == "") {
                document.getElementById($id).setAttribute("value", "Asunto a tratar")
            }

            if ($id == "inputform2" && document.getElementById($id).getAttribute("value") == "") {
                document.getElementById($id).setAttribute("value", "Ingrese su Email")
            }

            if ($id == "inputform1" && document.getElementById($id).getAttribute("value") == "") {
                document.getElementById($id).setAttribute("value", "Escribe tu nombre")

            }

        }
    })

    window.addEventListener("keyup", e => {
        let $id = e.target.id;
        if ($id == "inputform1") {
            let expReg = /^[a-z ,.'-]+$/i;

            if (expReg.test(document.getElementById($id).value)) {
                document.getElementById("nombreinvalido").classList.remove("textareaforminvalid")
            } else {
                document.getElementById("nombreinvalido").classList.add("textareaforminvalid")
            }
        }

        if ($id == "inputform2") {
            let expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

            if (expReg.test(document.getElementById($id).value)) {
                document.getElementById("emailinvalido").classList.remove("textareaforminvalid")
            } else {
                document.getElementById("emailinvalido").classList.add("textareaforminvalid")
            }
        }









    })

}