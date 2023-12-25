<template>
    <div class="">
        <div class="section1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <img src="../assets/homepage_p1.jpg" alt="封面圖" >
            <div class="animation-overlay">
                <div class="animation-bg" data-aos="flip-down"  data-aos-duration="2500">
                    <div class="mb-3"> <h2>青食咖啡廳</h2></div>
                
                    <div>
                        <p>
                            營業時間：Wed. - Sun. 12:00 - 17:00
                            <br />
                            地址：綠色大道 青年路123巷4號1F
                            <br />
                            聯絡電話: 0912-345-678
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="section2" >
            <div class="d-flex ">
                <div class="section2-image" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                    <img src="../assets/homepage_p2.jpg" alt="封面圖">
                </div>
                <div class="section2-content"  data-aos="fade-right" data-aos-offset="550" data-aos-easing="ease-in-sine">
                    <p>在輕鬆愜意的咖啡廳，享受一杯香醇咖啡和精心烘焙的點心。<br /><br />
                    讓午後時光變得格外美好，讓我們的咖啡陪伴您度過一個寫意的時光。</p>
                </div>
            </div>
        </div>
        <div class="section3" >
            <div class="d-flex ">
                <div class="section3-content"  data-aos="fade-right" data-aos-offset="600" data-aos-easing="ease-in-sine">
                    <p>在輕鬆愜意的咖啡廳，享受一杯香醇咖啡和精心烘焙的點心。<br /><br />
                    讓午後時光變得格外美好，讓我們的咖啡陪伴您度過一個寫意的時光。</p>
                </div>
                <div class="section3-image" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                    <img src="../assets/homepage_p3.jpg" alt="封面圖">
                </div>
                
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<script>

import AppFooter from './AppFooter.vue';
export default {
    name: 'HomePage',
    components:{
        AppFooter,
    },
    data(){
        return{
            isHomePage:true,
        }
    },  
    
}
</script>

<style scoped>

.section1 {
  position: relative; /* 將 .section1 設置為相對定位的容器 */
}

.animation-overlay {
  position: absolute; 
  top: 30%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  color: white; 
  text-align: center; 
}
.animation-bg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 300px;
    background-color: rgba(91, 164, 160, 0.8);
    border-radius: 15px;
}
.animation-bg p{
    font-size: 16px;

}
.section1 img {
  width: 100%;
}

.section2 {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(193, 192, 192, 0.5); 
}



.section2 img {
  width: 100%;
  height: 900px;
}

.section2-content {
  flex: 5;
  width: 80%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.section3 .section2-image {
  flex: 5;
}

.section3 img {
  width: 100%;
  height: 900px;
}

.section3-content {
  flex: 5;
  width: 80%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>