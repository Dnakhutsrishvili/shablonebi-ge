import Header from "@/components/layout/Header";
import TemplateForm from "@/components/editors/TemplateForm";
import { getTemplateBySlug } from "@/lib/templates";
import { notFound } from "next/navigation";

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {template.title}
        </h1>
        <p className="text-gray-600 mb-8">{template.description}</p>

        <div className="flex gap-4 mb-8 text-sm text-gray-500">
          <span>⭐ {template.rating}</span>
          <span>📥 {template.downloads} გადმოწერა</span>
        </div>

        <TemplateForm template={template} />
      </main>
    </div>
  );
}
