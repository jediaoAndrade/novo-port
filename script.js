let areatexto=document.getElementById("texto");

function html(){
     areatexto.innerHTML = `<div style="text-align:center; ">
    <span style="color:rgb(214, 142, 7) ;letter-spacing:2px;"> HTML :</span> é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. 
    </div>`;
}
function css() {
  areatexto.innerHTML = `<div style="text-align:center;">
    <span style="color:rgb(5, 44, 151) ;"> CSS:</span> Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. 
    </div>`;
}

function php() {
  areatexto.innerHTML = `<div style="text-align:center;">
     <span style="color: #21123d; font-weight:bold;letter-spacing:2px; font-size:25px;"> PHP: </span> é uma linguagem de programação voltada para o desenvolvimento de aplicações para a web e para criar sites, favorecendo a conexão entre os servidores e a interface do usuário. 
    </div>`;
}

function js() {
  areatexto.innerHTML = `<div style="text-align:center;">
    <span style="color: rgb(214, 142, 7);"> JavaScript :</span> é uma linguagem de programação que permite a você implementar itens complexos em páginas web toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos animados.
    </div>`;
}

