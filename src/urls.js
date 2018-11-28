export function urlBlogList () {
  return 'https://public-api.wordpress.com/rest/v1/sites/pradumangoyal.wordpress.com/posts/'
}
export function urlBlog (id) {
  return `${urlBlogList()}${id}/`
}
