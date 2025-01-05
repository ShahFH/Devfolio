"use client"

import { getPost, getAllPosts } from "@/lib/posts"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { CodeBlock } from "@/components/code-block"
import Image from "next/image"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const components = {
  pre: CodeBlock,
  img: (props: any) => (
    <div className="my-8">
      <Image
        {...props}
        width={700}
        height={475}
        className="rounded-lg object-cover"
        alt={props.alt || "Blog post image"}
      />
    </div>
  ),
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 pl-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 pl-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
  ),
  strong: (props: any) => <strong className="font-bold" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPost(params.slug)
      if (!fetchedPost) {
        notFound()
      }
      setPost(fetchedPost)
    }
    fetchPost()
  }, [params.slug])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsSticky(offset > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className={`fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm transition-all duration-300 ${isSticky ? 'py-4 shadow-md' : 'py-8'}`}>
        <div className="mx-auto max-w-[690px] px-4">
          <Link href="/posts" className="inline-flex items-center text-primary hover:text-primary/80 mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Link>
          <h1 className={`text-2xl font-bold text-foreground transition-all duration-300 ${isSticky ? 'text-xl' : 'text-3xl'}`}>
            {post.title}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[690px] px-4 py-8 pt-32">
        <main>
          <article className="prose dark:prose-invert max-w-none">
            <time className="text-sm text-muted-foreground block mb-8">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <MDXRemote source={post.content} components={components} />
          </article>
        </main>
      </div>
    </div>
  )
}

