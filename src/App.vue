<script setup>
import { ref, reactive } from 'vue'

const listaLivros = ref([
  {
    id: 0,
    nome: 'Chain of Iron: Volume 2',
    imagem: '/public/image1.png',
    autor: 'Cassandra Clare',
    preco: 23.24,
    curtidas: 'fa-regular fa-heart'
  },
  {
    id: 1,
    nome: 'Chain of Thorns',
    imagem: '/public/image2.png',
    autor: 'Cassandra Clare',
    preco: 23.24,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 2,
    nome: 'City of Fallen Angels',
    imagem: '/public/image3.png',
    autor: 'Cassandra Clare',
    preco: 13.94,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 3,
    nome: 'Nona the Ninth',
    imagem: '/public/image4.png',
    autor: 'Cassandra Clare',
    preco: 16.84,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 4,
    nome: 'Harlem Shuffle',
    imagem: '/public/image5.png',
    autor: 'Colson Whitehead',
    preco: 26.92,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 5,
    nome: 'Two Old Women',
    imagem: '/public/image6.png',
    autor: 'Velma Wallis',
    preco: 13.95,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 6,
    nome: 'Carrie Soto Is Back',
    imagem: '/public/image7.png',
    autor: 'Taylor Jenkins Reid',
    preco: 26.04,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 7,
    nome: 'Book Lovers',
    imagem: '/public/image8.png',
    autor: 'Emily Henry',
    preco: 15.81,
    curtidas: 'fa-regular fa-heart',
  },
])
let carrinho = ref(true)

function botao(){
  if(carrinho.value == true){
    carrinho.value = false;
  }
  else{
    carrinho.value = true;
  }
}

let cart = ref({
  itens:[],
  frete:0,
  desconto:0,
  valorTotal:0,})

  function atualizarValorTotal() {
  cart.value.valorTotal = cart.value.itens.reduce((total, item) => {
    return total + parseFloat(item.total)
  }, 0).toFixed(2);
}

function buscarItem(id) {
  return cart.value.itens.find(i => i.id === id)
}

function adicionarItem(item){
  const itemExistente = buscarItem(item.id)
  if(itemExistente){
    itemExistente.quantidade += 1;
    atualizarValorTotal()
  }
}

function removerItem(item){
  const index = cart.value.itens.findIndex(i => i.id === item.id)
  if(index !== -1){
    const itemExistente = cart.value.itens[index];
    if(itemExistente.quantidade > 1){
      itemExistente.quantidade -= 1
    }
    else{
      cart.value.itens.splice(index, 1);
    }
    atualizarValorTotal()
  }
}

function adicionar(item){
  const itemExistente = buscarItem(item.id)

  if(itemExistente){
      itemExistente.quantidade += 1
  }
  else{
    const novoItem = reactive({
    id:item.id,
    titulo:item.nome,
    autor:item.autor,
    preco:item.preco,
    quantidade: ref(1),
    get total(){
      return Number(this.preco * this.quantidade).toFixed(2)
    },
    imagem:item.imagem,})

    cart.value.itens.push(novoItem)
  }
  atualizarValorTotal()
  };


</script>

