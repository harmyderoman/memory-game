import { ref, Ref, onMounted, computed,watch } from 'vue'

function shuffle(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getShuffledCards() {
  return shuffle([
    ...Array.from({ length: 18 }, (_, i) => i + 1),
    ...Array.from({ length: 18 }, (_, i) => i + 1),
  ])
}

const isNeedUpdate = ref(Date.now())
const cards = ref(getShuffledCards())

export const useCards = () => {

  watch(isNeedUpdate, () => {
    cards.value = getShuffledCards()
  })
  return { cards, isNeedUpdate }
};