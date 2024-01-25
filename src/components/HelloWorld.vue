<script setup>
import Level1 from "@assets/scenes/level1.js";
import Level2 from '@assets/scenes/level2.js'
import Level3 from '@assets/scenes/level3.js'
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Level1, Level2, Level3],
  input :{
    activePointers: 10,
  },
};

new Phaser.Game(config);
</script>

<template>
  <h1>Hello World</h1>
</template>

<style scoped>
</style>
