import { workExperiences } from "@/lib/work"
import { Badge } from "@/components/ui/badge"

export default function WorkPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
      {workExperiences.map((experience) => (
        <div key={experience.id} className="space-y-4 bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary">{experience.position}</h2>
          <h3 className="text-xl text-muted-foreground">{experience.company}</h3>
          <p className="text-sm text-muted-foreground">{experience.duration}</p>
          <p className="text-sm text-muted-foreground">{experience.location}</p>
          <p className="text-foreground">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

