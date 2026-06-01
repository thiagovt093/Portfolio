export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thiago Vitor",
    url: "https://thiagovitor.dev",
    jobTitle: "Fullstack & Mobile Developer",
    description:
      "Fullstack & Mobile Developer focused on Java, Spring Boot, Next.js, Flutter and PostgreSQL",
    sameAs: [
      "https://github.com/thiagovt093",
      "https://www.linkedin.com/in/thiagovt093",
      "https://wa.me/5577988217247",
    ],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Next.js",
      "Flutter",
      "PostgreSQL",
      "TypeScript",
      "React",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}