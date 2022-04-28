<template>
   <button
      class="start__button"
      @click="onClick"
    >
      {{ isGameStarted ? "End game" : "Start game" }}
    </button>
</template>

<script lang="ts" setup>
import { ref } from  'vue'
import { useTimer } from '../composables/useTimer'
import { useGame } from '../composables/useGame'
import { useCards } from '../composables/useCards'

const { isGameStarted, startGame, currentTime, gameId, isTimerPaused } = useTimer()
const { turns, matched } = useGame()
const { cards, isNeedUpdate } = useCards()

  const resetGame = (() => {
    turns.value = (0);
    currentTime.value = (0);
    gameId.value = (null);
    isGameStarted.value = (false);
    isNeedUpdate.value = (Date.now());
    matched.value = ([]);
    isTimerPaused.value = (false);
  });

  const onClick = () => {
    if(!isGameStarted.value) {
      isGameStarted.value = true
    } else {
      resetGame()
    } 
  }
</script>
