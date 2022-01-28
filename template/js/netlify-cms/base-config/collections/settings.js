import getGeneral from './settings/general'
import getContacts from './settings/contacts'
import getInfo from './settings/info'
import getSocial from './settings/social'
import getMaintenance from './settings/maintenance'

export default options => ({
  name: 'settings',
  label: 'Configurações',
  description: 'Escolhe o nome e as cores da sua marca, insira o seu logo, dados de contato e turbine com suas redes sociais.',
  delete: false,
  editor: {
    preview: false
  },
  files: [
    getGeneral(options),
    getContacts(options),
    getInfo(options),
    getSocial(options),
    getMaintenance(options)
  ]
})
