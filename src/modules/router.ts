const appTitle = import.meta.env.VITE_APP_TITLE || '项目'

function getPageTitle(title?: string) {
  return title ? `${title}-${appTitle}` : appTitle
}

export const install: UserModule = ({ router }) => {
  router.beforeEach(to => {
    document.title = getPageTitle(to.meta.title)
  })
}
