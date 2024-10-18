<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px" class="aside-container">
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

.layout-container-demo {
  display: flex;
  height: 100vh; /* 占满整个视口高度 */
  overflow: hidden; /* 防止父容器出现滚动条 */
}

.aside-container {
  height: 100%; /* 占满左侧高度 */
  background-color: rgba(28, 34, 53, 1);
}

.main-container {
  flex: 1; /* 右侧内容区域占满剩余空间 */
  overflow-y: auto; /* 超出高度时出现垂直滚动条 */
  padding: 20px;
  background-color: #f5f5f5; /* 可选：右侧内容背景颜色 */
}

.el-menu {
  height: 100%; /* 菜单高度占满左侧容器 */
  border-right: none;
}
</style>

