import { useState, useEffect } from 'react'

// Mock data for demonstration
const mockPosts = [
  { id: 1, title: 'Introduction to React', category: 'React', content: 'React is a popular JavaScript library for building user interfaces...' },
  { id: 2, title: 'Getting Started with Next.js', category: 'Next.js', content: 'Next.js is a React framework that enables server-side rendering...' },
  { id: 3, title: 'CSS-in-JS vs CSS Modules', category: 'CSS', content: 'When it comes to styling in React applications, there are several approaches...' },
  { id: 4, title: 'State Management in React', category: 'React', content: 'Managing state in React applications can be challenging as they grow in complexity...' },
  { id: 5, title: 'Building APIs with Next.js', category: 'Next.js', content: 'Next.js provides an easy way to build API routes within your application...' },
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [results, setResults] = useState(mockPosts)

  useEffect(() => {
    const filteredResults = mockPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === '' || post.category === filterCategory)
    )
    setResults(filteredResults)
  }, [searchTerm, filterCategory])

  return (
    <div className="min-h-screen bg-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-100 mb-8 text-center">Search</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border bg-slate-300 placeholder:text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
           
          </div>
          
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none w-full px-4 py-2 border bg-slate-300 text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-8"
            >
              <option value="">All Categories</option>
              <option value="React">React</option>
              <option value="Next.js">Next.js</option>
              <option value="CSS">CSS</option>
            </select>
        
          </div>
        </div>

        <div className="bg-slate-300 shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {results.map(post => (
              <li key={post.id} className="px-4 py-4 sm:px-6 hover:bg-slate-200 transition duration-150 ease-in-out">
                <h2 className="text-lg font-medium text-orange-600 font-sans truncate">{post.title}</h2>
                <p className="mt-1 text-sm text-gray-800 font-serif">Category: {post.category}</p>
                <p className="mt-2 text-sm text-slate-700 font-mono line-clamp-2">{post.content}</p>
              </li>
            ))}
          </ul>
          {results.length === 0 && (
            <p className="text-center py-4 text-red-500">No results found</p>
          )}
        </div>
      </div>
    </div>
  )
}

