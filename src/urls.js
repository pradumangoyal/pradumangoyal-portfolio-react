export function urlBlogList () {
  return 'https://public-api.wordpress.com/rest/v1/sites/pradumangoyal.wordpress.com/posts/'
}
export function urlBlog (id) {
  return `${urlBlogList()}${id}/`
}
export function urlEnsureCSRF () {
  return `/ensure_csrf/`
}
export function urlContactMe () {
  return `/contact_me/`
}
export function urlIsAdmin () {
  return `/is_admin/`
}
export function urlLogin () {
  return `/api-auth/login/`
}
