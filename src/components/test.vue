<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <div class="name">
      <span>本人姓名</span>
      <input type="text" placeholder="请输入用户名" v-model="name">
    </div>
    <div class="main">
      <p>请确认信用卡额度</p>
      <ul>   
        <li>
          <span>信用卡卡号</span>
          <input type="number" placeholder="请输入信用卡卡号" v-model="cardNum">
        </li>
        <li>
          <span>开户银行</span>
          <input type="text" placeholder="请输入开户银行" v-model="bank">
        </li>
        <li>
          <span>信用卡额度</span>
          <input type="number" placeholder="请输入信用卡额度" v-model="mount">
          <div class="wenhao">
            <img src="../assets/wenhao.png" alt="">
          </div>
        </li>
        <li>
          <span>预留手机</span>
          <input type="number" placeholder="请输入银行预留手机号" v-model="phone">
        </li>
        
      </ul>
    </div>    
    <div class="passway">
      <div class="passway_input">
        <span>签约通道</span>
        <input type="text" placeholder="请输入签约通道" v-model="passway">
      </div>
      <div class="passway_button">
        <span></span>
        <input type="button" value="下一步" @click="topay">
      </div>
      <div class="passway_tips">
        <img src="../assets/suo.png" alt="">
        <p>信息已安全加密，仅用于银行验证</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
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
      var reg=/^((1[3,5,8][0-9])|(166)|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;

      if(this.name == '' || this.name == ' ' || this.name == null){
        Toast({ message: '本人姓名错误', duration: 1500});
      } else if(this.cardNum == '' || this.cardNum == ' ' || this.cardNum == null){
        Toast({ message: '信用卡卡号错误', duration: 1500});
      }else if(this.bank == '' || this.bank == ' ' || this.bank == null){
        Toast({ message: '开户银行错误', duration: 1500});
      }else if(this.mount == '' || this.mount == ' ' || this.mount == null){
        Toast({ message: '信用卡额度错误', duration: 1500});
      }else if(this.phone == '' || this.phone == ' ' || this.phone == null || !reg.test(this.phone)){
        Toast({ message: '预留手机号错误', duration: 1500});
      }else if(this.passway == '' || this.passway == ' ' || this.passway == null){
        Toast({ message: '签约通道错误', duration: 1500});
      } else {
        this.$router.push({        
          name:'pay',
          params: {
            name:this.name,
            cardNum:this.cardNum,
            bank:this.bank,
            mount:this.mount,
            phone:this.phone,
            passway:this.passway
          }
        }) 
      }
    }
  }
  
}
</script>

<style lang='scss' scoped>

.name{
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
.main {
  width: 100%;
  p{
    height: 55px;
    line-height: 55px;
    padding: 0 5%;
    color: #888;
  }
  ul{
    li {
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
    li:nth-of-type(3){
      position: relative;
      .wenhao{
        position: absolute;
        top: 0;
        right: 20px;

        img{
          width: 20px;
          height: 20px;
          vertical-align: middle;
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
      background: #409eff;
      border: none;
      font-size: 16px;
      color: #fff;
      margin: 30px 0;
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
      padding-bottom: 100px;
    }
  }
}
</style>
