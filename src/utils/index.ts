import { useGame } from './../composables/useGame'

const { pair } = useGame()

export const setClassName = (idx: any) => {
  if (pair.value.filter((item: any) => item.idx === idx).length > 0){
    return true;
  }
  return false;
};
