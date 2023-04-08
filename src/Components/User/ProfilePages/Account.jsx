import React from 'react'
import { sendInvoice } from '../../../ApiCalls/ordersApiCalls'
import ReactDOMServer from 'react-dom/server';
import InvoicePage from '../Checkout/InvoicePage';
import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas"




const Account = () => {

  const [invoiceComponent, setInvoiceComponent] = useState(null);


  const generatePDF = () => {
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: [612, 792]
      });
      pdf.internal.scaleFactor = 1;
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice-001.pdf');
    });
  }



  const send = async () => {
    const invoice = <InvoicePage order={"642efd13b8b7c051cc50926c"} />
    const invoiceHTML = ReactDOMServer.renderToString(invoice);
    console.log(invoice, invoiceHTML);
    await sendInvoice(invoiceHTML)
    setInvoiceComponent(invoice)
  }
  return (
    <div>
      <button onClick={() => send() }>Send Invoice</button>

      {invoiceComponent && invoiceComponent}

      
      </div>
  )
}

export default Account