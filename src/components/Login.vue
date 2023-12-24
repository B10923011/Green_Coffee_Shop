<template>
    <div class="container d-flex mb-5">
      <div class="section-bg" data-aos-duration="1500" data-aos-delay="50" data-aos="fade-up">
        <div class="section-content">
          <h4>登入</h4>
          <hr />
          <div class="d-flex flex-column align-items-center">
            <div class="account">
              <label>帳號：</label>
              <input type="text">
            </div>
            <div class="password">
              <label>密碼：</label>
              <input type="password">
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button @click="handleSearch">查詢</button>
        </div>
      </div>
    </div>
    <AppFooter />
  </template>
  
  <script>
  import AppFooter from './AppFooter.vue';
 
  export default {
    name: 'AppBooking',
    components:{
        AppFooter,
    },
    data() {

    },
    methods: {
     
    },
  };
  </script>
  
<style scoped>
.section-bg {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 500px;
    height: 350px;
    background-color: rgba(91, 164, 160, 0.6);
    opacity: 0.5;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 5px 5px 5px rgb(109, 109, 109);
}
.section-content{
    color:white;
    padding: 15px;
    
}
.section-content h4 {
    text-align: center;
}
button {
  width: 250px;
  height: 40px;
  color: rgb(91, 164, 160);
  background-color: rgba(255, 255, 255, 0.5);
  border: 0px solid white;
  border-radius: 10px;
  @media (max-width: 576px) {
    width: 150;
    margin: 20px;
  }
}
button:hover {
  background-color:rgba(91, 164, 160, 0.8);
  color: white;
  border: 1px solid white;;
}
select {
    width: 100%;
}
label {
  font-size: 20px;
}
input {
  width:200px;
}
.select-time select {
    width: 200px;
}
.select-date select {
    width: 200px;
}
</style>