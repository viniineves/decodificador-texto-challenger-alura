function criptografar(){
    let textoDigitado = document.querySelector('#inserir_texto_area').value;

    let textoCriptografar = textoDigitado
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'obter')
        .replace(/u/g, 'ufat');
    
    let textoResultado = document.querySelector('#area_resultado_input');
    textoResultado.value = textoCriptografar;

    textoCriptografar = document.querySelector('#inserir_texto_area').value = '';
    
    document.querySelector('.area_resultado_final').style.display = 'block';
    document.querySelector('.area_resultado_mensagem').style.display = 'none';
    
}

function descriptografar(){
    let textoDigitado = document.querySelector('#inserir_texto_area').value;
    let textoDecriptar = textoDigitado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/obter/g, 'o')
        .replace(/ufat/g, 'u');

    let textoResultado = document.querySelector('#area_resultado_input');
    textoResultado.value = textoDecriptar;

    textoDecriptar = document.querySelector('#inserir_texto_area').value = '';

    document.querySelector('.area_resultado_final').style.display = 'block';
    document.querySelector('.area_resultado_mensagem').style.display ='none';
}

function copiar(){
    let copiarTexto = document.querySelector('#area_resultado_input');
    navigator.clipboard.writeText(copiarTexto.value);

    copiarTexto = document.querySelector('#area_resultado_input').value = '';
}
