"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

// This would typically come from an API or database
const blogs = [
  {
    id: "1",
    title: "The Power of Compound Interest",
    author: "Warren Buffett",
    content:
      "Compound interest is the eighth wonder of the world. He who understands it, earns it ... he who doesn't ... pays it. Compound interest is the most powerful force in the universe. It is the concept of adding interest to the principal sum of a loan or deposit, or in other words, interest on interest. It makes a sum of money grow at a faster rate than simple interest, which is calculated only on the principal amount. This concept is central to saving and investing, and understanding it can greatly impact your financial future.",
    date: "2023-05-15",
  },
  {
    id: "2",
    title: "Building a Successful Start-up",
    author: "Elon Musk",
    content:
      "Building a successful start-up is about solving problems and creating value. It's not just about having a great idea, but about executing that idea effectively. This involves understanding your market, building a great team, being adaptable, and persevering through challenges. Remember, every big company started as a small start-up. The key is to stay focused on your vision while being flexible enough to pivot when necessary. Embrace failure as a learning opportunity and always strive to innovate.",
    date: "2023-06-22",
  },
  {
    id: "3",
    title: "Investing in Emerging Technologies",
    author: "Mark Zuckerberg",
    content:
      "Investing in emerging technologies is about looking to the future and identifying trends that will shape our world. Technologies like artificial intelligence, virtual reality, and blockchain have the potential to revolutionize industries and create new opportunities. However, investing in these areas requires careful research and a tolerance for risk. It's important to understand the technology, its potential applications, and the competitive landscape. While these investments can be volatile, they also offer the potential for significant returns if you identify the right opportunities early.",
    date: "2023-07-10",
  },
]

export default function BlogPost() {
  const params = useParams()
  const [blog, setBlog] = useState<(typeof blogs)[0] | null>(null)

  useEffect(() => {
    const blogPost = blogs.find((b) => b.id === params.id)
    if (blogPost) {
      setBlog(blogPost)
    }
  }, [params.id])

  if (!blog) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">{blog.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            By {blog.author} | {blog.date}
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-foreground whitespace-pre-wrap">{blog.content}</p>
        </CardContent>
      </Card>
      <div className="mt-6">
        <Button asChild variant="outline">
          <Link href="/blogs">Back to Blogs</Link>
        </Button>
      </div>
    </div>
  )
}

