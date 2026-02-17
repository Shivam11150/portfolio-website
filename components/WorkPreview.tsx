
import Link from "next/link";
import HieeOneShopCard from "./HieeOneShopCard";
import CreativeGarmentsCard from "./CreativeGarmentsCard";
import SatnamTradersCard from "./SatnamTradersCard";
import KishanMitroCard from "./kishanmitro";

export default function WorkPreview() {
  return (
    <section
      id="work"
      className="relative bg-black"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-28">

        {/* Section heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Selected <span className="text-purple-400">Work</span>
          </h2>
          <p className="mt-2 text-gray-400 max-w-md">
           Products and systems I’ve worked on.
          </p>
        </div>

        {/* Projects list */}
        <div className="grid gap-6">
          <HieeOneShopCard />
          <CreativeGarmentsCard />
          <SatnamTradersCard />
          <KishanMitroCard />
        </div>


      </div>
    </section>
  );
}

/*
import { projects } from "@/data/projects";
import Link from "next/link";

export default function WorkPreview() {
  return (
    <section id="work" className="bg-background">
      <div className="max-w-5xl mx-auto px-6 py-24">

       
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Selected Work
          </h2>
          <p className="mt-1 text-textMuted">
            A few products and systems I’ve worked on
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="
                block
                bg-surface
                border border-borderSubtle
                rounded-xl
                p-6
                transition
                hover:border-primary
                hover:bg-surface/80
              "
            >
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-primary">
                {project.role}
              </p>

              <p className="mt-3 text-textMuted leading-relaxed">
                {project.outcome}
              </p>
            </Link>
          ))}
        </div>
/*
      </div>
    </section>
  );
}*/



/*
import { projects } from "@/data/projects";
import Link from "next/link";

export default function WorkPreview() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold">Selected Work</h2>
      

      <div className="mt-8 grid gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="block border p-6 rounded hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.role}</p>
            <p className="mt-2 text-gray-700">{project.outcome}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
*/