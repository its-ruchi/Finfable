import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

const blogs = [
  {
    id: "1",
    title: "The Power of Compound Interest",
    author: "Warren Buffett",
    excerpt: "Learn how compound interest can dramatically grow your wealth over time.",
    date: "2023-05-15",
  },
  {
    id: "2",
    title: "Building a Successful Start-up",
    author: "Elon Musk",
    excerpt: "Insights into creating and scaling a successful start-up in today's competitive market.",
    date: "2023-06-22",
  },
  {
    id: "3",
    title: "Investing in Emerging Technologies",
    author: "Mark Zuckerberg",
    excerpt: "Explore the potential of investing in AI, VR, and other emerging technologies.",
    date: "2023-07-10",
  },
]

export default function Blogs() {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-primary">Entrepreneur Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => {
          const variants: Array<'visual' | 'whatif' | 'achievement' | 'family'> = ['visual', 'whatif', 'achievement']
          const variant = variants[i] ?? 'visual'
          return (
            <Card key={blog.id} variant={variant} className="p-6 rounded-xl hover-lift">
              <CardHeader>
                <CardTitle className="card-accent">{blog.title}</CardTitle>
                <CardDescription className={`text-muted-foreground opacity-75`}>By {blog.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{blog.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className={`text-sm text-muted-foreground opacity-75`}>{blog.date}</span>
                <Link href={`/blogs/${blog.id}`} className={`text-primary hover:underline`}>
                  Read more
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

