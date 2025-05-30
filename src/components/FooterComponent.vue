<template>
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
                <img src="/images/paipal1.png" alt="">
              </li>
              <li>
                <img src="/images/MasterCard-Logo-19791.png" alt="">
              </li>
              <li>
                <img src="/images/VISA-card-logo-1.png" alt="">
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p class="direitos">
        &copy; Alguns direitos reservados. IFbooks 2025.
      </p>
      </footer>
</template>
<style scoped>
  /*///////////////////////////
    FEAT-5 (Gustavo)
////////////////////////////*/
footer{
  background-color: #27ae60;
  color: white;
  padding-bottom: 2vw;
  padding-top: 2vw;
  font-size: 1rem;
  margin-top: 2vw;
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
</style>