<template>
  <body class="corpo">
      <header>
        <a href="#"
          ><span class="conteudo1">IFBooks</span> <span class="conteudo2">Apreço a leitura</span></a
        >
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
            <button class="icon" @click="botao()"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
          </li>
          <li>
            <button class="icon" id="coracao">
              <font-awesome-icon icon="fa-solid fa-heart" />
            </button>
          </li>
          <li>
            <button class="icon"><font-awesome-icon icon="fa-solid fa-user" /></button>
          </li>
        </ul>
      </header>
      <main v-if="carrinho">
        <section class="lancamentos">
          <div>
            <p class="verde">Autor de Abril</p>
            <h1>Eric-Emanuel Schmitt</h1>
            <p>
              Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions,
              and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have
              been translated into over 40 languages.
            </p>
            <button>Acessar página do livro</button>
          </div>
          <figure>
            <img src="/public/Schmitt_Nocognia_3D_500pcx 1.png" alt="livro" />
            <figcaption>*within the stock limit</figcaption>
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
            <li v-for="(item, id) in listaLivros" :key="id" class="abaLivros">
              <img :src="item.imagem" alt="livros"/>
              <p class="nome">{{ item.nome }}</p>
              <p class="autor">{{ item.autor }}</p>

              <div class="junto">
                <p class="preco">R${{ item.preco }}</p>
                <p class="curtir"><font-awesome-icon :icon="item.curtidas" /></p>
              </div>

              <button @click="adicionar(item)">
                <font-awesome-icon class="espaco" icon="fa-solid fa-cart-shopping" />Comprar
              </button>
            </li>
          </ul>
        </section>
      </main>
    <div v-else class="carrinho">
      <h1>
        Carrinho
      </h1>
      <ul class="titulos">
        <li>
          <h2>Título</h2>
        </li>
        <li>
          <h2>Quantidade</h2>
        </li>
        <li>
          <h2>Subtotal</h2>
        </li>
      </ul>
      <ul class="itens">
        <li v-for="(item, id) in cart.itens" :key="id" class="item">
        <img :src="item.imagem" alt="livros" />
            <div class="conteudo">
              <div class="informacoes">
              <p class="nome">{{ item.titulo }}</p>
              <p class="autor">{{ item.autor }}</p>
              <p class="preco">R${{ item.preco }}</p>
              </div>
              <div class="botao">
              <button @click="removerItem(item)">-</button>
              <p class="quantidade">{{ item.quantidade }}</p>
              <button @click="adicionarItem(item)">+</button>
              </div>
              <p>R${{ item.total }}</p>
            </div>
          </li>
      </ul>
      <button @click="botao()" class="voltar">Voltar para Loja</button>
      <div class="final">
        <div class="form">
        <form>
          <input type="text" placeholder="Código do cupom">
        </form>
          <button>Inserir Cupom</button>
        </div>
        <div class="total">
          <h2>
            Total da Compra
          </h2>
          <ul>
              <li>
                <p>Produtos:</p>
                <p>R${{ cart.valorTotal }}</p>
              </li>
              <li class="frete">
                <p>Frete:</p>
                <p>Grátis</p>
              </li>
              <li>
                <p>Total:</p>
                <p>R${{ cart.valorTotal }}</p>
              </li>
                <li class="pagamento">
                  <button>Ir para o pagamento</button>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
      <div class="container">
        <ul>
        <li>
        <h3>
          IFbooks
        </h3>
        </li>
        <li>
        <ul class="iconesfoot">
        <li>
          <font-awesome-icon icon="fa-brands fa-square-facebook"/>
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-square-instagram"/>
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-square-twitter"/>
        </li>
        </ul>
        </li>
        </ul>
        <ul class="contato">
          <li class="conta">
            <p>Contato</p>
          </li>
          <li class="ico">
            <font-awesome-icon icon="fa-solid fa-phone"/><p>+55 47 40045263</p>
          </li>
          <li class="ico">
            <font-awesome-icon icon="fa-solid fa-clock"/><p>8h às 23h - Seg a Sex</p>
          </li>
          <li class="ico">
            <font-awesome-icon icon="fa-solid fa-envelope"/><p>contato@ifbooks.com</p>
          </li>
          <li>
            <ul class="metodo">
              <li>
                <img src="/public/paipal 1.png" alt="">
              </li>
              <li>
                <img src="/public/MasterCard-Logo-1979 1.png" alt="">
              </li>
              <li>
                <img src="/public/VISA-card-logo- 1.png" alt="">
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p class="direitos">
        &copy; Alguns direitos reservados. IFbooks 2025.
      </p>
      </footer>
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
section.lancamentos {
  display: flex;
  font-size: 0.4rem;
}

