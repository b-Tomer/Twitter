import Feed from '../../components/Feed'
import SideBar from '../../components/SideBar'
import Widgets from '../../components/Widgets'

export default function Home() {
  return (
    <main className='flex min-h-screen max-w-7xl mx-auto'>

      <SideBar />

      <Feed />

      <Widgets />

    </main>
  )
}
