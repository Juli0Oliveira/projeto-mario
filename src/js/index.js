//OBJETIVO 1 - quando o usuário clicar na botão de ver trailer, 
//console.log('mostra o document',document);/* console: objeto, .log:metodo ; (document): função/variavel */
// passo 1 -dar um jeito de pegar o elementoo que representa o botão na tela usando o js 

    const botaoTrailer = document.querySelector(".botao-trailer");
    console.log("botaoTrailer", botaoTrailer);
    const video = document.getElementById("video");
    const modal = document.querySelector(".modal");
    const linkDoVideo = video.src;
// - passo 2 - dar uma jeito de indentificar quando o usuário clicar no botão 

    botaoTrailer.addEventListener("click",( ) =>{
        console.log("clicou no botão veja o trailer");
        // - passo 4 -  abrir o modal na tela
        modal.classList.add("aberto");
        video.setAttribute("src",linkDoVideo);
    } );

// - passo 3 - dar um jeito de pegar o elemento da modal no js 
    
    console.log("mostra o objeto da modal", modal);

// OBJETIVO 2 -  quando o usuário clicar no X devemos fechar a modal.
// passo 1 - dar um jeito de pegar o elemento de fecha modal usndo js 
    const botaoFecharModal = document.querySelector(".fechar-modal");
    console.log("botaoFecharModal", botaoFecharModal);

// passo 2 - dar um jeito de identificar quando o usuário clicar no X
    botaoFecharModal.addEventListener("click",( ) =>{
    console.log("clicou no botão fecha modal");
    // passo 3 - fechar modal 
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
    } );
    
    

   

  