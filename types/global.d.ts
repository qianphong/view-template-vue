import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'
import type { EChartsOption as Option } from 'echarts'

declare global {
  type EChartsOption = Option
  type UserModule = (ctx: {
    app: App<Element>
    router: Router
    route: RouteRecordRaw[]
  }) => void
}
