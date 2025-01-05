import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <TestimonialCard
        name="Jane Smith"
        role="Head of Engineering at TechCorp"
        image="/placeholder.svg"
        testimonial="An exceptional developer and leader. Their technical expertise and ability to guide teams make them stand out in the industry."
      />
      <TestimonialCard
        name="Mike Johnson"
        role="CTO at StartupX"
        image="/placeholder.svg"
        testimonial="A rare combination of technical excellence and leadership skills. They have the unique ability to transform complex ideas into successful products."
      />
    </div>
  )
}

function TestimonialCard({
  name,
  role,
  image,
  testimonial,
}: {
  name: string
  role: string
  image: string
  testimonial: string
}) {
  return (
    <Card className="bg-zinc-800/50 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-sm text-zinc-400">{role}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-300">{testimonial}</p>
      </CardContent>
    </Card>
  )
}

