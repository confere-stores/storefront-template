export default ({ baseDir }) => ({
  name: 'contacts',
  file: `${baseDir}content/contacts.json`,
  label: 'Contatos',
  hint: 'Contatos da loja, exibidos em várias páginas',
  fields: [
    {
      label: 'E-mail',
      name: 'email',
      required: false,
      widget: 'string'
    },
    {
      label: 'Telefone',
      name: 'phone',
      required: false,
      widget: 'string'
    },
    {
      label: 'Endereço',
      name: 'address',
      required: false,
      widget: 'string'
    },
    {
      label: 'CNPJ/CPF',
      name: 'doc_number',
      required: false,
      widget: 'string'
    },
    {
      label: 'Whatsapp',
      name: 'whatsapp',
      required: false,
      widget: 'string'
    },
    {
      label: 'Facebook',
      name: 'facebook',
      widget: 'string',
      required: false,
      hint: 'Preencha a url completa. Exemplo: https://www.facebook.com/ConfereCartoes'
    },
    {
      label: 'Twitter',
      name: 'twitter',
      widget: 'string',
      required: false,
      hint: 'Preencha a url completa.'
    },
    {
      label: 'Youtube',
      name: 'youtube',
      widget: 'string',
      required: false,
      hint: 'Preencha a url completa. Exemplo: https://www.youtube.com/channel/UCnbYV0scfPDh_02Q3_1Pmgg'
    },
    {
      label: 'Instagram',
      name: 'instagram',
      widget: 'string',
      required: false,
      hint: 'Preencha a url completa. Exemplo: https://instagram.com/conferecartoes'
    },
    {
      label: 'TikTok',
      name: 'tiktok',
      widget: 'string',
      required: false,
      hint: 'Preencha a url completa.'
    },
    {
      label: 'Pinterest',
      name: 'pinterest',
      widget: 'string',
      required: false,
      hint: 'Preencha a url completa.'
    },
    {
      label: 'LinkedIn',
      name: 'linkedin',
      widget: 'string',
      required: false,
      hint: 'Preencha a url completa. Exemplo: https://www.linkedin.com/company/confere-cartoes'
    }
  ]
})
