<script setup>
import { ref, reactive } from 'vue';
import HeroComponent from "@/components/HeroComponent.vue"
import IconesComponent from "@/components/IconesComponent.vue";
import CartComponent from "@/components/CartComponent.vue"
import LancamentosComponent from '@/components/LancamentosComponent.vue';

const listaLivros = ref([
  {
    id: 0,
    nome: 'Chain of Iron: Volume 2',
    imagem: '/images/image1.png',
    autor: 'Cassandra Clare',
    preco: 23.24,
    curtidas: 'fa-regular fa-heart'
  },
  {
    id: 1,
    nome: 'Chain of Thorns',
    imagem: '/images/image2.png',
    autor: 'Cassandra Clare',
    preco: 23.24,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 2,
    nome: 'City of Fallen Angels',
    imagem: '/images/image3.png',
    autor: 'Cassandra Clare',
    preco: 13.94,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 3,
    nome: 'Nona the Ninth',
    imagem: '/images/image4.png',
    autor: 'Cassandra Clare',
    preco: 16.84,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 4,
    nome: 'Harlem Shuffle',
    imagem: '/images/image5.png',
    autor: 'Colson Whitehead',
    preco: 26.92,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 5,
    nome: 'Two Old Women',
    imagem: '/images/image6.png',
    autor: 'Velma Wallis',
    preco: 13.95,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 6,
    nome: 'Carrie Soto Is Back',
    imagem: '/images/image7.png',
    autor: 'Taylor Jenkins Reid',
    preco: 26.04,
    curtidas: 'fa-regular fa-heart',
  },
  {
    id: 7,
    nome: 'Book Lovers',
    imagem: '/images/image8.png',
    autor: 'Emily Henry',
    preco: 15.81,
    curtidas: 'fa-regular fa-heart',
  },
])
let carrinho = ref(true)

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
    ...item,
    quantidade: ref(1),
    get total(){
      return Number(this.preco * this.quantidade).toFixed(2)
    },})
    cart.value.itens.push(novoItem)
  }
  atualizarValorTotal()
  alert(`Livro ${item.nome} adicionado ao carrinho`)
  };
</script>
<template>
  <main v-if="carrinho">
    <button @click="carrinho=false" class="placeholder">
      Ir para o Carrinho
    </button>
        <hero-component />
        <icones-component />
        <lancamentos-component :listaLivros="listaLivros" @adicionar-livro="adicionar" />
      </main>
    <main v-else class="carrinho">
      <cart-component @adicionar="adicionarItem" @diminuir="removerItem" @voltar-loja="carrinho = !carrinho" :cart="cart"/>
    </main>
</template>
<style scoped>
  .placeholder{
    background-color: #27ae60;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 1vw;
    margin: 1vw 0;
    margin-left: 14vw;
  }
</style>
