const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./image/aprovado.png" alt="Emoji festejando" />';
const imgReprovado = '<img src="./image/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome');
    const inputNotaAtividade = document.getElementById('nota').toFixed(2);

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}


function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}






const botao = document.getElementById("botaoModoEscuro");

botao.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode"); // Alterna a classe

    // Mudar o texto do botão
    if (document.body.classList.contains("dark-mode")) {
        botao.textContent = "Desativar Modo Escuro";
    } else {
        botao.textContent = "Ativar Modo Escuro";
    }
});