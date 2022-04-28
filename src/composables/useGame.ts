import { ref, Ref, onMounted, watch } from 'vue'

interface Card {
  idx: number,
  item: number,
}

const pair: Ref<Card[]> = ref([])
const matched: Ref<any> = ref([])
const turns = ref(0)
const isClickDisabled = ref(false)

export const useGame = () => {

  const setActivePair = (item: Card) => {
    if (isClickDisabled.value || pair.value.some((el) => el.idx === item.idx)) {
      return
    } 
    if (pair.value.length) {
      pair.value = [...pair.value, item]
    } else {
      pair.value = [item]
    }
  };

  watch(pair, () => {
    if (pair.value.length === 2) {
      isClickDisabled.value = (true);
      setTimeout(() => {
        if (pair.value[0]?.item === pair.value[1]?.item) {
          matched.value = [...matched.value, pair.value[1].item]
        }
        pair.value =([]);
        isClickDisabled.value = false
      }, 1000);
      turns.value = (turns.value + 1);
    }
  });

  return {
    pair,
    setActivePair,
    matched,
    turns,
    isClickDisabled,
  };
}