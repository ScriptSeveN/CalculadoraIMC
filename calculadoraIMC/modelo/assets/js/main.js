const form = document.getElementById('form');
const resultText = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pesoUser = getPeso();
    const alturaUser = getAltura();
    const imc = calcIMC(pesoUser, alturaUser);
    getImcCategory(imc);
});

function createResult(msg, color) {  
    resultText.innerHTML = '';
    const paragrafResut = document.createElement('p');
    resultText.appendChild(paragrafResut);
    paragrafResut.innerHTML = `${msg}`;
    
    if(color) {
        resultText.style.background = '#1F7D35';
        resultText.style.color = '#FFFFFF';
        resultText.style.padding = '1px';
        resultText.style.textAlign = 'center';
        resultText.style.borderRadius = '3px';
    } else {
        resultText.style.background = '#FF0000';
        resultText.style.color = '#FFFFFF';
        resultText.style.padding = '1px';
        resultText.style.textAlign = 'center';
        resultText.style.borderRadius = '3px';
    }
}

function getPeso() {
    let pesoValue = document.getElementById('peso').value;
    
    pesoValue = Number(pesoValue);
    
    if(isNaN(pesoValue)) {
        createResult('Valor do peso Invalido', false);
        return 'ERR INVALID PESO';
    } else if(pesoValue === undefined) {
        createResult('Valor do peso é Indefinido', false);
        return 'ERR INVALID UNDEFINED';
    } else if(pesoValue === 0) {
        createResult('Valor do peso é Indefinido', false);
        return 'ERR INVALID UNDEFINED';
    }
    return pesoValue;
}

function getAltura() {
    let alturaValue = document.getElementById('altura').value;
    
    alturaValue = Number(alturaValue);
    
    if(isNaN(alturaValue)) {
        createResult('Valor da Altura Inválida', false);
        return 'ERR INVALID ALTURA';
    } else if(alturaValue === undefined) {
        createResult('Valor da Altura é Indefinido', false);
        return 0;
    } else if(alturaValue === 0) {
        createResult('Valor da Altura é Indefinido', false);
        return 0;
    }
    return alturaValue;
}

function calcIMC(peso, altura) {  
    let imc = peso / (altura**2);
    return imc.toFixed(2);
}

function getImcCategory(imc) { 
    let textResult; 

    if(imc < 18.5) {
        textResult = `Se IMC é ${imc}, você está magro`;
        createResult(textResult, true);
    } else if(imc >= 18.5 && imc <= 24.9) {
        textResult = `Se IMC é ${imc}, você está Normal, dentro do peso`;
        createResult(textResult, true);
    } else if(imc >= 25 && imc <= 29.9) {
        textResult = `Se IMC é ${imc}, você está com sobre peso, se cuide melhor`;
        createResult(textResult, true);
    } else if(imc >= 30 && imc <= 39.9) {
        textResult = `Se IMC é ${imc}, você está com Obesidade, Procure urgentemente se cuidar`;
        createResult(textResult, true);
    } else if (imc >= 40) {
        textResult = `Se IMC é ${imc}, você está com Obesidade GRAVE, PROCURE AJUDA AGORA!`;
        createResult(textResult, true);
    }
}
