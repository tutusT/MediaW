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

  getAllPosts = async () => await this.getResource('posts')

  getAllUsers = async () => await this.getResource('users')

  getPostsUser = async id => await this.getResource(`posts?userId=${id}`)

  getUser = async id => await this.getResource(`users?id=${id}`)

  getComments = async id => await this.getResource(`comments?postId=${id}`)
}
