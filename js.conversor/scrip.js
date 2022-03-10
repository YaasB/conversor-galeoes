function Converter() {
    var valorElemento = document.getElementById("valorGaleoes");
    var valor = valorElemento.value;
  
    // Dolar //
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmDolarConvertido = valorEmDolarNumerico * 25;
  
    // Real //
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmRealConvertido = valorEmRealNumerico * 125;
  
    var elementoValorConvertidoDolar = document.getElementById(
      "valorConvertidoEmDolar"
    );
    var elementoValorConvertidoReal = document.getElementById(
      "valorConvertidoEmReal"
    );
  
    var valorConvertidoDolar = `Valor em Dolar: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorEmDolarConvertido)}`
    elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;

    var valorConvertidoReal = `Valor em Real: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorEmRealConvertido)}`
    elementoValorConvertidoReal.innerHTML = valorConvertidoReal;





console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// expected output: "123.456,79 €"

  }