<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px" class="h-full">
        <el-menu  default-active="/knowledge"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#7C5CFC"
        background-color="rgba(28, 34, 53, 1)"
        text-color="#fff"
        :router="true"
        >
        <el-menu-item index="/knowledge">
          <el-icon><Promotion /></el-icon>
          <span>知识库</span>
        </el-menu-item>

        <el-menu-item index="/service">
          <el-icon><Service /></el-icon>
          <span>接待大厅</span>
        </el-menu-item>
         
        </el-menu>
    </el-aside>
    <el-main class="main-container">
      <router-view />
    </el-main>
    
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Promotion, Service } from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu{
    height:100vh
}
.layout-container-demo .el-header {
  position: relative;
  background-color:  #fff;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: #fff;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.left-menu{

  background-color:  rgba(28, 34, 53, 1);
}
</style>

