import { projects as allProjects } from "@/data/projects";   /* is file me projects ko allProjects
ka  name diya hua hai */

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const currentProject = allProjects.find(
    (item) => item.slug === slug
  );

  if (!currentProject) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold">
        {currentProject.title}
      </h1>

      <p className="mt-2 text-gray-500">
        {currentProject.role}
      </p>

      <p className="mt-6 text-gray-700 max-w-2xl">
        {currentProject.outcome}
      </p>
    </main>
  );
}
