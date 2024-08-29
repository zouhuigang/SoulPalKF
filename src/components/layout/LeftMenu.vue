<template>
    <aside class="w-auto shrink-0 box-border h-full">
      <div class="flex h-full overflow-hidden">
        <div class="flex flex-col items-center bg-[#1C2235] w-48 lg:w-40">
          <img
            src="@/assets/img/logo-header-white.png"
            class="w-[120px] cursor-pointer mx-auto my-8"
            @click="() => router.push({ name: RoutesMap.home.index })"
          />
          <ul class="flex-1 w-full space-y-4">
            <li
              class="[
                'text-[#9DA3AF] cursor-pointer transition-colors relative hover:text-white'
              ]"
              @click="onSideBarClick(item.routeName)"
            >
              <span
                class="flex items-center w-[168px] lg:w-36 h-11 gap-2 rounded-lg leading-[44px] text-sm px-5 mx-auto truncate"
              >
                <svg-icon name="" svg-class="w-7 h-7" />
                1111
              </span>
            </li>
          </ul>
          <SidebarBottom />
        </div>
       
      </div>
    </aside>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style lang="scss" scoped>
  .side-menu-active {
    span {
      background-color: #242a40;
    }
  
    &::before {
      position: absolute;
      content: '';
      width: 4px;
      background: linear-gradient(240deg, #ed78ff -49%, #4417ff 124%);
      border-radius: 0 8px 8px 0;
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
  </style>
  