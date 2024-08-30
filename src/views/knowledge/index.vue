<template>
  <div class="container mx-auto w-11/12">
    sdsad
    <div>
      <el-button type="danger">待开发...</el-button>
    </div>
  
 
  <div class="flex items-center">
      <div class="w-11/12  mx-auto shadow-lg">
        <el-input
          v-model="textarea"
          type="textarea"
          resize="none"
          placeholder="放松心情，您的回应会让对方感受到温暖。"
          :rows="3"
        />
      </div>

      <div class="w-1/12 text-center">
        <el-button type="primary" color="#626aef" :icon="Promotion" circle />
      </div>
     
  </div>
</div>
  </template>
  
  <script lang="ts" setup>
  import {
    Promotion
  } from '@element-plus/icons-vue'
  import { ref } from 'vue'
const textarea = ref('')
  </script>
  