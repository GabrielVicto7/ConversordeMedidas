document.addEventListener("DOMContentLoaded", function() {
  inicia();
});

function inicia() {
  var SeleçãoMédida = document.getElementById("MédidasID");
  var SeleçãoUNIger_1 = document.getElementById("SelectGenericoID_1");
  var SeleçãoUNIger_2 = document.getElementById("SelectGenericoID_2");
  var ValorINPUT = document.getElementById("ValorInserido");
  var Resultado = document.getElementById("ResultadoDIV");
  var UNITXT_1 = document.getElementById("NomeUnidade_1");
  var UNITXT_2 = document.getElementById("NomeUnidade_2");
  var SeleçãoUNIcom_1 = document.getElementById("SelectComprimentoID_1");
  var SeleçãoUNIcom_2 = document.getElementById("SelectComprimentoID_2");
  var SeleçãoUNIcom_2DIV = document.getElementById("SelectComprimentoID_2DIVs");
  var Gambiarra = document.getElementById("Gambiarra");
  var SeleçãoUNIvol_1 = document.getElementById("SelectVolumeID_1");
  var SeleçãoUNIvol_2 = document.getElementById("SelectVolumeID_2");
  var SeleçãoUNIvol_2DIV = document.getElementById("SelectVolumeID_2DIVs");
  var SeleçãoUNIare_1 = document.getElementById("SelectÁreaID_1");
  var SeleçãoUNIare_2 = document.getElementById("SelectÁreaID_2");
  var SeleçãoUNIare_2DIV = document.getElementById("SelectÁreaID_2DIVs");
  var ERRO = document.getElementById("TXT_ERRO");
  const metro = 1;
  const quilometro = 0.001;
  const hectometro = 0.01;
  const decametro = 0.1;
  const decimetro = 10;
  const centimetro = 100;
  const milimetro = 1000;

  SeleçãoMédida.addEventListener("change", function(){
    if(SeleçãoMédida.value === "Comprimento"){
      ValorINPUT.disabled = false;
      ValorINPUT.value = " ";
      Resultado.innerHTML = "Resultado";
      Resultado.style.color = "black";
      SeleçãoUNIcom_1.style.display = "block";
      SeleçãoUNIcom_2.style.display = "block";
      SeleçãoUNIger_1.style.display = "none";
      SeleçãoUNIger_2.style.display = 'none';
      SeleçãoUNIvol_1.style.display = "none";
      SeleçãoUNIvol_2.style.display = "none";
      SeleçãoUNIare_1.style.display = "none";
      SeleçãoUNIare_2.style.display = "none";
      Gambiarra.style.left = 19.2 + "%";
      SeleçãoUNIcom_2DIV.style.left = 22.4 + "%";
      UNITXT_1.innerHTML = "m";
      UNITXT_2.innerHTML = "m";
      UNITXT_1.style.paddingLeft = 50 + "px";
      UNITXT_2.style.paddingLeft = 40 + "px";
      SeleçãoUNIcom_1.addEventListener("change",function(){
        UNITXT_1.innerHTML = SeleçãoUNIcom_1.value;
        UNITXT_1.style.paddingLeft = 45 + "px";
        ValorINPUT.value = " ";
        Resultado.innerHTML = "Resultado";
      })

      SeleçãoUNIcom_2.addEventListener("change",function(){
        UNITXT_2.innerHTML = SeleçãoUNIcom_2.value;
        UNITXT_2.style.paddingLeft = 35 + "px";
        ValorINPUT.value = " ";
        Resultado.innerHTML = "Resultado";
      })
    } else if(SeleçãoMédida.value === ""){
      ValorINPUT.value = " ";
      Resultado.innerHTML = "Resultado";
      Resultado.style.color = "gray";
      ValorINPUT.disabled = false;
      SeleçãoUNIcom_1.style.display = "none";
      SeleçãoUNIcom_2.style.display = "none";
      SeleçãoUNIger_1.style.display = "block";
      SeleçãoUNIger_2.style.display = 'block';
      SeleçãoUNIvol_1.style.display = "none";
      SeleçãoUNIvol_2.style.display = "none";
      SeleçãoUNIare_1.style.display = "none";
      SeleçãoUNIare_2.style.display = "none";
      Gambiarra.style.left = 16.2+ "%";
      UNITXT_1.innerHTML = "UNIDADE 1";
      UNITXT_2.innerHTML = "UNIDADE 2";
      UNITXT_1.style.paddingLeft = 12.4 + "px";
      UNITXT_2.style.paddingLeft = 0 + "px";
      ValorINPUT.value = " ";
      ValorINPUT.disabled = true;
      Resultado.innerHTML = "Resultado";
    } else if(SeleçãoMédida.value === "Volume"){
      ValorINPUT.value = " ";
      Resultado.innerHTML = "Resultado";
      ValorINPUT.disabled = false;
      Resultado.style.color = "black";
      SeleçãoUNIvol_1.style.display = "block";
      SeleçãoUNIvol_2.style.display = "block";
      SeleçãoUNIger_1.style.display = "none";
      SeleçãoUNIger_2.style.display = 'none';
      SeleçãoUNIcom_1.style.display = "none";
      SeleçãoUNIcom_2.style.display = "none";
      SeleçãoUNIare_1.style.display = "none";
      SeleçãoUNIare_2.style.display = "none";
      Gambiarra.style.left = 22.6 + "%";
      SeleçãoUNIvol_2DIV.style.left = 26 + "%";
      UNITXT_1.innerHTML = "m³";
      UNITXT_2.innerHTML = "m³";
      UNITXT_1.style.paddingLeft = 50 + "px";
      UNITXT_2.style.paddingLeft = 40 + "px";
      SeleçãoUNIvol_1.addEventListener("change",function(){
        UNITXT_1.innerHTML = SeleçãoUNIvol_1.value;
        UNITXT_1.style.paddingLeft = 45 + "px";
        ValorINPUT.value = " ";
        Resultado.innerHTML = "Resultado";
      })

      SeleçãoUNIvol_2.addEventListener("change",function(){
        UNITXT_2.innerHTML = SeleçãoUNIvol_2.value;
        UNITXT_2.style.paddingLeft = 35 + "px";
        ValorINPUT.value = " ";
        Resultado.innerHTML = "Resultado";
      })
    } else if(SeleçãoMédida.value === "Área"){
      ValorINPUT.value = " ";
      ValorINPUT.disabled = false;
      Resultado.innerHTML = "Resultado";
      Resultado.style.color = "black";
      SeleçãoUNIvol_1.style.display = "none";
      SeleçãoUNIvol_2.style.display = "none";
      SeleçãoUNIger_1.style.display = "none";
      SeleçãoUNIger_2.style.display = 'none';
      SeleçãoUNIcom_1.style.display = "none";
      SeleçãoUNIcom_2.style.display = "none";
      SeleçãoUNIare_1.style.display = "block";
      SeleçãoUNIare_2.style.display = "block";
      Gambiarra.style.left = 24.2 + "%";
      SeleçãoUNIare_2DIV.style.left = 27.6 + "%";
      UNITXT_1.innerHTML = "m²";
      UNITXT_2.innerHTML = "m²";
      UNITXT_1.style.paddingLeft = 50 + "px";
      UNITXT_2.style.paddingLeft = 40 + "px";
      SeleçãoUNIare_1.addEventListener("change",function(){
        UNITXT_1.innerHTML = SeleçãoUNIare_1.value;
        UNITXT_1.style.paddingLeft = 45 + "px";
        ValorINPUT.value = " ";
        Resultado.innerHTML = "Resultado";
      })

      SeleçãoUNIare_2.addEventListener("change",function(){
        UNITXT_2.innerHTML = SeleçãoUNIare_2.value;
        UNITXT_2.style.paddingLeft = 35 + "px";
        ValorINPUT.value = " ";
        Resultado.innerHTML = "Resultado";
      })
    }
  })


  ValorINPUT.addEventListener("input", function(){
    if ((ValorINPUT.value < 0) && (SeleçãoMédida.value === "Comprimento" || SeleçãoMédida.value === "Volume" || SeleçãoMédida.value === "Área")){
      ERRO.style.display = "block";
      Resultado.innerHTML = "Resultado";
    } else {
      ERRO.style.display = "none";
      if (SeleçãoMédida.value === "Comprimento"){
        var Valor;
        Resultado.innerHTML = "Resultado";
        if(SeleçãoUNIcom_1.value === "cm"){
          Valor = ValorINPUT.value / 100;
        } else if (SeleçãoUNIcom_1.value === "dm"){
          Valor = ValorINPUT.value / 10;
        } else if (SeleçãoUNIcom_1.value === "mm"){
          Valor = ValorINPUT.value / 1000;
        } else if (SeleçãoUNIcom_1.value === "m"){
          Valor = ValorINPUT.value / 1;
        } else if (SeleçãoUNIcom_1.value === "dam"){
          Valor = ValorINPUT.value * 10;
        } else if (SeleçãoUNIcom_1.value === "hm"){
          Valor = ValorINPUT.value * 100;
        } else if (SeleçãoUNIcom_1.value === "km"){
          Valor = ValorINPUT.value * 1000;
        }

        if(SeleçãoUNIcom_2.value === "cm"){
          Valor = Valor * centimetro;
        } else if(SeleçãoUNIcom_2.value === "dm"){
          Valor = Valor * decimetro;
        } else if(SeleçãoUNIcom_2.value === "m"){
          Valor = Valor * metro;
        } else if(SeleçãoUNIcom_2.value === "mm"){
          Valor = Valor * milimetro;
        } else if(SeleçãoUNIcom_2.value === "dam"){
          Valor = Valor * decametro;
        } else if(SeleçãoUNIcom_2.value === "hm"){
          Valor = Valor * hectometro;
        } else if(SeleçãoUNIcom_2.value === "km"){
          Valor = Valor * quilometro;
        }
        Resultado.innerHTML = Valor;
      } else if (SeleçãoMédida.value === "Volume"){
        var Valor;
        Resultado.innerHTML = "Resultado";
        if(SeleçãoUNIvol_1.value === "cm³"){
          Valor = ValorINPUT.value / 1000000;
        } else if (SeleçãoUNIvol_1.value === "dm³"){
          Valor = ValorINPUT.value / 1000;
        } else if (SeleçãoUNIvol_1.value === "m³"){
          Valor = ValorINPUT.value / 1;
        } else if (SeleçãoUNIvol_1.value === "dam³"){
          Valor = ValorINPUT.value * 1000;
        } else if (SeleçãoUNIvol_1.value === "hm³"){
          Valor = ValorINPUT.value * 1000000;
        } else if (SeleçãoUNIvol_1.value === "km³"){
          Valor = ValorINPUT.value * 1000000000;
        } else if (SeleçãoUNIvol_1.value === "l"){
          Valor = ValorINPUT.value / 1000;
        } else if (SeleçãoUNIvol_1.value === "ml"){
          Valor = ValorINPUT.value / 1000000;
        }

        if(SeleçãoUNIvol_2.value === "cm³"){
          Valor = Valor * 1000000;
        } else if(SeleçãoUNIvol_2.value === "dm³"){
          Valor = Valor * 1000;
        } else if(SeleçãoUNIvol_2.value === "m³"){
          Valor = Valor * 1;
        } else if(SeleçãoUNIvol_2.value === "dam³"){
          Valor = Valor * 0.001;
        } else if(SeleçãoUNIvol_2.value === "hm³"){
          Valor = Valor * 0.000001;
        } else if(SeleçãoUNIvol_2.value === "km³"){
          Valor = Valor * 0.000000001;
        } else if(SeleçãoUNIvol_2.value === "ml"){
          Valor = ValorINPUT.value * 1000000;
        } else if(SeleçãoUNIvol_2.value === "l"){
          Valor = ValorINPUT.value * 1000;
        }
        Resultado.innerHTML = Valor;
      } else if (SeleçãoMédida.value === "Área"){
        var Valor;
        Resultado.innerHTML = "Resultado";
        if(SeleçãoUNIare_1.value === "cm²"){
          Valor = ValorINPUT.value / 10000;
        } else if (SeleçãoUNIare_1.value === "dm²"){
          Valor = ValorINPUT.value / 100;
        } else if (SeleçãoUNIare_1.value === "m²"){
          Valor = ValorINPUT.value / 1;
        } else if (SeleçãoUNIare_1.value === "dam²"){
          Valor = ValorINPUT.value * 100;
        } else if (SeleçãoUNIare_1.value === "hm²"){
          Valor = ValorINPUT.value * 10000;
        } else if (SeleçãoUNIare_1.value === "km²"){
          Valor = ValorINPUT.value * 1000000;
        }

        if(SeleçãoUNIare_2.value === "cm²"){
          Valor = Valor * 10000;
        } else if(SeleçãoUNIare_2.value === "dm²"){
          Valor = Valor * 100;
        } else if(SeleçãoUNIare_2.value === "m²"){
          Valor = Valor * 1;
        } else if(SeleçãoUNIare_2.value === "dam²"){
          Valor = Valor * 0.01;
        } else if(SeleçãoUNIare_2.value === "hm²"){
          Valor = Valor * 0.0001;
        } else if(SeleçãoUNIare_2.value === "km²"){
          Valor = Valor * 0.000001;
        }
        Resultado.innerHTML = Valor;
      }
    }
  });
}
