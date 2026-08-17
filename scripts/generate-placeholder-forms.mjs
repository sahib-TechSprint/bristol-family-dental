// Writes minimal placeholder PDFs for the new patient forms so the download
// links work from day one. The office will supply the final registration
// forms; drop them into public/forms/ with the same file names.
// Run with: node scripts/generate-placeholder-forms.mjs

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function buildPdf(lines) {
  const encoder = new TextEncoder();
  const content = lines
    .map((line, index) => `BT /F1 ${index === 0 ? 20 : 12} Tf 72 ${720 - index * 28} Td (${line}) Tj ET`)
    .join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${encoder.encode(content).length} >>\nstream\n${content}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(encoder.encode(pdf).length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = encoder.encode(pdf).length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  return pdf;
}

await mkdir(path.join(root, "public/forms"), { recursive: true });

const en = buildPdf([
  "Bristol Family Dental Center",
  "",
  "New Patient Registration Form",
  "",
  "This is a placeholder document.",
  "The final registration form will be provided by the office.",
  "",
  "2618 S. Bristol St., Santa Ana, CA 92704",
  "Phone: (714) 540-7101",
]);

const es = buildPdf([
  "Bristol Family Dental Center",
  "",
  "Formulario de Registro para Pacientes Nuevos",
  "",
  "Este es un documento provisional.",
  "La oficina proporcionara el formulario final.",
  "",
  "2618 S. Bristol St., Santa Ana, CA 92704",
  "Telefono: (714) 540-7101",
]);

await writeFile(path.join(root, "public/forms/new-patient-en.pdf"), en);
await writeFile(path.join(root, "public/forms/new-patient-es.pdf"), es);
console.log("Wrote public/forms/new-patient-en.pdf and new-patient-es.pdf");
