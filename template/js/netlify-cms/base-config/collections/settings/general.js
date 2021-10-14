export default ({ baseDir }) => ({
  name: 'general',
  label: 'Nome, Cores e Logos da Marca',
  file: `${baseDir}content/settings.json`,
  editor: {
    preview: false
  },
  fields: [{
      label: 'Nome da loja',
      name: 'name',
      widget: 'string'
    },
    {
      label: 'Nome curto',
      name: 'short_name',
      widget: 'string',
      hint: 'Título do aplicativo quando instalado (PWA)'
    },
    {
      label: 'Descrição curta',
      name: 'description',
      widget: 'text'
    },
    {
      label: 'Cor primária',
      name: 'primary_color',
      widget: 'color'
    },
    {
      label: 'Cor secundária',
      name: 'secondary_color',
      widget: 'color'
    },
    {
      label: 'Logo',
      name: 'logo',
      widget: 'image',
      hint: 'Dimensões recomendadas: 300x100px (Logo retangular) ou 300x3000px (Logo quadrado)'
    },
    {
      label: 'Ícone do app',
      name: 'icon',
      widget: 'image'
    },
    {
      label: 'Ícone grande',
      name: 'large_icon',
      widget: 'image'
    },
    {
      label: 'Favicon',
      name: 'favicon',
      widget: 'image'
    }
  ]
})
