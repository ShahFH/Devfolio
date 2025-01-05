import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Profile() {
  return (
    <section className="text-center">
      <Avatar className="mx-auto h-24 w-24 border-2 border-border">
        <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQF_Be7R-Sk-Kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722936187589?e=1741219200&v=beta&t=aJ-qwFlSfVHAvI8EKzpingk01vFmq3GLV1LSQYCm_Cw" alt="Profile picture" />
        <AvatarFallback>SF</AvatarFallback>
      </Avatar>
      <h1 className="mt-6 text-2xl font-bold">Shah Faisal</h1>
      <p className="mt-2 text-muted-foreground">Full Stack Developer | Web Designer | Content Creator</p>
      
      <div className="mt-8 space-y-6 text-left">
        <p className="leading-relaxed">
          I'm a passionate Full Stack Developer and Web Designer based in Kabul, Afghanistan. With over 2 years of experience,
          I specialize in creating responsive and user-friendly web Design and development for startups, established businesses, and open-source projects.
        </p>
      
        <p className="leading-relaxed">
          My expertise spans the entire web design and development process:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>UI/UX Design: Creating intuitive and visually appealing interfaces</li>
          <li>Frontend: Building responsive and interactive user experiences</li>
          <li>Backend: Developing robust server-side applications</li>
          <li>DevOps: Streamlining deployment and maintenance processes</li>
        </ul>
      </div>
    </section>
  )
}

