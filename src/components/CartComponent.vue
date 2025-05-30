<script setup>
defineProps(['cart'])
defineEmits(['adicionar', 'diminuir', 'voltar-loja'])
</script>
<template>
  <section>
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
              <button @click="$emit('diminur', item)">-</button>
              <p class="quantidade">{{ item.quantidade }}</p>
              <button @click="$emit('adicionar', item)">+</button>
              </div>
              <p>R${{ item.total }}</p>
            </div>
          </li>
      </ul>
      <button @click="$emit('voltar-loja')" class="voltar">Voltar para Loja</button>
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
        </section>
</template>
<style scoped>

/*////////////////////////////////////////
        FEAT-6 (Gustavo)
///////////////////////////////////////*/
section{
  margin-bottom: 4vw;
}
.carrinho{
  color: #231f2d;
  margin: 6vw;
}
.carrinho h1{
  padding: 4vw 3vw 2vw;
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
  margin-right: 3vw;
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
