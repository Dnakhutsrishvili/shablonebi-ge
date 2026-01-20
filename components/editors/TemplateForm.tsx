"use client";

import { useState } from "react";
import { Template } from "@/lib/types";
import { exportToDocx } from "@/lib/export";
import DocumentPreview from "./DocumentPreview";

interface TemplateFormProps {
  template: Template;
}

export default function TemplateForm({ template }: TemplateFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isExporting, setIsExporting] = useState(false);

  const handleChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportToDocx(template, formData);
    } catch (error) {
      console.error("Export failed:", error);
      alert("ექსპორტი ვერ მოხერხდა");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side: Form */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-6">შეავსეთ ფორმა</h2>

        {template.sections.map((section) => (
          <div key={section.id} className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b">
              {section.title}
            </h3>

            <div className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  <input
                    type={field.type === "number" ? "number" : "text"}
                    value={formData[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleExport}
          disabled={isExporting}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isExporting ? "იტვირთება..." : "გადმოწერა DOCX"}
        </button>
      </div>

      {/* Right Side: Live Preview */}
      <div className="lg:sticky lg:top-8 h-fit">
        <h2 className="text-xl font-semibold mb-4">გადახედვა</h2>
        <DocumentPreview template={template} data={formData} />
      </div>
    </div>
  );
}
