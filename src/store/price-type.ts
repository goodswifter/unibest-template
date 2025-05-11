import { commonApi } from '@/api'
import type { PriceTypeModel } from '@/api/types'

export const usePriceTypeStore = defineStore(
  'price-type',
  () => {
    const priceTypes = ref<PriceTypeModel[]>([])

    const getPriceTypes = async () => {
      const { model } = await commonApi.getPriceTypes()
      priceTypes.value = model ?? []
    }

    return {
      priceTypes,
      getPriceTypes,
    }
  },
  { persist: { storage: sessionStorage } },
)
