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
          <p>{{this.bank}}</p>
          <p>{{this.showcardNum}}<span>信用卡</span></p>
        </div>
      </div>
      <ul>   
        <li>
          <span>用户名</span>
          <input type="text" placeholder="请输入用户名" v-model="name">
        </li>
        <li>
          <span>身份证号</span>
          <input type="text" placeholder="请输入身份证号" v-model="idCard">
        </li>
        <li>
          <span>预留手机号</span>
          <input type="text" placeholder="请输入预留手机号" v-model="showphone">
        </li>
        <li>
          <span>短信验证码</span>
          <div class="getcode">
            <p>获取验证码</p>
          </div>
          <input type="number" placeholder="请输入验证码" v-model="code">
        </li>
      </ul>
    </div>    
    <div class="passway">
      <div class="passway_button">
        <span></span>
        <input type="button" value="确认提交" @click="tosubmit()">
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
      name: '', //用户名
      showname: '', // 展示的用户名
      cardNum: '', // 银行卡号
      showcardNum: '', // 展示的银行卡号
      bank: '', // 银行名称
      mount: '', // 金额
      idCard: '', // 身份证号
      showidCard: '', // 展示的身份证号
      phone: '', // 手机号
      showphone: '', // 展示的手机号
      code: ''
    }
  },
  methods:{
    // 封装方法将指定位置之间的字符替换为*
    replace(params1,params2,str){
      str = str.split("")
      for(let i = params1; i<= params2; i++){
        str.splice(i,1,"*")
      }
      console.log(str.join(''))
      return str.join('') 
    },
    tosubmit(){
      var reg=/^((1[3,5,8][0-9])|(166)|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;

      if(this.name == '' || this.name == ' ' || this.name == null){
        Toast({ message: '用户名错误', duration: 1500});
      } else if(this.idCard == '' || this.idCard == ' ' || this.idCard == null){
        Toast({ message: '身份证号错误', duration: 1500});
      }else if(this.code == '' || this.code == ' ' || this.code == null){
        Toast({ message: '验证码错误', duration: 1500});
      }else if(this.phone == '' || this.phone == ' ' || this.phone == null || !reg.test(this.phone)){
        Toast({ message: '手机号错误', duration: 1500});
      } else {
        this.$router.push({        
          path:'/cashier',
          query: {
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
    }
  },
  created(){
    console.log(this.$route.params)
    this.phone = this.$route.params.phone
    this.idCard = this.replace(6,13,'410426199702276515')
    this.showphone = this.replace(2,7,this.phone)
    console.log(this.showphone)
    this.name = this.$route.params.name
    this.bank = this.$route.params.bank
    this.cardNum = this.$route.params.cardNum
    this.showcardNum = this.replace(5,9,this.cardNum)
    
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
