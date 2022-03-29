<template>
  <div class="box">
    <div class="login">
      <h2>Login Form</h2>
      <el-form :model="ruleForm" :rules="rules"   label-width="100px">
          <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm">Login</el-button>
        </el-form-item>
      </el-form>
      <p><span>username:admin</span><span>password:any</span></p>
    </div>
  </div>
</template>
<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    //   验证
    let validateUser = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{5,10}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("用户名有误"));
    };
    let validatePass = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{6,10}$/;
      if (rg.test(value)) return;
      return callback(new Error("密码有误"));
    };
    return {
      ruleForm: {
        username: "admin",
        pass: "123456",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  created(){
      this.loginFn()
  },
  methods: {
    submitForm() {
        this.loginFn()
    },
    async loginFn() {
      let username = ruleForm.username;
      let pass = ruleForm.pass;
      let { data } = await instance.post("/login", { username, pass });
      console.log(data);
      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          onClose: () => {
            this.$router.push({ name: "hahaha" });
          },
        });
      }
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100vw;
  height: 100vh;
  background: #2d3a4b;
}

.login {
  width: 480px;
  height: 400px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-right: 80px;
}
.login h2 {
  color: white;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}
.login .el-button {
  width: 100%;
}
.login p {
  color: white;
  margin-left: 100px;
  font-size: 14px;
}
.login p span:nth-child(1) {
  margin-right: 10px;
}
</style>