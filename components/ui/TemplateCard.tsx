import Link from "next/link";
import { Template } from "@/lib/types";

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300"
    >
      {/* Preview Image Area */}
      <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
        <div className="w-20 h-28 bg-white rounded shadow-md flex items-center justify-center">
          <div className="space-y-2 px-3">
            <div className="h-2 bg-gray-300 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-3/5"></div>
          </div>
        </div>

        {/* Featured Badge */}
        {template.featured && (
          <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full">
            პოპულარული
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {template.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <span className="flex items-center gap-1">
              ⭐ {template.rating}
            </span>
            <span className="flex items-center gap-1">
              📥 {template.downloads.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-1">
            {template.formats.map((format) => (
              <span
                key={format}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded uppercase"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
