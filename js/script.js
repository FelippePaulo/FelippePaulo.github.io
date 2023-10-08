document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
    let divEntrance = document.querySelector("#entrance");
    let divApresentacao = document.querySelector("#apresentacao");

    divEntrance.style.transition = "opacity 1s ease-in-out";
    divApresentacao.style.transition = "opacity 1s ease-in-out";

    divEntrance.style.opacity = "0.95";
    

    setTimeout(function() {
        divApresentacao.style.opacity = "0.95";
        let buttons = document.querySelectorAll(".buttons-link div");
        buttons.forEach(function(button, index) {
            button.style.transition = "opacity 0.5s ease-in-out";
            setTimeout(function() {
                button.style.opacity = "1";
            }, index * 200); // Atraso de 200ms entre cada botão
        });
    }, 1000); // Atraso de 1 segundo antes de mostrar os botões
}, 1000); // Atraso de 1 segundo antes de mostrar entrance e apresentacao
});
