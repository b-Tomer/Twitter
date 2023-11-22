import Feed from '../../components/Feed'
import SideBar from '../../components/SideBar'
import Widgets from '../../components/Widgets'

export default async function Home() {
  async function getData() {
    const newsResult = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
    if (!newsResult.ok) {
      throw new Error('Failed to fetch data')
    }

    return newsResult.json()
  }

  
  async function getUsers() {
    const users = await fetch('https://randomuser.me/api/?results=50&inc=name,picture,login')
    if (!users.ok) {
      throw new Error('Failed to fetch data')
    }

    return users.json()
  }

  

  const news = await getData()
  const users = await getUsers()
  return (
    <main className='flex min-h-screen mx-auto'>

      <SideBar />

      <Feed />

      <Widgets news={news.articles} users={users.results} />

    </main>
  )
}


