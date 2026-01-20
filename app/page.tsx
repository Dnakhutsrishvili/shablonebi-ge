import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TemplateCard from "@/components/ui/TemplateCard";
import Link from "next/link";
import { templates, categories } from "@/lib/templates";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            უფასო დოკუმენტის შაბლონები
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ხელშეკრულებები, CV-ები, განცხადებები და სხვა დოკუმენტები. შეავსე
            ონლაინ და გადმოწერე Word ან PDF ფორმატში.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-12">
            <div>
              <div className="text-3xl font-bold">{templates.length}+</div>
              <div className="text-blue-200">შაბლონი</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-blue-200">გადმოწერა</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-200">უფასო</div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">კატეგორიები</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className={`p-6 rounded-xl bg-gradient-to-br ${cat.color} text-white hover:scale-105 transition-transform`}
              >
                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-white/80 text-sm">{cat.description}</p>
                <div className="mt-4 text-sm font-medium">
                  {templates.filter((t) => t.category === cat.id).length}{" "}
                  შაბლონი →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Templates */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            ყველა შაბლონი
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
