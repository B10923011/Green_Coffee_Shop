<template>
    <div class="container d-flex mb-5">
      <div class="section-bg" data-aos-duration="1500" data-aos-delay="50" data-aos="fade-up">
        <div class="section-content">
          <h4>訂位</h4>
          <hr />
          <div>
            <div class="section">
              <label>用餐人數</label>
              <div class="select-people">
                <select name="peopleCount" v-model="selectedPeopleCount">
                  <option
                    v-for="item in peopleOptions"
                    :key="item.key"
                    :value="item.value"
                    :disabled="item.disabled">
                    {{ item.title }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <label>日期</label>
              <div class="d-flex">
                <input type="date" v-model="selectedDate" @input="handleDateChange"/>
              </div>
            </div>
            <div>
              <div>
                <label>時間</label>
              </div>
              <div class="d-flex">
                <div class="select-time">
                  <select :name="selectTimeName" v-model="selectedTime">
                    <option
                      v-for="item in timeOptions"
                      :key="item.key"
                      :value="item.value"
                      :disabled="item.disabled">
                      {{ item.title }}
                    </option>
                  </select>
                </div>
              </div>
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
      const timeOptions = [
        { key: '1', value: '12:00', title: '12:00 AM', disabled: false },
        { key: '2', value: '13:00', title: '1:00 PM', disabled: false },
        { key: '3', value: '14:00', title: '2:00 PM', disabled: false },
        { key: '4', value: '15:00', title: '3:00 PM', disabled: false },
        { key: '5', value: '16:00', title: '4:00 PM', disabled: false },
        { key: '6', value: '17:00', title: '5:00 PM', disabled: false },
      ];
      const currentDate = new Date();
      const dateOptions = [];

      return {
        isHomePage:true,
        selectedDate: null,
        selectedPeopleCount: '', 
        selectedTime: '', 
        selectTimeName: 'time',
        timeOptions: timeOptions,
        peopleOptions: [
          { key: '1', value: '1', title: '1 人', disabled: false },
          { key: '2', value: '2', title: '2 人', disabled: false },
          { key: '3', value: '3', title: '3 人', disabled: false },
          { key: '4', value: '4', title: '4 人', disabled: false },
          { key: '5', value: '5', title: '5 人', disabled: false },
          { key: '6', value: '6', title: '6 人', disabled: false },
          { key: '7', value: '7', title: '7 人', disabled: false },
          { key: '8', value: '8', title: '8 人', disabled: false },
        ],
      };
    },
    methods: {
      handleSearch() {
        if (!this.selectedPeopleCount || !this.selectedDate || !this.selectedTime) {
          alert('請確認所有欄位皆已填寫！');
          return;
        }
        console.log('執行查詢操作');
        this.$router.push('/login');
      },
      handleDateChange() {
        console.log('選擇的日期：', this.selectedDate);
      },
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