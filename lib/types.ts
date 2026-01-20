export interface TemplateField {
  id: string; // Unique identifier, e.g., "employee_name"
  label: string; // Georgian label: "სახელი და გვარი"
  type: "text" | "textarea" | "date" | "number" | "email" | "select";
  placeholder?: string; // Optional hint text
  required?: boolean; // Is this field mandatory?
  options?: { value: string; label: string }[]; // For select dropdowns
}

// A section groups related fields together
export interface TemplateSection {
  id: string;
  title: string; // "დამსაქმებელი" (Employer)
  fields: TemplateField[];
}

// The main Template type
export interface Template {
  id: string;
  slug: string; // URL-friendly name: "shromiti-khelshekruleba"
  category: string; // "khelshekrulebebi", "cv-reziume", etc.
  title: string; // "შრომითი ხელშეკრულება"
  description: string;
  downloads: number;
  rating: number;
  formats: ("docx" | "pdf")[];
  featured: boolean;
  sections: TemplateSection[]; // Form sections with fields
}

// Category type
export interface Category {
  id: string;
  name: string; // "ხელშეკრულებები"
  slug: string; // "khelshekrulebebi"
  description: string;
  color: string; // Tailwind gradient classes
}
