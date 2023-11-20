import { SparklesIcon } from '@heroicons/react/24/outline'
import Post from './Post'


function Feed() {
    const posts = [
        {
            'id':'1',
            'name': 'Tomer Benaim',
            'userName': '@bTomer',
            'userImg': 'https://avatars.githubusercontent.com/u/112409022?v=4',
            'img': 'https://images.unsplash.com/photo-1531564701487-f238224b7ce3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'text': 'Hey everybody this is my first post',
            'timeStamp': '2 hours ago'
        },
        {
            "id": "2",
            "name": "Alice Johnson",
            "userName": "@aliceJ",
            "userImg": "https://randomuser.me/api/portraits/women/1.jpg",
            "img": "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "Enjoying a beautiful day outdoors! 🌞 #NatureLover",
            "timeStamp": "5 hours ago"
          },
          {
            "id": "3",
            "name": "John Smith",
            "userName": "@johnS",
            "userImg": "https://randomuser.me/api/portraits/men/2.jpg",
            "img": "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "Coding all night! 💻 #DeveloperLife",
            "timeStamp": "10 hours ago"
          },
          {
            "id": "4",
            "name": "Emily Davis",
            "userName": "@emilyD",
            "userImg": "https://randomuser.me/api/portraits/women/3.jpg",
            "img": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "Just finished reading a great book! 📚 #Bookworm",
            "timeStamp": "15 hours ago"
          },
          {
            "id": "5",
            "name": "Daniel White",
            "userName": "@danielW",
            "userImg": "https://randomuser.me/api/portraits/men/4.jpg",
            "img": "https://plus.unsplash.com/premium_photo-1677347335105-1bd16607a25e?q=80&w=1067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "Exploring new places! 🗺️ #Traveler",
            "timeStamp": "20 hours ago"
          },
          {
            "id": "6",
            "name": "Sophie Miller",
            "userName": "@sophieM",
            "userImg": "https://randomuser.me/api/portraits/women/5.jpg",
            "img": "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "Movie night with friends! 🍿🎬 #FridayFun",
            "timeStamp": "1 day ago"
          },
          {
            "id": "7",
            "name": "Liam Taylor",
            "userName": "@liamT",
            "userImg": "https://randomuser.me/api/portraits/men/6.jpg",
            "img": "https://plus.unsplash.com/premium_photo-1685311280403-9a8084da26f3?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "text": "Sports day! 🏀⚽ #Fitness",
            "timeStamp": "2 days ago"
          }
        ]
    
  return (
    <div className='lg:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
           <h2 className='text-lg sm:text-xl font-bold cursor-pointer'> Home</h2>
           <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
            <SparklesIcon className='h-5' />
           </div>
        </div>

    {posts.map((post)=>(
        <Post post={post} key={post.id} />
    ))}

    </div>
  )
}

export default Feed