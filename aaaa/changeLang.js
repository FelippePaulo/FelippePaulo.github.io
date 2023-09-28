document.addEventListener('DOMContentLoaded', function() {
    const languageSwitch = document.getElementById('languageSwitch');
    const ptbrText = document.getElementById('ptbr');
    const engText = document.getElementById('eng');
    const testeLingua = document.querySelector('.mainTitle p:nth-child(3)');
    const title = document.querySelector('.mainTitle h1');

    
    function updateText(lang) {
        testeLingua.textContent = lang['linguagem'];
        title.textContent = lang['linguagem'];
    }

    languageSwitch.addEventListener('change', function() {
        if (this.checked) {
            updateText({ "linguagem": "em portugues" } );
        } else {
            updateText({ "linguagem": "em ingles" });
        }
    });
});
