"use strict"
// Отправка формы на почту
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0){
            let response = await fetch('./assets/php/mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset(); //очистка формы после отправки
            } else {
                alert("Ошибка")
            }
        } else {
            document.querySelector('.status_cart').innerText = " Будь ласка, заповніть усі поля";
            document.querySelector('.status_cart').style.backgroundColor = "#f5040a";
            document.querySelector('.status_cart').style.color = "white";
        }
    }
// Проверка заполнения обязательных полей
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_phone')) {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function phoneTest(input) {
        return !/^\+?[\d]{12}$/.test(input.value);
    }

});