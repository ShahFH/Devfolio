import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <SocialLink href="https://github.com/ShahFH" icon={<Github className="h-5 w-5" />} label="GitHub" />
      <SocialLink href="https://www.linkedin.com/in/shah-faisal-h/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
      <SocialLink href="https://twitter.com/ShahFaisal_H" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
      <SocialLink href="mailto:shahfaisal.swe@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Button variant="outline" size="sm" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        {icon}
        {label}
      </a>
    </Button>
  )
}

