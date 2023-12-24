<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <router-link to="/" class="nav-title">
        <img class="logo" src="../assets/LOGO.png" alt="logo">
        青食咖啡廳
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
                <router-link to="/home" class="nav-link" >主頁</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/menu" class="nav-link" >菜單</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/booking" class="nav-link" >線上訂位</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/product" class="nav-link" >商品</router-link>
            </li>
        </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'AppHeaders',
    
}
</script>

<style>
nav {
    background-color: rgba(91, 164, 160, 0.8);
    position: fixed;
    top: 0;
    left: 0; 
    right: 0; 
}
.container-fluid {
    max-width: 1296px;
    margin-left: auto;
    margin-right: auto;
}
.nav-title{
    font-size: 28px;
    color: white;
    text-decoration:none;
}
.nav-item {
    font-size: 18px;
}
.navbar-nav .nav-link{
    color: white;
    cursor: pointer;
}
.navbar-nav, .navbar-nav .nav-link:hover{
    color: #5BA4A0;
}

.logo {
    width: 40px;
    height: 40px;
}
</style>