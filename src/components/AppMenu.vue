<template>
  <div class="wrapper">
    <div class="container d-flex mb-5">
      <h3 class="title">菜單</h3>
      <div class="menu-container">
        <img id="menuImage" class="menu" src="../assets/menu.png" alt="菜單">
      </div>
    </div>
  </div>
<AppFooter />
</template>

<script>
import AppFooter from './AppFooter.vue';
export default {
  name:'AppMenu',
  components:{
    AppFooter,
  },
  data(){
    return{
      isHomePage:true,
    };
  },
  mounted() {
    const menuImage = document.getElementById('menuImage');
    menuImage.addEventListener('click', this.toggleEnlarge);
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    const menuImage = document.getElementById('menuImage');
    menuImage.removeEventListener('click', this.toggleEnlarge);
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleEnlarge() {
      const menuImage = document.getElementById('menuImage');
      menuImage.classList.toggle('menu-enlarged');
    },
    handleClickOutside(event) {
      const menuImage = document.getElementById('menuImage');
      if (!menuImage.contains(event.target)) {
        menuImage.classList.remove('menu-enlarged');
      }
    },
  },
};
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
}
.wrapper {
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
  flex-grow: 1; 
}

.title {
  text-align: center;
  margin-top: 20px;
}

.menu-container {
  width: 20%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: 1px solid black;
  position: relative; 
  z-index: 2; 
  @media (max-width: 912px) {
    width: 80%;
  }
}

.menu {
  width: 100%;
  height: auto;
  transition: transform 0.3s; 
}

.menu-enlarged {
  transform: scale(1.4);
}
</style>
