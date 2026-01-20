import { Document, Paragraph, TextRun, HeadingLevel, Packer } from "docx";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import { Template } from "./types";

// Replace {placeholders} with actual values
function fillText(text: string, data: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] || match;
  });
}

// ============================================
// DOCX EXPORT
// ============================================
export async function exportToDocx(
  template: Template,
  data: Record<string, string>,
) {
  const paragraphs: Paragraph[] = [];

  paragraphs.push(
    new Paragraph({
      text: template.title,
      heading: HeadingLevel.HEADING_1,
    }),
  );

  paragraphs.push(new Paragraph({ text: "" }));

  template.sections.forEach((section) => {
    paragraphs.push(
      new Paragraph({
        text: section.title,
        heading: HeadingLevel.HEADING_2,
      }),
    );

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

    paragraphs.push(new Paragraph({ text: "" }));
  });

  const doc = new Document({
    sections: [
      {
        children: paragraphs,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${template.slug}.docx`);
}

// ============================================
// PDF EXPORT
// ============================================
export async function exportToPdf(
  template: Template,
  data: Record<string, string>,
) {
  const doc = new jsPDF();

  let y = 20; // Starting Y position
  const marginLeft = 20;
  const pageWidth = doc.internal.pageSize.getWidth();

  // Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(template.title, pageWidth / 2, y, { align: "center" });
  y += 15;

  // Line under title
  doc.setLineWidth(0.5);
  doc.line(marginLeft, y, pageWidth - marginLeft, y);
  y += 15;

  // Sections
  template.sections.forEach((section) => {
    // Check if we need a new page
    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    // Section title
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(section.title, marginLeft, y);
    y += 10;

    // Section fields
    doc.setFontSize(11);
    section.fields.forEach((field) => {
      const value = data[field.id] || "________________";

      // Check if we need a new page
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.text(`${field.label}: `, marginLeft, y);

      const labelWidth = doc.getTextWidth(`${field.label}: `);
      doc.setFont("helvetica", "normal");
      doc.text(value, marginLeft + labelWidth, y);

      y += 8;
    });

    y += 10; // Space after section
  });

  // Signature area
  if (y > 220) {
    doc.addPage();
    y = 20;
  }

  y += 20;
  doc.setLineWidth(0.3);

  // Two signature lines
  doc.text("ხელმოწერა: ", marginLeft, y);
  doc.line(marginLeft + 30, y, marginLeft + 80, y);

  doc.text("ხელმოწერა: ", pageWidth / 2, y);
  doc.line(pageWidth / 2 + 30, y, pageWidth / 2 + 80, y);

  // Save
  doc.save(`${template.slug}.pdf`);
}
