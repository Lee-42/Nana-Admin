<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <img
          class="login-header_logo"
          src="../../assets/login_logo.png"
          alt=""
        />
        <span class="login-header_desc"
          >nana-naive 中后台前端/设计解决方案</span
        >
      </div>
      <n-form
        class="login-body login-form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-placement="left"
      >
        <n-form-item path="account_id">
          <n-input
            v-model:value="loginForm.account_id"
            placeholder="请输入用户名"
            size="large"
            :input-props="{ autocomplete: 'off' }"
            @keydown.enter.prevent
          >
            <template #prefix>
              <svg-icon :component="PersonOutline" /> </template
          ></n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-input
            v-model:value="loginForm.password"
            placeholder="请输入密码"
            size="large"
            :input-props="{ autocomplete: 'off' }"
            type="password"
            show-password-on="click"
          >
            <template #prefix>
              <svg-icon :component="LockClosedOutline" /> </template
          ></n-input>
        </n-form-item>
        <n-form-item class="form-item-sumbit">
          <n-button
            block
            size="large"
            type="primary"
            :keyboard="true"
            :loading="loggining"
            @click.enter="login"
          >
            登录
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

const loginForm = ref({
  account_id: '',
  password: ''
})
const rules = ref({
  account_id: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }
})
const loggining = ref(false)
const loginFormRef = ref(null)
const login = (e) => {
  e.preventDefault()
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      loggining.value = true
      store
        .dispatch('user/login', loginForm.value)
        .then(() => {
          loggining.value = false
          router.push('/')
        })
        .catch((err) => {
          loggining.value = false
        })
    } else {
    }
  })
}
</script>

<style lang="less" scoped>
@bg: #eee;
@dark_gray: #889aa4;
@light_gray: #eee;
@cursor: #fff;

.login {
  min-height: 100%;
  width: 100%;
  background-color: @bg;
  overflow: hidden;
  background-image: url(../../assets/login_bg.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  .login-box {
    max-width: 384px;
    min-width: 320px;
    margin: 0 auto;
    margin-top: 100px;
    .login-header {
      .login-header_logo {
        max-width: 100%;
        height: auto;
      }
      .login-header_desc {
        width: 100%;
        color: @dark_gray;
        font-size: 14px;
        text-align: center;
        display: inline-block;
      }
    }
    .login-body {
      margin-top: 30px;
    }
    .login-footer {
    }
    .form-item-sumbit {
      margin-top: 24px;
    }
  }
}
</style>
