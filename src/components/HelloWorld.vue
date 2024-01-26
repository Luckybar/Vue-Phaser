<script setup>
import Level1 from "@assets/scenes/level1.js"
import Level2 from '@assets/scenes/level2.js'
import Level3 from '@assets/scenes/level3.js'
import Level4 from '@assets/scenes/level4.js'
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Level1, Level2, Level3, Level4],
  input :{
    activePointers: 10,
  },
  dom: {
    createContainer: true
  },
  parent: 'game',
};

new Phaser.Game(config);
</script>

<template>
  <h1>Hello World</h1>
  <div id="game"></div>
</template>

<style scoped>
</style>
