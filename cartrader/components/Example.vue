<template>
  <div>
    <p>{{ injectedMessage }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const injectedMessage = inject('message')
</script>