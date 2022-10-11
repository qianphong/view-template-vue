const appTitle = import.meta.env.VITE_APP_TITLE || '项目模板'

function getPageTitle(pageTitle?: string) {
  if (pageTitle) return `${pageTitle} - ${appTitle}`
  return `${appTitle}`
}

export const install: UserModule = ({ router }) => {
  router.beforeEach(to => {
    document.title = getPageTitle(to.meta.title)
  })
}
