<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <div class="name">
      <div>
        <span>金额</span>
        <!-- <input type="text" placeholder="￥255.00" disabled="disabled" v-model="name"> -->
        <span class="mount">￥255.00</span>
      </div>
      <div>
        <span>订单号</span>
        <!-- <input type="text" placeholder="MP20190105190121968204" disabled="disabled" v-model="name"> -->
        <span>MP20190105190121968204</span>
      </div>
    </div>
    <div class="main">
      <p>银行卡信息</p>
      <div class="bankinfo">
        <img src="../assets/zhongxinyinhang.png" alt="">
        <div class="bankinfo_right">
          <p>中信银行</p>
          <p>62266226622662266226<span>信用卡</span></p>
        </div>
      </div>
      <ul>   
        <li>
          <span>用户名</span>
          <input type="text" placeholder="请输入信用卡卡号" v-model="cardNum">
          <!-- <span>思考的</span> -->
        </li>
        <li>
          <span>身份证号</span>
          <input type="text" placeholder="请输入开户银行" v-model="bank">
        </li>
        <li>
          <span>预留手机号</span>
          <input type="text" placeholder="请输入信用卡额度" v-model="mount">
          <!-- <div class="wenhao">
            <img src="../assets/wenhao.png" alt="">
          </div> -->
        </li>
        <li>
          <span>短信验证码</span>
          <div class="getcode">
            <p>获取验证码</p>
          </div>
          <input type="text" placeholder="请输入银行预留手机号" v-model="phone">

        </li>
        
      </ul>
    </div>    
    <div class="passway">
      <!-- <div class="passway_input">
        <span>签约通道</span>
        <input type="text" placeholder="请输入签约通道" v-model="passway">
      </div> -->
      <div class="passway_button">
        <span></span>
        <input type="button" value="确认提交" @click="topay">
      </div>
      <!-- <div class="passway_tips">
        <img src="../assets/suo.png" alt="">
        <p>信息已安全加密，仅用于银行验证</p>
      </div> -->
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
    topay(){
      this.$router.push('/pay')
    }
  }
  
}
</script>

<style lang='scss' scoped>

.name{
  // height: 55px;
  // line-height: 55px;
  background: #fff;
  box-sizing: border-box;
  div{
    height: 55px;
    line-height: 55px;
    padding: 0 5%;
    border-bottom: 1px solid #e8e8e8;
    span{
      display: inline-block;
      height: 100%;
      color: #888;
      // width: 30%;
    }
    span:nth-of-type(2){
      float: right;
    }
    
    // input {
    //   display: inline-block;
    //   text-align: right;
    //   width: 65%;
    //   height: 100%;
    //   border: none;
    //   outline:none;
    //   border-bottom: 1px solid #e8e8e8;
    //   background: #fff;
    // }
    // input::-webkit-input-placeholder{
    //   color:#a8a8a8;
    // }
    // input:focus{
    //   border: none;  
    // }
  }
  div:nth-of-type(1){
    height: 65px;
    line-height: 65px;
    span{
      font-size: 18px;
    }
    .mount{
      font-size: 26px;
    }
    // input{
    //   font-size: 22px;
    //   color:#111;
    // }
    // input::-webkit-input-placeholder {color:#111;}
    // input:-moz-placeholder {color:#111}
    // input:-ms-input-placeholder {color:#111}
  }
}
.main {
  width: 100%;
  margin-top: 20px;
  p{
    height: 40px;
    line-height: 40px;
    padding: 0 5%;
    color: #888;
    font-size: 12px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
  }
  .bankinfo{
    overflow: hidden;
    display: block;
    clear: both;
    background: #fff;
    padding: 10px 5%;
    border-bottom: 1px solid #e8e8e8;
    img{
      width: 70px;
      height: 70px;
      vertical-align: middle;
      float: left;
    }
    .bankinfo_right{
      float: left;
      margin-left: 10px;
      p{
        border: none;
        height: 35px;
      }
      p:nth-of-type(1){
        color: #000;
        font-size: 16px;
      }
      p:nth-of-type(2){
        width: 100%;
        color: #888;
        font-size: 14px;
        span{
          margin-left: 10px;
        }
      }
    }

  }
  ul{
    li {
      height: 55px;
      line-height: 55px;
      background: #fff;
      padding: 0 0 0 5%;
      box-sizing: border-box;
      border-bottom: 1px solid #e8e8e8;
      span{
        display: inline-block;
        height: 100%;
        width: 30%;
      }
      input {
        display: inline-block;
        text-align: right;
        width: 65%;
        height: 100%;
        border: none;
        outline:none;
        border-bottom: 1px solid #e8e8e8;
      }
      input::-webkit-input-placeholder{
        color:#a8a8a8;
      }
      input:focus{
        border: none;  
        border-bottom: 1px solid #e8e8e8;
      }
    }
    li:nth-of-type(4){
      position: relative;
      .getcode{
        position: absolute;
        height: 100%;
        top: 0;
        right: 15px;

        p{
          margin-top: 5px;
          font-size: 14px;
          color: green;
          width: 70px;
          height: 4% 0;
          padding: 0 10px;
          border: 2px solid green;
          border-radius: 8px; 
        }
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
      background: green;
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
  .passway_tips{
    text-align: center;
    color: #999;
    font-size: 14px;
    clear: both;
    overflow: hidden;
    display: block;
    img{
      float: left;
      width: 14px;
      height: 14px;
      vertical-align: middle;
      // margin-right: 4px;
      margin-left: 20%;
    }
    p{
      float: left;
      margin-left: 4px;
    }
  }
}
</style>
