import getGeneral from './settings/general'
import getHeader from './layout/header'
import getMenu from './layout/menu'
import getFooter from './layout/footer'
import getCode from './layout/code'

export default options => ({
  name: 'layout',
  label: 'Personalizar Loja',
  description: 'Layout base para todas as páginas',
  delete: false,
  editor: {
    preview: false
  },
  files: [
    getGeneral(options),
    getHeader(options),
    getMenu(options),
    getFooter(options),
    getCode(options)
  ]
})
