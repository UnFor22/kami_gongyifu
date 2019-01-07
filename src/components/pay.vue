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
          <input type="text" placeholder="信用卡背面后三位" v-model="cardNum">
        </li>
        <li>
          <span>有效期</span>
          <input type="text" placeholder="月 / 年   示例:10/23（月/年）" v-model="bank">
        </li>
        <li>
          <span>手机号</span>
          <input type="text" placeholder="请输入手机号码" v-model="mount">
          <span class="code">获取验证码</span>
        </li>
        <li>
          <span>验证码</span>
          <input type="text" placeholder="请输入验证码" v-model="phone">
        </li>
        
      </ul>
    </div>    
    <div class="passway">
      
      <div class="passway_button">
        <span></span>
        <input type="button" value="确认付款" @click="tocashier">
      </div>
      <div class="passway_tips">
        <!-- <p>信息已安全加密，仅用于银行验证</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      name: '',
      cardNum: '',
      bank: '',
      mount: '',
      phone: '',
      passway: '',
    }
  },
  methods:{
    tocashier(){
      this.$router.push('/cashier')
    }
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
      font-size: 20px;
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
        height: 100%;
        border: none;
        outline:none;
        border-top: 1px solid #e8e8e8;
      }
      input::-webkit-input-placeholder{
        color:#a8a8a8;
      }
      input:focus{
        border-top:1px solid #e8e8e8;  
      }
    }
    li:nth-of-type(3){
      padding: 0 5%;
      input{
        width: 48%;
      }
      .code{
        float: right;
        width: 24%;
        text-align: center;
        padding: 0 0 0 20px;
        color: #409eff;
        border-left: 1px solid #e8e8e8;
        border-top: 1px solid #e8e8e8;
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