.lancamentos figure img {
  width: 26vw;
  margin-bottom: -2.9vw;
  margin-right: 13vw;
}
.lancamentos button {
  font-size: 1.3rem;
  color: white;
  background-color: #27ae60;
  border: none;
  border-radius: 0.2vw;
  padding: 1vw;
}
.lancamentos h1 {
  font-weight: bold;
  font-size: 3.5rem;
  padding: 0 0 1vw 0;
  color: #382c2c;
}
.lancamentos figure figcaption {
  margin: 0 0 0 16vw;
  font-size: 1.5rem;
  color: #231f2d;
}
.lancamentos div {
  margin: 5vw auto;
}
.lancamentos p {
  width: 29vw;
  padding: 1vw 0;
  font-size: 1.3rem;
  margin-bottom: 1vw;
  line-height: 1.7vw;
  color: #4d4c4c;
}
.lancamentos div p.verde {
  color: #27ae60;
  border: #27ae60 solid 1px;
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
.icones ul li {
  display: flex;
}
.icones ul li.estrela {
  border-left: #27ae60 2px solid;
  border-right: #27ae60 2px solid;
  padding: 0 3vw 0 3vw;
}
.icones ul li p {
  padding: 0 2vw;
}

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
/*///////////////////////////
    FEAT-5 (Gustavo)
////////////////////////////*/
footer{
  background-color: #27ae60;
  color: white;
  padding-bottom: 2vw;
  padding-top: 2vw;
  font-size: 1rem;
}
footer .container{
  display: flex;
  justify-content: space-between;
  border-bottom: rgba(255, 255, 255, 0.6) 2px solid;
  padding: 0 13vw 1vw 13vw;
}
.iconesfoot{
  display: flex;
  padding-top: 1vw;
  font-size: 2.5rem;
}
.iconesfoot li{
  padding-right: 1vw;
}
.direitos{
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2vw;
  display: flex;
  justify-content: center;
}
.metodo{
  display: flex;
  padding-top: 3vw;
  padding-bottom: 2vw;
}
.metodo li{
  padding-right: 1vw;
}
.contato .ico{
  display: flex;
  padding-top: 1vw;
}
.contato .conta{
  font-weight: bold;
}
.container .contato .ico p{
  padding-left: 0.5vw;
}
/*////////////////////////////////////////
        FEAT-6 (Gustavo)
///////////////////////////////////////*/
.carrinho{
  color: #231f2d;
  margin: 6vw;
}
.carrinho h1{
  padding: 2vw 1vw 4vw;
  color: #27ae60;
  font-size: 3.5rem;
  font-weight: bold;
}
.titulos{
  display: flex;
  margin: 1vw 3vw 1vw 3vw;
  font-size: 2rem;
  justify-content: space-between;
  padding-bottom:2vw ;
  border-bottom: #27ae60 2px solid
};
.itens{
  display: flex;
}
.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  border-bottom: #bdbdbd 1px solid;
  margin: 2vw 3vw 3vw 3vw;
  padding-bottom: 3vw ;
}
.item img{
  width: 10%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}
.conteudo{
  margin-top: -3vw;
  margin-bottom: 2vw;
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.informacoes p{
  padding: 0.2vw;
  padding-left: 1vw;
}
.informacoes .autor{
  font-weight: 300;
  font-size: 1rem;
  padding: .5vw .5vw .5vw 1vw;
}
.botao{
  display: flex;
  border: #231f2d 2px solid;
  padding: 0.5vw 1vw;
  height: 40%;
}
.botao p{
  padding: 0 0.4vw 0 0.4vw;
}
.botao button{
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 1rem;
}
.final{
  display: flex;
  justify-content: space-between;
}
.voltar{
  width: 10%;
  padding: 0.5vw;
  background-color: transparent;
  border: #231f2d solid 1px;
  margin-left:3vw ;
}
.form{
  display: flex;
  padding:3vw 0 3vw 3vw;
}
.form input{
  height: 5vh;
  width: 15vw;
  margin-right:2vw;
  padding: 1vw;
}
.form button{
  background-color: #27ae60;
  border: none;
  padding: 0.5vw 2vw 0.5vw 2vw;
  color: white;
  border-radius: 4px;
  height: 2.4vw;
}
.total{
  margin-top: 3vw;
  width: 30%;
  padding: 1.5vw 2vw 0vw 2vw;
  border: #231f2d solid 2px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.total ul{
  display: flex;
  flex-direction: column;
  align-content: center;
}
.total li{
  display: flex;
  padding: 1vw;
  justify-content: space-between;
}
.total li p:first-child{
  padding-right: 2vw;
  font-size: 1rem;
}
.total h2{
  padding-bottom: 1vw;
  font-size: 1.5rem;
  font-weight: bold;
}
.total .frete{
  border-bottom: #b8b8b8 2px solid;
  border-top: #b8b8b8 2px solid;
}
.total .pagamento{
  display: flex;
  justify-content: center;
}
.total ul li button{
  padding: .8vw 1vw .8vw 1vw;
  border: none;
  background-color: #27ae60;
  border-radius: 4px;
  color: white;
}
</style>
