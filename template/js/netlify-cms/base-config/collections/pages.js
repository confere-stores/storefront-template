import getHome from './pages/home'
import getProducts from './pages/products'
import getSearch from './pages/search'
import getBrands from './pages/brands'
import getCategories from './pages/categories'
import getCollections from './pages/collections'
import getBlog from './pages/blog'

export default options => ({
  name: 'pages',
  label: 'Personalizar Páginas',
  description: 'Capriche no visual e deixe a loja do jeitinho da sua marca. Adicione banners, vídeos, promoções, organize os produtos e muito mais.',
  delete: false,
  files: [
    getHome(options),
    getProducts(options),
    getSearch(options),
    getBrands(options),
    getCategories(options),
    getCollections(options)
  ]
})
