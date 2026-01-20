import { Template } from "@/lib/types";

interface DocumentPreviewProps {
  template: Template;
  data: Record<string, string>;
}

export default function DocumentPreview({
  template,
  data,
}: DocumentPreviewProps) {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-8 min-h-[600px]">
      {/* Document Title */}
      <h1 className="text-xl font-bold text-center mb-6 pb-4 border-b">
        {template.title}
      </h1>

      {/* Document Content */}
      <div className="space-y-6">
        {template.sections.map((section) => (
          <div key={section.id}>
            <h2 className="font-semibold text-gray-800 mb-3">
              {section.title}
            </h2>

            <div className="space-y-2">
              {section.fields.map((field) => {
                const value = data[field.id];
                const displayValue = value || "________________";
                const isEmpty = !value;

                return (
                  <p key={field.id} className="text-sm">
                    <span className="text-gray-600">{field.label}: </span>
                    <span
                      className={
                        isEmpty ? "text-gray-400" : "text-gray-900 font-medium"
                      }
                    >
                      {displayValue}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Signature Area */}
      <div className="mt-12 pt-8 border-t">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-8">დამსაქმებელი:</p>
            <div className="border-b border-gray-400 w-48"></div>
            <p className="text-xs text-gray-500 mt-1">ხელმოწერა</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-8">დასაქმებული:</p>
            <div className="border-b border-gray-400 w-48"></div>
            <p className="text-xs text-gray-500 mt-1">ხელმოწერა</p>
          </div>
        </div>
      </div>
    </div>
  );
}
