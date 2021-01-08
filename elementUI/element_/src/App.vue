<template>
    <div>
        <!-- 底部导航 -->
        <TopNav></TopNav>
        <!-- 路由容器 -->
        <router-view></router-view>
    </div>
</template>
<script>
import TopNav from "@/components/TopNav";

export default {
    components: {
        TopNav
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html{
  background-color: #E9EEF3;
}
</style>