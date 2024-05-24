import { PDFDocument, HelveticaBold, HelveticaBoldOblique, rgb } from "pdf-lib";

export async function createPdf(orderData) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  const { height } = page.getSize();
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

  page.drawText(`LWSKart Invoice`, {
    x: 200,
    y: height - 3 * fontSize,
    size: 30,
    font: HelveticaBold,
    color: rgb(0, 0.2, 0.4),
  });
  page.drawText(`Name: ${firstName} ${lastName}`, {
    x: 50,
    y: height - 6 * fontSize,
    size: fontSize,
    font: HelveticaBoldOblique,
    color: rgb(0, 0.2, 0.4),
  });
  page.drawText(`Email: ${email}`, {
    x: 50,
    y: height - 7 * fontSize,
    size: fontSize,
    font: HelveticaBoldOblique,
    color: rgb(0, 0.2, 0.4),
  });
  page.drawText(`Country: ${country}`, {
    x: 50,
    y: height - 8 * fontSize,
    size: fontSize,
    font: HelveticaBoldOblique,
    color: rgb(0, 0.2, 0.4),
  });
  page.drawText(`City: ${city}`, {
    x: 50,
    y: height - 9 * fontSize,
    size: fontSize,
    font: HelveticaBoldOblique,
    color: rgb(0, 0.2, 0.4),
  });
  page.drawText(`Street Address: ${streetAddress}`, {
    x: 50,
    y: height - 10 * fontSize,
    size: fontSize,
    font: HelveticaBoldOblique,
    color: rgb(0, 0.2, 0.4),
  });
  page.drawText(`Phone Number: ${phoneNumber}`, {
    x: 50,
    y: height - 11 * fontSize,
    size: fontSize,
    font: HelveticaBoldOblique,
    color: rgb(0, 0.2, 0.4),
  });
  products.map(
    (product, idx) => (
      page.drawText(`${idx + 1}.Name: ${product.name}`, {
        x: 50,
        y: height - (13 + 4 * idx) * fontSize,
        size: fontSize,
        font: HelveticaBoldOblique,
        color: rgb(0, 0.2, 0.4),
      }),
      page.drawText(`Quantity: ${product.items}`, {
        x: 60,
        y: height - (14 + 4 * idx) * fontSize,
        size: fontSize,
        font: HelveticaBoldOblique,
        color: rgb(0, 0.2, 0.4),
      }),
      page.drawText(`Price: ${product.price}`, {
        x: 60,
        y: height - (15 + 4 * idx) * fontSize,
        size: fontSize,
        font: HelveticaBoldOblique,
        color: rgb(0, 0.2, 0.4),
      })
    )
  );

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  return { url, pdfBytes: Buffer.from(pdfBytes) };
}
