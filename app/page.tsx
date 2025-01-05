import { Profile } from "@/components/profile"
import { SocialLinks } from "@/components/social-links"
import { RecentPosts } from "@/components/recent-posts"
import { getAllPosts } from "@/lib/posts"

export default async function Home() {
  const allPosts = await getAllPosts()
  const recentPosts = allPosts.slice(0, 3)
  
  return (
    <div className="space-y-16">
      <Profile />
      <SocialLinks />
      <RecentPosts posts={recentPosts} />
    </div>
  )
}

