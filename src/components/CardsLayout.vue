<template>
	<div v-if="!isGameStarted" class="empty__layout">Push start</div>
	<div v-else-if="matched.length === 18" class="empty__layout">Win!</div>
	<template v-else>
		<div v-for="(item,idx) in cards" :key="`${item}::${idx}`">
			<div v-if="!matched.includes(item)" class="scene scene--card">
				<div
          class="card"
          :class="{ 'is-flipped': setClassName(idx)}"
					@click="setActivePair({item, idx})"
				>
					<div class="card__face card__face--front">Click me</div>
					<div :class="cardColor(item)"
            class="card__face card__face--back">
						{{ item }}
					</div>
				</div>
			</div>
			<div v-else class="empty__placeholder" />
		</div>
	</template>
</template>

<script lang="ts" setup>
	import { setClassName } from '../utils'
	import { ref, watch } from 'vue'
	import { useTimer } from '../composables/useTimer'
	import { useGame } from '../composables/useGame'
	import { useCards } from '../composables/useCards'

	const { pair, setActivePair, matched } = useGame()
	const { cards } = useCards()
	const { isGameStarted, isTimerPaused } = useTimer()

  const cardColor = (item) => {
    return `card__color_${item}`
  }
  
	watch(matched, () => {
		if (matched.value.length === 18) {
			isTimerPaused.value = true
		}
	})
</script>
