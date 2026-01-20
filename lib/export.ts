import { Document, Paragraph, TextRun, HeadingLevel, Packer } from "docx";
import { saveAs } from "file-saver";
import { Template } from "./types";

// Replace {placeholders} with actual values
function fillText(text: string, data: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] || match;
  });
}

// Main export function
export async function exportToDocx(
  template: Template,
  data: Record<string, string>,
) {
  // Create paragraphs for the document
  const paragraphs: Paragraph[] = [];

  // Title
  paragraphs.push(
    new Paragraph({
      text: template.title,
      heading: HeadingLevel.HEADING_1,
    }),
  );

  // Add empty line
  paragraphs.push(new Paragraph({ text: "" }));

  // Add each section
  template.sections.forEach((section) => {
    // Section title
    paragraphs.push(
      new Paragraph({
        text: section.title,
        heading: HeadingLevel.HEADING_2,
      }),
    );

    // Section fields as text
    section.fields.forEach((field) => {
      const value = data[field.id] || "________________";
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${field.label}: `, bold: true }),
            new TextRun({ text: value }),
          ],
        }),
      );
    });

    // Empty line after section
    paragraphs.push(new Paragraph({ text: "" }));
  });

  // Create the document
  const doc = new Document({
    sections: [
      {
        children: paragraphs,
      },
    ],
  });

  // Generate and download
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${template.slug}.docx`);
}
