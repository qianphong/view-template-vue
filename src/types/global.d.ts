import type { App } from 'vue'
import { type EChartsOption as Option } from 'echarts'

declare global {
  type EChartsOption = Option
  type UserModule = (ctx: { app: App<Element> }) => void
}
