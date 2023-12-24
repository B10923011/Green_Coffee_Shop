<template>
    
    <footer class="app-footer">
      <div class="footer-content">
        <p>&copy; 2023 Green Coffee Shop. All rights reserved.</p>
      </div>
    </footer>
</template>
  
<script>
  export default {
    name: 'AppFooter',
  };
</script>
  
<style scoped>
.app-footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: rgba(91, 164, 160, 0.8);
  color: white;
  padding: 10px;
  text-align: center;
}
.footer-content {
  margin: 0 auto;
  margin-top: 15px;
}
</style>