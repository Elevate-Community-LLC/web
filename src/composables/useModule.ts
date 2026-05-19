import { ref } from 'vue'

export interface Module {
  name: string
}

const module = ref<Module>({
  name: 'Elevate Community, LLC',
})

export function useModule() {
  return module
}
