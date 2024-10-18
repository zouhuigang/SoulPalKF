<template>
  <div class="container mx-auto w-11/12 flex flex-col min-h-screen h-full">
    <!-- 消息显示区域 -->
    <div class="flex-1">
        <div v-for="(message, index) in messages" :key="index">
          {{ message }}
        </div>
    </div>

    <!-- 固定在底部的模块 -->
    <div class="flex items-center fixed bottom-5 w-8/12 mx-auto">
      <div class="w-11/12 mx-auto">
        <el-input
          v-model="textarea"
          type="textarea"
          resize="none"
          placeholder="放松心情，您的回应会让对方感受到温暖。"
          :rows="3"
          @keydown.enter="handleKeydown"
        />
      </div>

      <div class="w-1/12 text-center">
        <el-button v-if="textarea" type="primary" color="#626aef" :icon="Promotion" circle @click="sendMessage"/>
        <el-button v-else type="primary" color="#626aef" disabled :icon="Promotion" circle/>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
  import {
    Promotion
  } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';
import { invoke } from '@tauri-apps/api/tauri';

const textarea = ref<string>('');
const messages = ref<string[]>([]);
let socket: WebSocket | null = null;

onMounted(() => {
  // 启动 WebSocket 服务器
  invoke('start_websocket_server');

  // 创建 WebSocket 连接
  socket = new WebSocket('ws://127.0.0.1:8080');

  socket.addEventListener('open', () => {
    console.log('WebSocket connection opened');
  });

  socket.addEventListener('message', (event) => {
    messages.value.push(event.data);
  });

  socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
  });

  socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
  });

  window.addEventListener('tauri://message', (event) => {
    messages.value.push(event.detail);
  });
});

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    if (event.ctrlKey || event.metaKey) {
      // Ctrl + Enter 插入换行符
      textarea.value += '\n';
      event.preventDefault(); // 防止光标跳到行首
    } else {
      // Enter 发送消息
      sendMessage();
      event.preventDefault(); // 防止默认的换行行为
    }
  }
};


const sendMessage = () => {
  if (textarea.value !== '' && socket && socket.readyState === WebSocket.OPEN) {
    socket.send(textarea.value);
    textarea.value = '';
  } else {
    console.error('WebSocket is not connected');
  }
};
</script>