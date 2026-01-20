import Header from "@/components/layout/Header";
import Link from "next/link";
import { templates, categories } from "@/lib/templates";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          უფასო დოკუმენტის შაბლონები
        </h1>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">კატეგორიები</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">შაბლონები</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template) => (
              <Link
                href={`/templates/${template.slug}`}
                key={template.id}
                className="block p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg">{template.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {template.description}
                </p>
                <p className="text-sm text-gray-500">
                  ⭐ {template.rating} · 📥 {template.downloads} გადმოწერა
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
