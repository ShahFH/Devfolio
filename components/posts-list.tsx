import Link from "next/link"
import { format } from "date-fns"
import { Post } from "@/lib/posts"

export function PostsList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="group">
          <Link href={`/posts/${post.slug}`}>
            <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            {post.excerpt && (
              <p className="mt-2 text-muted-foreground line-clamp-2">{post.excerpt}</p>
            )}
            <time className="mt-2 block text-sm text-muted-foreground">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </Link>
        </article>
      ))}
    </div>
  )
}

