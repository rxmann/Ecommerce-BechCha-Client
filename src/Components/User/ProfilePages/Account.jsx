import InvoicePage from '../Checkout/InvoicePage';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { sendInvoice } from '../../../ApiCalls/ordersApiCalls';

const Account = () => {


  const sendEmailInv = async() => {
      await sendInvoice("642efd13b8b7c051cc50926c")
  }


  

  return (
    <div>
      <button onClick={() => sendEmailInv()}>Send PDF Invoice</button>
    </div>
  )
}

export default Account