import React from 'react'
import { sendInvoice } from '../../../ApiCalls/ordersApiCalls'
import ReactDOMServer from 'react-dom/server';
import InvoicePage from '../Checkout/InvoicePage';
import { useState } from 'react';
import { ServerStyleSheet } from 'styled-components';



const Account = () => {

  const [invoiceComponent, setInvoiceComponent] = useState(null);

  const sheet = new ServerStyleSheet();


  const send = async () => {
    const invoice = <InvoicePage order={"642efd13b8b7c051cc50926c"} />
    // Render the InvoicePage component to an HTML string with included CSS styles
    const htmlString = ReactDOMServer.renderToString(
      sheet.collectStyles(invoice)
    );
    const styleTags = sheet.getStyleTags();

    const invoiceHTML = `${htmlString}${styleTags}`;
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