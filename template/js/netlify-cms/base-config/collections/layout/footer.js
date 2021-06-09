export default ({ baseDir }) => ({
  name: 'footer',
  label: 'Rodapé',
  file: `${baseDir}content/footer.json`,
  fields: [
    {
      label: 'Descrição',
      name: 'description',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          hint: 'Em destaque, dentro de uma tag H2',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Texto',
          required: false,
          name: 'text',
          widget: 'string'
        }
      ]
    },
    {
      label: 'Lista de links 1',
      name: 'links_1',
      widget: 'object',
      hint: 'Lista de links normalmente utilizada para exibir páginas como, Sobre nós e Política de privacidade',
      fields: [
        {
          label: 'Listar páginas',
          hint: 'Ativar para listar as páginas extra automáticamente',
          name: 'list_pages',
          widget: 'boolean',
          default: true
        },
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Links',
          name: 'list',
          widget: 'list',
          fields: [
            {
              label: 'Texto',
              required: false,
              name: 'text',
              widget: 'string'
            },
            {
              label: 'URL',
              required: false,
              name: 'url',
              widget: 'string'
            }
          ]
        }
      ]
    },
    {
      label: 'Lista de links 2',
      name: 'links_2',
      widget: 'object',
      hint: 'Lista adicional de links, para exibir páginas',
      fields: [
        {
          label: 'Listar categorias',
          hint: 'Ativar para listar as categorias da loja automáticamente',
          name: 'list_categories',
          widget: 'boolean',
          default: true
        },
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Links',
          name: 'list',
          widget: 'list',
          fields: [
            {
              label: 'Texto',
              required: false,
              name: 'text',
              widget: 'string'
            },
            {
              label: 'URL',
              required: false,
              name: 'url',
              widget: 'string'
            }
          ]
        }
      ]
    },
    {
      label: 'Contatos',
      name: 'contacts',
      widget: 'object',
      hint: 'Contatos da loja',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Mostrar telefone e whatsapp',
          name: 'phone_wpp',
          required: false,
          widget: 'boolean'
        },
        {
          label: 'Mostar email',
          required: false,
          name: 'email',
          widget: 'boolean'
        },
        {
          label: 'Mostrar redes  sociais',
          name: 'socials',
          required: false,
          widget: 'boolean'
        }
      ]
    },
    {
      label: 'Selos',
      name: 'stamps',
      widget: 'list',
      fields: [
        {
          label: 'Imagem',
          required: false,
          name: 'src',
          widget: 'image'
        },
        {
          label: 'alt',
          required: false,
          name: 'alt',
          widget: 'string'
        },
        {
          label: 'Link',
          required: false,
          name: 'link',
          widget: 'string'
        }
      ]
    },
    {
      label: 'Créditos',
      name: 'credits',
      widget: 'string',
      required: false
    }
  ]
})
