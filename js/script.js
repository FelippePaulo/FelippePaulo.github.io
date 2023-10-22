document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sobreBtn').addEventListener('click', function() {
        document.getElementById('conteudoSobre').style.display = 'block';
        document.getElementById('conteudoContato').style.display = 'none';

        document.getElementById('botaoRetorna').style.display = 'block';

        document.getElementById('section-mainTitle').style.display = 'none';
        document.getElementById('section-conteudo').style.display = 'none';
        document.getElementById('section-buttonsLink').style.display = 'none';
    });

    document.getElementById('contatoBtn').addEventListener('click', function() {
        document.getElementById('conteudoContato').style.display = 'block';
        document.getElementById('conteudoSobre').style.display = 'none';

        document.getElementById('botaoRetorna').style.display = 'block';

        document.getElementById('section-mainTitle').style.display = 'none';
        document.getElementById('section-conteudo').style.display = 'none';
        document.getElementById('section-buttonsLink').style.display = 'none';
    });

    document.getElementById('botaoRetorna').addEventListener('click', function() {
        document.getElementById('conteudoContato').style.display = 'none';
        document.getElementById('conteudoSobre').style.display = 'none';

        document.getElementById('botaoRetorna').style.display = 'none';

        document.getElementById('section-mainTitle').style.display = 'block';
        document.getElementById('section-conteudo').style.display = 'flex';
        document.getElementById('section-buttonsLink').style.display = 'flex';
    });

    setTimeout(function() {
    let divEntrance = document.querySelector("#entrance");
    let divApresentacao = document.querySelector("#apresentacao");
    

    divEntrance.style.transition = "opacity 1s ease-in-out";
    divApresentacao.style.transition = "opacity 1s ease-in-out";

    divEntrance.style.opacity = "0.95";
    

    setTimeout(function() {
        divApresentacao.style.opacity = "0.95";

        let buttonsIntel = document.querySelectorAll(".buttons-intel div");
        buttonsIntel.forEach(function(button, index) {
            button.style.transition = "opacity 0.5s ease-in-out";
            setTimeout(function() {
                button.style.opacity = "0.95";
            }, index * 200); // Atraso de 200ms entre cada botão
        });

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


