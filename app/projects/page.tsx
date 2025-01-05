import { projects } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button asChild variant="outline" size="sm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

