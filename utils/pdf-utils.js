import {
  PDFDocument,
  StandardFonts,
  HelveticaBold,
  HelveticaBoldOblique,
  rgb,
} from "pdf-lib";

export async function pdfDownload(orderData) {
  const PDF_FILE_URL = "http://localhost:3000/pdf-lib_creation_example.pdf";

  function download(pdfBytes, fileName, mimeType) {
    const blob = new Blob([pdfBytes], { type: mimeType });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }

  async function createPdf() {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 16;

    const {
      city,
      country,
      email,
      firstName,
      lastName,
      phoneNumber,
      products,
      streetAddress,
    } = orderData;

    page.drawText("LWSKart Invoice", {
      x: 200,
      y: height - 3 * fontSize,
      size: 30,
      font: HelveticaBold,
      color: rgb(0, 0.53, 0.71),
    });
    page.drawText(`Name: ${firstName} ${lastName}`, {
      x: 50,
      y: height - 5 * fontSize,
      size: fontSize,
      font: HelveticaBoldOblique,
      color: rgb(0, 0.53, 0.71),
    });
    page.drawText(`Email: ${email}`, {
      x: 50,
      y: height - 6 * fontSize,
      size: fontSize,
      font: HelveticaBoldOblique,
      color: rgb(0, 0.53, 0.71),
    });
    page.drawText(`Country: ${country}`, {
      x: 50,
      y: height - 7 * fontSize,
      size: fontSize,
      font: HelveticaBoldOblique,
      color: rgb(0, 0.53, 0.71),
    });
    page.drawText(`City: ${city}`, {
      x: 50,
      y: height - 8 * fontSize,
      size: fontSize,
      font: HelveticaBoldOblique,
      color: rgb(0, 0.53, 0.71),
    });
    page.drawText(`Street Address: ${streetAddress}`, {
      x: 50,
      y: height - 9 * fontSize,
      size: fontSize,
      font: HelveticaBoldOblique,
      color: rgb(0, 0.53, 0.71),
    });
    page.drawText(`Phone Number: ${phoneNumber}`, {
      x: 50,
      y: height - 10 * fontSize,
      size: fontSize,
      font: HelveticaBoldOblique,
      color: rgb(0, 0.53, 0.71),
    });

    products.map(
      (product, idx) => (
        page.drawText(`Product ${idx + 1}`, {
          x: 50,
          y: height - (14 + 5 * idx) * fontSize,
          size: fontSize,
          font: HelveticaBoldOblique,
          color: rgb(0, 0.53, 0.71),
        }),
        page.drawText(`Name: ${product.name}`, {
          x: 80,
          y: height - (15 + 5 * idx) * fontSize,
          size: fontSize,
          font: HelveticaBoldOblique,
          color: rgb(0, 0.53, 0.71),
        }),
        page.drawText(`Quantity: ${product.items}`, {
          x: 80,
          y: height - (16 + 5 * idx) * fontSize,
          size: fontSize,
          font: HelveticaBoldOblique,
          color: rgb(0, 0.53, 0.71),
        }),
        page.drawText(`Price: ${product.price}`, {
          x: 80,
          y: height - (17 + 5 * idx) * fontSize,
          size: fontSize,
          font: HelveticaBoldOblique,
          color: rgb(0, 0.53, 0.71),
        })
      )
    );

    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
  }

  createPdf(PDF_FILE_URL);
}
