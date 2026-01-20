// lib/types.ts

export interface TemplateField {
  id: string;
  label: string;
  type: "text" | "textarea" | "date" | "number" | "email" | "select";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export interface TemplateSection {
  id: string;
  title: string;
  fields: TemplateField[];
}

// NEW: Document structure for real formatting
export interface DocumentClause {
  number: string; // "1", "1.1", "2", etc.
  title?: string; // "ხელშეკრულების საგანი"
  content: string; // Text with {placeholders}
}

export interface Template {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  downloads: number;
  rating: number;
  formats: ("docx" | "pdf")[];
  featured: boolean;
  sections: TemplateSection[];

  // NEW: Document structure
  document: {
    title: string; // "შრომითი ხელშეკრულება №____"
    subtitle?: string; // Optional subtitle
    city?: string; // "ქ. თბილისი"
    dateFormat?: string; // How to show date
    parties: string[]; // Intro paragraphs for each party
    clauses: DocumentClause[]; // Main content
    signatures: {
      left: string; // "დამსაქმებელი"
      right: string; // "დასაქმებული"
    };
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}
