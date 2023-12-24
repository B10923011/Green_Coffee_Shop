<template>
    
    <div class="container text-center mb-64 mt-3">
        <h3 class="title mb-5">商品</h3>
    </div>
    


    <div class="container d-sm-flex justify-center-between mb-100 align-items-start">
        <div class="recommendation-section1 me-5 p-3 shadow mb-5 bg-body rounded">
            <h4 class="text-secondary mb-4 fw-bold">伴手禮</h4>

            <span class="d-block text-secondary mb-3">點心</span>
            <div class="scalp-class mb-4 ps-3 d-flex flex-sm-column flex-wrap">
                <div class="form-check text-secondary me-3 me-sm-0">
                    <input class="form-check-input me-2" type="checkbox" value="呂" id="brand01">
                    <label class="form-check-label fs-5" for="brand01">手工餅乾</label>
                </div>
                <div class="form-check text-secondary me-3 me-sm-0">
                    <input class="form-check-input me-2" type="checkbox" value="肯夢" id="brand02">
                    <label class="form-check-label fs-5" for="brand02">乳酪捲</label>
                </div>
                <div class="form-check text-secondary me-3 me-sm-0">
                    <input class="form-check-input me-2" type="checkbox" value="艾瑪絲" id="brand03">
                    <label class="form-check-label fs-5" for="brand03">千層蛋糕</label>
                </div>
                <div class="form-check text-secondary me-3 me-sm-0">
                    <input class="form-check-input me-2" type="checkbox" value="森歐黎漾" id="brand04">
                    <label class="form-check-label fs-5" for="brand04">水果塔</label>
                </div>
            </div>


            <span class="d-block text-secondary mb-3">沖泡飲品</span>
            <div class="need-class mb-4 ps-3 d-flex flex-sm-column flex-wrap">
                <div class="form-check text-secondary me-3 me-sm-0">
                    <input class="form-check-input me-2" type="checkbox" value="控油清爽" id="check01">
                    <label class="form-check-label fs-5" for="check01">茶包</label>
                </div>
                <div class="form-check text-secondary me-3 me-sm-0">
                    <input class="form-check-input me-2" type="checkbox" value="抗屑止癢" id="check02">
                    <label class="form-check-label fs-5" for="check02">咖啡</label>
                </div>
            </div>
        </div>

        <div id="shampoo-list" class="recommendation-section2">

        </div>

    </div>
    <AppFooter />
</template>
<script>

import AppFooter from './AppFooter.vue';
export default {
    name:'AppProduct',
    components:{
        AppFooter,
    },
    data(){
        return{
            isHomePage:true,
        }
    },  
    
};  
</script>
<style scoped>

</style>