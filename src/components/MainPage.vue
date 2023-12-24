<template>
  <div class="bg">
    <img src="../assets/background.jpg" alt="咖啡廳">
    <div class="animation-overlay">
      <div class="animation-bg" data-aos-duration="1500" data-aos-delay="50" data-aos="flip-left" >
        <div class="animation-content">
          <header>
            <h2>青食咖啡廳</h2>
        </header>
        <p>
          營業時間: Mon. - Sun. 12:00 - 17:00
          <br />
          地址：綠色大道 青年路123巷4號1F
        </p>
        <button @click.once="enter"><router-link to="/home" class="nav-link" >進入</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -999;
}
.bg img {
  min-height: 100%;
  min-width: 1000px;
  width: 100%;
}
.animation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(87, 87, 87, 0.5); /* 設置透明背景色 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.animation-bg{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  background-color: rgba(91, 164, 160, 0.8);
  border-radius: 15px;
  @media (max-width: 576px) {
    width: 300;
    height: 100;
    margin: 20px;
  }
}
.animation-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff; /* 設置動畫內容的文字顏色 */
  @media (max-width: 576px) {
    color: #ffffff; 
  }
}
button {
  width: 250px;
  height: 40px;
  color: rgb(35, 97, 97);
  background-color: rgba(255, 255, 255, 0.5);
  border: 0px solid white;
  border-radius: 10px;
  @media (max-width: 576px) {
    width: 150;
    margin: 20px;
  }
}
button:hover{
  background-color:rgba(47, 129, 129, 0.8);
  color: white;
  border: 1px solid white;;
}
</style>
