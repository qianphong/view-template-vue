function getPageTitle(title?: string) {
  return title
    ? `${title}-${import.meta.env.VITE_APP_TITLE}`
    : import.meta.env.VITE_APP_TITLE
}

export const install: UserModule = ({ router }) => {
  router.beforeEach(to => {
    document.title = getPageTitle(to.meta.title)
  })
}
