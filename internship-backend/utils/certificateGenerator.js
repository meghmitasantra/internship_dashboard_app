const PDFDocument = require('pdfkit');

function generateCertificatePDF({ userName, projectName, completionDate }) {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

  doc.fontSize(20).text('Certificate of Completion', { align: 'center' });
  doc.moveDown();

  doc.fontSize(16).text(`This is to certify that`, { align: 'center' });
  doc.moveDown();

  doc.font('Helvetica-Bold').fontSize(22).text(userName, { align: 'center' });
  doc.moveDown();

  doc.font('Helvetica').fontSize(16).text(`has successfully completed the project`, { align: 'center' });
  doc.moveDown();

  doc.font('Helvetica-Bold').fontSize(20).text(projectName, { align: 'center' });
  doc.moveDown();

  doc.font('Helvetica').fontSize(16).text(`on ${completionDate}`, { align: 'center' });
  doc.moveDown(3);

  doc.fontSize(14).text('Congratulations!', { align: 'center' });
  doc.end();

  return doc;
}

module.exports = { generateCertificatePDF };