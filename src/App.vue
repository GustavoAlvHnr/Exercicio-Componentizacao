<script setup>

import { ref, computed } from 'vue';


const listaLivros = ref([
 { nome: 'Chain of Iron: Volume 2',
   imagem: '/public/image1.png',
   autor: 'Cassandra Clare',
   preco: 23.24,

},
 { nome: 'Chain of Thorns',
  imagem: '/public/image2.png',
  autor: 'Cassandra Clare',
  preco: 23.24,
  curtidas: 'fa-regular fa-heart',

 },
 { nome: 'City of Fallen Angels',
   imagem: '/public/image3.png',
   autor: 'Cassandra Clare',
   preco: 13.94,
   curtidas: 'fa-regular fa-heart',


 },
 { nome: 'Nona the Ninth',
   imagem: '/public/image4.png',
   autor: 'Cassandra Clare',
   preco: 16.84,
   curtidas: 'fa-regular fa-heart',


 },
 { nome: 'Harlem Shuffle',
   imagem: '/public/image5.png',
   autor: 'Colson Whitehead',
   preco: 26.92,



 },
 { nome: 'Two Old Women',
   imagem: '/public/image6.png',
   autor: 'Velma Wallis',
   preco: 13.95,
   curtidas: 'fa-regular fa-heart',


 },
 { nome: 'Carrie Soto Is Back',
   imagem: '/public/image7.png',
   autor: 'Taylor Jenkins Reid',
   preco: 26.04,
   curtidas: 'fa-regular fa-heart',


 },
 { nome: 'Book Lovers',
   imagem: '/public/image8.png',
   autor: 'Emily Henry',
   preco: 15.81,
   curtidas: 'fa-regular fa-heart',


 },


]);

let cart = ref([]);

const adicionar = (itens) => {
      cart.value.push(itens.preco);
    };


   const total = computed(() => {
      return cart.value.reduce((sum, num) => sum + num, 0);
    });

</script>

<template>
  <body class="corpo">
    <header>
      <a href="#"
        ><span class="conteudo1">IFBooks</span> <span class="conteudo2">Apreço a leitura</span></a>
      <form>
        <input type="text" placeholder="Pesquisar"/>
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
  <button>Acessar página do livro</button>
</div>
<figure>
  <img src="/public/Schmitt_Nocognia_3D_500pcx 1.png" alt="livro">
  <figcaption>
    *within the stock limit
  </figcaption>
</figure>
</section>
      <div class="icones">
        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-truck" />
            <p>Frete grátis para SC</p>
          </li>
          <li class="estrela">
            <font-awesome-icon icon="fa-solid fa-star" />
            <p>Livros recomendados</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-book-open" />
            <p>Mais vendidos</p>
          </li>
        </ul>
      </div>
      <section class="sessaoLivro">

        <h2>Lançamentos</h2>




<ul>
  <li v-for="itens in listaLivros" class="abaLivros">


    <img :src="itens.imagem" alt="livros">
    <p class="nome">{{ itens.nome }}</p>
    <p class="autor">{{ itens.autor }}</p>

    <div class="junto">
    <p class="preco">R${{ itens.preco}}</p>
    <p class="curtir"><font-awesome-icon :icon="itens.curtidas" />

</p>
    </div>


    <button @click="adicionar(itens)"><font-awesome-icon class="espaco" icon="fa-solid fa-cart-shopping"/>Comprar</button>
    <p>{{ index }}</p>


  </li>
</ul>




