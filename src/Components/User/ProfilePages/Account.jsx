import InvoicePage from '../Checkout/InvoicePage';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { sendInvoice } from '../../../ApiCalls/ordersApiCalls';

const Account = () => {


  const generateHTML = async() => {
    html2canvas(document.querySelector("#invoice"))
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png', 1.0);

        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'pt',
          format: [612, 792]
        });
        pdf.internal.scaleFactor = 1;
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height)
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        sendInvoice(pdf.output('datauristring'))

      });
  }


  

  return (
    <div>
      <button onClick={() => generateHTML()}>Send PDF Invoice</button>

      <div id="invoice">
        <InvoicePage order={"642efd13b8b7c051cc50926c"} />
      </div>

    </div>
  )
}

export default Account