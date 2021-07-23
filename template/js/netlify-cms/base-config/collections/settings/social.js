export default ({ baseDir }) => ({
  name: 'social',
  file: `${baseDir}content/social.json`,
  label: 'Configurações Avançadas',
  hint: 'Configurações para compartilhamento da loja',
  fields: [
    {
      label: 'Imagem de compartilhamento',
      name: 'og_image',
      required: false,
      widget: 'image',
      hint: 'Imagem que é exibida quando o site é compartilhado'
    }
  ]
})
