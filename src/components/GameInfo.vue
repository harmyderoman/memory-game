<template>
	<div class="info">Turns:{{ turns }} Time passed: {{ currentTime }}</div>
</template>

<script lang="ts" setup>
import { useTimer } from '../composables/useTimer'
import { useGame } from '../composables/useGame'

const { currentTime } = useTimer()
const { turns } = useGame()
</script>
