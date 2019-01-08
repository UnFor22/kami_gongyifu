<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <div class="name">
      <span>中文</span>
      <p>订单支付</p>
      <img src="../assets/yinlian.png" alt="">
    </div>
    <div class="main">
      <p>付款金额<span>￥255.00</span></p>
      <ul>   
        <li>
          <span>安全码</span>
          <input type="text" placeholder="信用卡背面后三位" v-model="safeCode">
        </li>
        <li>
          <span>有效期</span>
          <input type="text" @click="openPicker" placeholder="月 / 年   示例:10/23（月/年）" v-model="validity">
          <mt-datetime-picker
            v-model="validity"
            ref="picker"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            @confirm="handleConfirm"
            :startDate='startDate'
            >
          </mt-datetime-picker>
        </li>
        <li>
          <span>手机号</span>
          <input type="number" placeholder="请输入手机号码" v-model="phone">
          <span class="code" @click="sendCode" v-if="this.codejishi">获取验证码</span>
          <span class="codejishi" v-else>{{codeTime}}秒后重试</span>
        </li>
        <li>
          <span>验证码</span>
          <input type="number" placeholder="请输入验证码" v-model="code">
        </li>
        
      </ul>
    </div>    
    <div class="passway">
      
      <div class="passway_button">
        <span></span>
        <input type="button" value="确认付款" @click="tocashier">
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, DatetimePicker  } from 'mint-ui'
export default {
  name: 'test',
  data () {
    return {
      safeCode: '',
      validity: '',
      phone: '',
      code: '',

      codeTime: 60,
      codejishi: true,
      startDate: new Date()
    }
  },
  methods:{
    tocashier(){
      var reg=/^((1[3,5,8][0-9])|(166)|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;

      if(this.safeCode == '' || this.safeCode == ' ' || this.safeCode == null){
        Toast({ message: '安全码错误', duration: 1500});
      } else if(this.validity == '' || this.validity == ' ' || this.validity == null){
        Toast({ message: '有效期错误', duration: 1500});
      }else if(this.code == '' || this.code == ' ' || this.code == null){
        Toast({ message: '验证码错误', duration: 1500});
      }else if(this.phone == '' || this.phone == ' ' || this.phone == null || !reg.test(this.phone)){
        Toast({ message: '预留手机号错误', duration: 1500});
      } else {
        this.$router.push({        
          name:'cashier',
          params: {
            safeCode: this.safeCode,
            validity: this.validity,          
            name:this.$route.params.name,
            cardNum:this.$route.params.cardNum,
            bank:this.$route.params.bank,
            mount:this.$route.params.mount,
            phone:this.$route.params.phone,
            passway:this.$route.params.passway
          }
        }) 
      }
    },
    openPicker() {
      this.$refs.picker.open();
      document.getElementsByClassName("picker-slot")[2].style.display = 'none'   
    },
    handleConfirm(){ 
      console.log(this.validity) ;
    },
    sendCode(){
      let reg=/^((1[3,5,8][0-9])|(14[5,7])|(166)|(17[0,6,7,8])|(19[7]))\d{8}$/;
      if(!reg.test(this.phone)){
        Toast({ message: '手机号错误', duration: 1500})
      } else{
        // getCode({mob:this.phoneNum}).then(res => {
        //   console.log(res)
        // })
        this.codejishi = false
        console.log(this.codeTime)
        this.codetime = setInterval(()=>{
          // this.times.secs += 1
          this.codeTime = parseInt(this.codeTime) - 1
          
          if(this.codeTime<10){
            this.codeTime = "0"+ this.codeTime
          } 
          if (this.codeTime == "00"){
            this.codejishi = true
            this.codeTime = 60
            clearInterval(this.codetime)
          }
          console.log(this.codeTime)
        },1000)
      }  
    }
  },
  mounted(){
    console.log(this.$route.params)
    this.phone = this.$route.params.phone
  }
  
}
</script>

<style lang='scss' scoped>

.name{
  height: 55px;
  line-height: 55px;
  background: #fff;
  padding: 0 5%;
  box-sizing: border-box;
  background: #409eff;
  box-sizing: border-box;
  color: #fff;
  span{
    display: inline-block;
    height: 100%;
    width: 30%;
    float: left;
  }
  p{
    float: left;
    // margin: 0 auto;
    width: 35%;
    text-align: center;
    // margin-left: 30px;
  }
  img{
    width: 100px;
    height: 28px;
    vertical-align: middle;
    margin-top: 13px;
    float: right;
  }
}
.main {
  width: 100%;
  p{
    height: 55px;
    line-height: 55px;
    padding: 0 5%;
    color: #888;
    span {
      float: right;
      // margin-right: 20px;
      font-size: 24px;
      color: orangered;
    }
  }
  ul{
    li {
      height: 55px;
      line-height: 55px;
      background: #fff;
      padding: 0 5%;
      box-sizing: border-box;
      border-top: 1px solid #e8e8e8;
      span{
        display: inline-block;
        height: 100%;
        width: 20%;
      }
      input {
        display: inline-block;
        width: 65%;
        height: 53px;
        border: none;
        outline:none;
        border-bottom: 1px solid #e8e8e8;
      }
      input::-webkit-input-placeholder{
        color:#a8a8a8;
      }
      input:focus{
        border-bottom:1px solid #e8e8e8;  
      }
    }
    li:nth-of-type(3){
      padding: 0 5%;
      input{
        width: 46%;
      }
      .code{
        float: right;
        width: 26%;
        text-align: center;
        padding: 0 0 0 20px;
        color: #409eff;
        border-left: 1px solid #e8e8e8;
      }
      .codejishi{
        float: right;
        width: 26%;
        text-align: center;
        padding: 0 0 0 20px;
        color: #409eff;
        border-left: 1px solid #e8e8e8;
      }
    }
    li:nth-of-type(4){
      border-bottom: 1px solid #e8e8e8;
      input {
        display: inline-block;
        width: 65%;
        height: 51px;
        border: none;
        outline:none;
        border-bottom: 1px solid #e8e8e8;
      }
    }
  }
}
.passway{
  margin-top: 20px;
  .passway_input{
    height: 55px;
    line-height: 55px;
    background: #fff;
    padding: 0 0 0 5%;
    box-sizing: border-box;
    span{
      display: inline-block;
      height: 100%;
      width: 30%;
    }
    input {
      display: inline-block;
      width: 65%;
      height: 100%;
      border: none;
      outline:none;
    }
    input::-webkit-input-placeholder{
      color:#a8a8a8;
    }
    input:focus{
      border: none;  
    }
  }
  .passway_button{
    text-align: center;
    // width: 80%;
    input{
      width: 88%;
      height: 55px;
      background: #409eff;
      border: none;
      font-size: 16px;
      color: #fff;
      margin: 10px 0;
      border-radius: 4px; 
      outline: none;
    }
    input:focus{
      border: none;  
    }
  }
  
}
</style>
