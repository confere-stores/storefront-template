import getSections from './sections'
import getSettings from './collections/settings'
import getLayout from './collections/layout'
import getPages from './collections/pages'
import getBlogPosts from './collections/blog-posts'
import getExtraPages from './collections/extra-pages'
import getWidgets from './collections/widgets'

export default options => {
  options.sections = getSections(options)

  if (window.netlifyIdentity && window.netlifyIdentity.on) netlifyIdentity.on('login', user => {
    let userId = user.id
    if (
      user &&
      user.app_metadata &&
      user.app_metadata.roles &&
      user.app_metadata.roles.length
    ) userId = user.app_metadata.roles[0].replace(/\D+/g, '')
    let storeCreatedAt = null
    if (
      user &&
      user.user_metadata &&
      user.user_metadata.store_created_at
    ) storeCreatedAt = user.user_metadata.store_created_at
    let storeHasIp = null
    if (
      user &&
      user.user_metadata &&
      user.user_metadata.store_has_ip
    ) storeHasIp = user.user_metadata.store_has_ip

    window.LogRocket.identify(user.id, {
      email: user.email,
    });
    window.Intercom('update', {
      app_id: "fqllm5mp",
      hide_default_launcher: false,
      user_id: user.id,
      id: user.id,
      email: user.email
    })
    analytics.identify(userId, {
      email: user.email,
      created_at: storeCreatedAt,
      infinitepay: storeHasIp
    });
    if (
      window.Cohere
      && user
      && user.id
      && user.email
    ) window.Cohere(
      user.id,
      {
        email: user.email
      }
    )
  })

  return {
    backend: {
      name: 'git-gateway',
      branch: 'master',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: 'Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
        openAuthoring: '{{message}}'
      }
    },
    logo_url: 'https://confere-shop.s3-sa-east-1.amazonaws.com/Group+130705.png',
    locale: 'pt',
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [
      getSettings(options),
      getLayout(options),
      getPages(options),
      getWidgets(options),
      getExtraPages(options),
      getBlogPosts(options),
    ]
  }
}
