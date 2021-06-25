import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const POSTS_API_URL = `${ publicRuntimeConfig.siteUrl }/wp-json/wp/v2/posts`
export const AUTHORS_API_URL = `${ publicRuntimeConfig.siteUrl }/wp-json/wp/v2/users`
export const MEDIA_API_URL = `${ publicRuntimeConfig.siteUrl }/wp-json/wp/v2/media`
export const PAGES_API_URL = `${ publicRuntimeConfig.siteUrl }/wp-json/wp/v2/pages`
export const FORM_POST_URL = `${ publicRuntimeConfig.siteUrl }/wp-json/contact-form-7/v1/contact-forms/13/feedback`