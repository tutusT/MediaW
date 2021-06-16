export default class {
  baseUrl = 'https://jsonplaceholder.typicode.com'

  async getResource(url) {
    try {
      const response = await fetch(`${this.baseUrl}/${url}`)

      if (!response.ok) {
        throw new Error('Fetching error')
      }

      const json = await response.json()
      return json
    } catch (error) {
      throw new Error(error)
    }
  }

  getAllPosts = async () => {
    let posts = await this.getResource('posts')
    posts = posts.reverse()

    const result = []
    let i = 0
    while (i !== 21) {
      result.push(posts[i])
      i++
    }
    return result.reverse()
  }

  getAllUsers = async () => await this.getResource('users')

  getPostsUser = async id => await this.getResource(`posts?userId=${id}`)

  getUser = async id => await this.getResource(`users?id=${id}`)

  getComments = async id => await this.getResource(`comments?postId=${id}`)
}
