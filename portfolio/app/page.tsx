export default function Home() {
  return (
    <>
      <section id="home" className="min-h-[60vh] px-6 py-24" aria-label="Home">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Welcome to Fresh Egg Designs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Product design portfolio. Scroll or use the nav to explore sections.
          </p>
        </div>
      </section>
      <section id="about" className="min-h-[50vh] px-6 py-24 bg-muted/40" aria-label="About Me">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">About Me</h2>
          <p className="mt-4 text-muted-foreground">Content coming soon.</p>
        </div>
      </section>
      <section id="strategic-focus" className="min-h-[50vh] px-6 py-24" aria-label="Strategic Focus">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Strategic Focus</h2>
          <p className="mt-4 text-muted-foreground">Content coming soon.</p>
        </div>
      </section>
      <section id="case-studies" className="min-h-[50vh] px-6 py-24 bg-muted/40" aria-label="Case Studies">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Case Studies</h2>
          <p className="mt-4 text-muted-foreground">Content coming soon.</p>
        </div>
      </section>
      <section id="design-principles" className="min-h-[50vh] px-6 py-24" aria-label="Design Principles">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Design Principles</h2>
          <p className="mt-4 text-muted-foreground">Content coming soon.</p>
        </div>
      </section>
      <section id="contact" className="min-h-[50vh] px-6 py-24 bg-muted/40" aria-label="Contact">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
          <p className="mt-4 text-muted-foreground">Content coming soon.</p>
        </div>
      </section>
    </>
  );
}
