<script setup>
defineProps(['listaLivros'])
defineEmits(['adicionar-livro'])
</script>
<template>
  <section class="sessaoLivro">
          <h2>Lançamentos</h2>
          <ul>
            <li v-for="(item, id) in listaLivros" :key="id" class="abaLivros">
              <img :src="item.imagem" alt="livros"/>
              <p class="nome">{{ item.nome }}</p>
              <p class="autor">{{ item.autor }}</p>

              <div class="junto">
                <p class="preco">R${{ item.preco }}</p>
                <p class="curtir"><font-awesome-icon :icon="item.curtidas" /></p>
              </div>
              <button @click="$emit('adicionar-livro', item)">
                <font-awesome-icon class="espaco" icon="fa-solid fa-cart-shopping" />Comprar
              </button>
            </li>
          </ul>
        </section>
</template>
<style scoped>

/*//////////////////////////////Gianluca-Lista livros///////////////////////////////////////////*/

.sessaoLivro h2 {
  color: #231f2d;
  margin-left: 5vw;
  padding: 3vw 0;
  font-size: 2.3rem;
  font-weight: bold;
}

.sessaoLivro ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  list-style-type: none;
}
.sessaoLivro ul li {
  padding: 0 1vw 1vw 1vw;
  color: #231f2d;
  width: 18.91891891891892vw;
}
.sessaoLivro ul img {
  height: 26.06vw;
}
.sessaoLivro .nome {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1vw 0;
}
.sessaoLivro .autor {
  font-size: 1rem;
  padding-bottom: 1vw;
}
.sessaoLivro .preco {
  font-size: 1.2rem;
  font-weight: bold;
  padding-right: 10vw;
}
.sessaoLivro .curtir {
  font-size: 2vw;
  color: #27ae60;
  margin-bottom: -8vw;
}
.sessaoLivro .junto {
  display: flex;
}
.abaLivros button {
  background-color: #27ae60;
  color: white;
  width: 100%;
  padding: 1vw;
  font-size: 1rem;
  margin-top: 2vw;
  border: none;
  margin-bottom: 6vw;
}
.abaLivros .espaco {
  margin-right: 0.4vw;
}
.teste {
  color: #231f2d;
}
</style>
