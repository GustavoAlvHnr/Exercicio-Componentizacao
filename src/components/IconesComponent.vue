<template>
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
</template>
<style>
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
</style>
