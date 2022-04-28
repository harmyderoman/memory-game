import { ref, Ref, onMounted } from 'vue'

const currentTime = ref(0)
const isGameStarted = ref(false)
const gameId: Ref<number | null> = ref(null)
const isTimerPaused = ref(false)
export const useTimer = () => {
  
  const startGame = () => {
    gameId.value = Date.now()
    isGameStarted.value = true
  }

  onMounted(() => {
    if (gameId && isGameStarted && !isTimerPaused) {
      setTimeout(() => currentTime.value =(currentTime.value + 1), 1000);
    }
    if (!gameId && !isGameStarted) {
      currentTime.value = 0;
    }
  })

  return {
    gameId,
    isGameStarted,
    startGame,
    currentTime,
    isTimerPaused,
  };
}