</section>
  <p class="teste">preco{{ cart }}</p>
  <p class="teste">{{ total }}</p>


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
header ul {
  display: flex;
}
header a {
  display: flex;
}
.conteudo1 {
  color: #231f2d;
  font-weight: bolder;
  margin: 0.4vw 0.2vw 0 0;
}
.conteudo2 {
  color: transparent;
  position: relative;
}
.conteudo2::before {
  content: 'apreço a \A leitura';
  color: #27ae60;
  border-left: #27ae60 solid 2px;
  padding-left: 0.156vw;
  white-space: pre-line;
  position: absolute;
  left: 0;
  top: 0;
}
header form input {
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
header button {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin: 0.4vw;
  color: #7b7881;
  font-size: 1.1rem;
}
.nave {
  padding: 0 1vw;
}
.icon {
  color: #27ae60;
  padding: 0 1vw 0 1vw;
}
#coracao {
  border-left: #27ae60 solid 2px;
  border-right: #27ae60 solid 2px;
}
header nav button {
  padding: 0 0.5vw;
}
/*//////////////Gianluca-livro em destaque///////////////////////////////////////////*/
section.lancamentos{
    display: flex;
    font-size: 0.4rem;
  }

  .lancamentos figure img{
    width: 26vw;
    margin-bottom: -2.9vw;
    margin-right: 13vw;
  }
  .lancamentos button{
    font-size: 1.3rem;
    color: white;
    background-color: #27AE60;
    border: none;
    border-radius: 0.2vw;
    padding: 1vw;
  }
  .lancamentos h1{
    font-weight: bold;
    font-size: 3.5rem;
    padding: 0 0 1vw 0;
    color: #382C2C;
  }
  .lancamentos figure figcaption{
    margin: 0 0 0 16vw;
    font-size: 1.5rem;
    color: #231f2d;
  }
.lancamentos div{
    margin: 5vw auto;
  }
.lancamentos p{
    width: 29vw;
    padding: 1vw 0;
    font-size: 1.3rem;
    margin-bottom: 1vw;
    line-height: 1.7vw;
    color: #4d4c4c;
  }
.lancamentos div p.verde{
    color: #27AE60;
    border: #27AE60 solid 1px;
    width: 27.5%;
    border-radius: 0.3vw;
    padding: 0.5vw 0 0.5vw 0.5vw;
    font-size: 1.3rem;
    margin-top: 3vw;
   }
/*//////////////////////////
    Div.icones (Gustavo)
//////////////////////////*/
.icones {
  border-bottom: #27ae60 2px solid;
  border-top: #27ae60 2px solid;
  padding: 3.5vw;
  color: black;
}
.icones ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 2rem;
}
.icones ul li{
  display: flex;
}
.icones ul li.estrela{
  border-left: #27ae60 2px solid;
  border-right: #27ae60 2px solid;
  padding: 0 3vw 0 3vw;
}
.icones ul li p{
  padding: 0 2vw;
}

/*//////////////////////////////Gianluca-Lista livros///////////////////////////////////////////*/


.sessaoLivro h2{
  color: #231f2d;
  margin-left: 5vw;
  padding: 3vw 0;
  font-size: 2.3rem;
  font-weight: bold;
}

.sessaoLivro ul{
   display: flex;
   justify-content: center;
   flex-wrap: wrap;


 list-style-type: none;



 }
 .sessaoLivro ul li{
   padding: 0 1vw 1vw 1vw;
   color: #231f2d;
  width: 350px;

 }
 .sessaoLivro ul img{
  height: 26.06vw;

 }
 .nome{
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1vw 0;
 }
 .autor{
  font-size: 1rem;
 padding-bottom: 1vw;
 }
 .preco{
  font-size: 1.2rem;
  font-weight: bold;
  padding-right: 10vw;
 }
 .curtir{
  font-size: 2vw;
  color: #27AE60;
  margin-bottom: -8vw;
 }
 .junto{
  display: flex;

 }
 .abaLivros button{
  background-color: #27AE60;
  color: white;
  width: 85%;
  padding: 1vw;
  font-size: 1rem;
  margin-top: 2vw;
  border: none;
  margin-bottom: 6vw;
 }
 .abaLivros .espaco{
  margin-right: 0.4vw;

 }
 .teste{
  color: #231f2d;
 }

</style>
