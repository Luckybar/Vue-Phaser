<script setup>
import Phaser from 'phaser'
import Level1 from "@assets/scene/level1.js";
import Level2 from '@assets/scene/level2.js'
import Level3 from '@assets/scene/level3.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Level1, Level2, Level3],
};

new Phaser.Game(config);
</script>

<template>
  <h1>Home</h1>
</template>
