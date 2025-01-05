import Link from "next/link"
import { format } from 'date-fns'
import { Post } from "@/lib/posts"
import { Button } from "@/components/ui/button"

export function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Recent Posts</h2>
        <Button asChild variant="outline">
          <Link href="/posts">
            View all
          </Link>
        </Button>
      </div>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/posts/${post.slug}`}>
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              )}
              <time className="mt-2 block text-sm text-muted-foreground">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

