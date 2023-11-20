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
  const news = await getData()
  // console.log(news)
  return (
    <main className='flex min-h-screen mx-auto'>

      <SideBar />

      <Feed />

      <Widgets news={news.articles} />

    </main>
  )
}


