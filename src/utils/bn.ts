// utils/bn.ts
import type { BigNumber as BigNumberType } from 'bignumber.js'

let BigNumberInstance: any = null

async function getBigNumber(): Promise<typeof BigNumberType> {
  if (!BigNumberInstance) {
    const module = await import('bignumber.js')
    BigNumberInstance = module.default || module
  }
  return BigNumberInstance
}

// 封装通用操作
export async function bnAdd(a: string | number, b: string | number): Promise<string> {
  const BigNumber = await getBigNumber()
  return new BigNumber(a).plus(b).toString()
}

export async function bnSub(a: string | number, b: string | number): Promise<string> {
  const BigNumber = await getBigNumber()
  return new BigNumber(a).minus(b).toString()
}

export async function bnMul(a: string | number, b: string | number): Promise<string> {
  const BigNumber = await getBigNumber()
  return new BigNumber(a).multipliedBy(b).toString()
}

export async function bnDiv(a: string | number, b: string | number): Promise<string> {
  const BigNumber = await getBigNumber()
  return new BigNumber(a).dividedBy(b).toString()
}
