<script setup lang="ts">

</script>

<template>
  <div class="page-layout">
    <div class="header-layout">
      <h2 class="page-title">
        Welcome to Meta Analysis Helper!
      </h2>
      <p>Please log in to insert or review data</p>
    </div>
    <div class="page-body">
      stuff goes here
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  background-color: #fcfcfc;
  flex-direction: column;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center stretch;
  height: 100vh;
  flex: 1;
  .header-layout {
    display: flex;
    width: 100%;
    padding: 50px;
    justify-content: center;
    background-color: cornflowerblue;
    align-items: center;
    flex-direction: column;
    .page-title {
      font-size: 30px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
  .page-body {
    display: flex;
    height: 100%;
    flex-direction: column;
    // height: 100vh;
  }
}
</style>
