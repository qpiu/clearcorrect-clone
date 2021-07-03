import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const POSTS_API_URL = `${ NEXT_PUBLIC_SITE_URL }/wp-json/wp/v2/posts`
export const AUTHORS_API_URL = `${ NEXT_PUBLIC_SITE_URL }/wp-json/wp/v2/users`
export const MEDIA_API_URL = `${ NEXT_PUBLIC_SITE_URL }/wp-json/wp/v2/media`
export const PAGES_API_URL = `${ NEXT_PUBLIC_SITE_URL }/wp-json/wp/v2/pages`
export const FORM_POST_URL = `${ NEXT_PUBLIC_SITE_URL }/wp-json/contact-form-7/v1/contact-forms/13/feedback`
//export const GOOG_MAPS_API_KEY = `${ publicRuntimeConfig.googleMapAPIKey }`