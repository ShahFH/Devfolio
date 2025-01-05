export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="mt-16 border-t border-border py-6 text-center text-sm text-muted-foreground">
      <p>© {year} Devfolio by Shah Faisal. Built with Next.js and Tailwind CSS.</p>
    </footer>
  )
}

