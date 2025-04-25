<script setup>

</script>

<template>
  <body class="corpo">
    <header>
      <a href="#"><span class="conteudo1">IFBooks</span> <span class="conteudo2">Apreço a leitura</span></a>

      <form>
        <input type="text" placeholder="Pesquisar" />
      </form>

      <nav>
        <ul>
          <li>
            <button class="nave">Termos</button>
          </li>
          <li>
            <button class="nave">Equipe</button>
          </li>
          <li>
            <button class="nave">Envio</button>
          </li>
          <li>
            <button class="nave">Devoluções</button>
          </li>
        </ul>
      </nav>
        <ul>
          <li>
            <button class="icon"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
          </li>
          <li>
            <button class="icon" id="coracao"><font-awesome-icon icon="fa-solid fa-heart" /></button>
          </li>
          <li>
            <button class="icon"><font-awesome-icon icon="fa-solid fa-user" /></button>
          </li>
        </ul>
    </header>
    <main>
    <section class="lancamentos">
  <div>
  <p class="verde">Autor de Abril</p>

  <h1>Eric-Emanuel Schmitt </h1>

  <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>

  < button>Acessar página do livro</button>

</div>
  <img src="/public/Schmitt_Nocognia_3D_500pcx 1.png" alt="livro">

</section>
    </main>
  </body>
</template>

<style scoped>
/*////////
Css do Header (Gustavo)
////////*/
body.corpo {
  background-color: white;
}
header {
  display: flex;
  padding: 3vh 8vw 1.4vw 8vw;
  flex-direction: row;
  border-bottom: #27ae60 solid 2px;
  font-size: 1.1rem;
  justify-content: space-around;
}
header nav ul {
  display: flex;
}
header ul{
  display: flex;
}
header a{
  display: flex;
}
.conteudo1{
  color: #231f2d;
  font-weight: bolder;
  margin: 0.4vw 0.2vw 0 0;
}
.conteudo2{
  color: transparent;
  position: relative;
}
.conteudo2::before{
  content: "apreço a \A leitura";
  color: #27ae60;
  border-left: #27ae60 solid 2px;
  padding-left: 0.156vw;
  white-space: pre-line;
  position: absolute;
  left: 0;
  top: 0;
}
header form input{
  color: #b8b8b8;
  background-color: #f1f1f1;
  border: none;
  width: 19.586vw;
  height: 3.605vh;
  background-image: url(/public/images/magnifying-glass-solid.svg);
  background-repeat: no-repeat;
  background-position: 17.9vw;
  background-size: 1.042vw 2vh;
  padding: 0 0 0 1vw;
  margin: 0.2vw 0 0 0;
}
header button{
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin: 0.4vw;
  color: #7b7881;
  font-size: 1.1rem;
}
.nave{
  padding: 0 1vw;
}
.icon{
  color: #27ae60;
  padding: 0 1vw 0 1vw;
}
#coracao{
  border-left: #27ae60 solid 2px;
  border-right: #27ae60 solid 2px;
}
header nav button{
  padding: 0 0.5vw;
}

 /*//////////////Gianluca-livro em destaque////////////////////////////////////////////////////////////////*/

  section.lancamentos{
    display: flex;
    font-size: 0.4rem;

  }

  .lancamentos div{
    margin: 8vw 8vw 8vw 20vw;

  }
  .lancamentos p{
    width: 29vw;
    padding: 1vw 0;
    font-size: 0.5rem;
    margin-bottom: 1vw;

  }
  .lancamentos div p.verde{
    color: #27AE60;
    border: #27AE60 solid 1px;
    width: 6vw;
    border-radius: 0.3vw;
    padding: 0.4vw 0 0.4vw 0.5vw;
    font-size: 0.5rem;


  }
  .lancamentos img{
    width: 25vw;
  }
  .lancamentos button{
    font-size: 0.5rem;
    color: white;
    background-color: #27AE60;
    border: none;
    border-radius: 0.2vw;
    padding: 1vw;
    cursor: pointer;
  }
  .lancamentos h1{
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
