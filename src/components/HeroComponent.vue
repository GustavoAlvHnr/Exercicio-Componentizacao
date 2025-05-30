<template>
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
            <img src="/images/Schmitt_Nocognia_3D_500pcx1.png" alt="livro" />
            <figcaption>*within the stock limit</figcaption>
          </figure>
        </section>
</template>
<style scoped>
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
</style>
