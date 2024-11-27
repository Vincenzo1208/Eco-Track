import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { FaUser, FaComment, FaThumbsUp } from 'react-icons/fa';

export default function CommunityForum() {
  const posts = [
    { id: 1, author: 'EcoWarrior', title: 'Tips for reducing plastic waste', comments: 5, likes: 12 },
    { id: 2, author: 'GreenThumb', title: 'Starting a community garden', comments: 8, likes: 20 },
    { id: 3, author: 'RecycleHero', title: 'DIY recycling projects', comments: 3, likes: 7 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="p-4 md:ml-64 pt-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Community Forum</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            {posts.map((post) => (
              <div key={post.id} className="border-b border-gray-200 py-4 last:border-b-0">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <FaUser className="mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <FaComment className="mr-2" />
                  <span className="mr-4">{post.comments} comments</span>
                  <FaThumbsUp className="mr-2" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
            ))}
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
              Create New Post
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

