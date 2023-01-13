<template>
  <div class="navbar">
    <div class="breadcrumb-container">
      <Breadcrumb />
    </div>
    <div class="langselect-container">
      <LangSelect />
    </div>
    <div class="setting-container">
      <Setting />
    </div>
    <div class="user-container">
      <UserDropDown />
    </div>
  </div>
</template>

<script setup>
import UserDropDown from '@/components/UserDropdown'
import Breadcrumb from '@/components/Breadcrumb'
import LangSelect from '@/components/LangSelect'
import Setting from '@/components/Setting'
</script>

<style lang="less" scoped>
.navbar {
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  position: relative;
  -webkit-box-shadow: 0 1px 4px #00152914;
  -moz-box-shadow: 0 1px 4px #00152914;
  box-shadow: 0 1px 4px #00152914;
  .breadcrumb-container {
    position: absolute;
    left: 10px;
  }

  .langselect-container {
    position: absolute;
    right: 140px;
    cursor: pointer;
  }
  .setting-container {
    position: absolute;
    right: 90px;
    cursor: pointer;
  }
  .user-container {
    position: absolute;
    right: 35px;
    cursor: pointer;
  }
}
</style>
