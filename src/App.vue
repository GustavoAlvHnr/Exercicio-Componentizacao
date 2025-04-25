<script setup>

import { ref, computed } from 'vue';

const listaLivros = ref([
  { nome: 'Chain of Iron: Volume 2',
    imagem: '/public/image1.png',
    autor: 'Cassandra Clare',
 },
  { nome: 'Chain of Thorns',
   imagem: '/public/image2.png',
   autor: 'Cassandra Clare',
  },
  { nome: 'City of Fallen Angels',
    imagem: '/public/image3.png',
    autor: 'Cassandra Clare',

  },
  { nome: 'Nona the Ninth',
    imagem: '/public/image4.png',
    autor: 'Cassandra Clare',

  },
  { nome: 'Harlem Shuffle',
    imagem: '/public/image5.png',
    autor: 'Colson Whitehead',

  },
  { nome: 'Two Old Women',
    imagem: '/public/image6.png',
    autor: 'Velma Wallis',

  },
  { nome: 'Carrie Soto Is Back',
    imagem: '/public/image7.png',
    autor: 'Taylor Jenkins Reid',

  },
  { nome: 'Book Lovers',
    imagem: '/public/image8.png',
    autor: 'Emily Henry',

  }

])

</script>

<template>
<body>


<main>

<section class="lancamentos">
  <div>
  <p class="verde">Autor de Abril</p>

  <h1>Eric-Emanuel Schmitt </h1>

  <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>

  <button>Acessar página do livro</button>

</div>
  <img src="/public/Schmitt_Nocognia_3D_500pcx 1.png" alt="livro">

</section>

<section class="sessaoLivro">


  <ul>
    <li v-for="itens in listaLivros" class="abaLivros">

      <img :src="itens.imagem" alt="">
      <p>{{ itens.nome }}</p>
      <p>{{ itens.autor }}</p>

    </li>
  </ul>

</section>
</main>



</body>
</template>

<style scoped>

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
  /*/////////////////////////////gianluca-lista_livros////////////////////////////////////*/

 .sessaoLivro ul li img{
    width: 15vw;
  }
 .sessaoLivro ul{
    display: flex;
    flex-wrap: wrap;
    width: 80%;

  margin: 0 auto;
  list-style-type: none;

  }
  .sessaoLivro ul li{
    padding: 0 1vw 1vw 1vw;
  }
</style>
