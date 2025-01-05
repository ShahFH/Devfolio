import { PostsList } from "@/components/posts-list"
import { getAllPosts } from "@/lib/posts"

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[690px] px-4 py-8 pt-24">
        <main className="mt-16">
          <h1 className="text-3xl font-bold mb-8">All Posts</h1>
          <PostsList posts={posts} />
        </main>
      </div>
    </div>
  )
}

