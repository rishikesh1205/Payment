export const getPastPayments=()=>{
  return (
    [
      {
        id: 1,
        accountNumber: "8798987934",
        paymentDate: "26 AUG 2017",
        amount: "890",
        paymentMethod: "CC#:*************4321",
        paymentTime: "06:45AM",
        invoiceId: "987576765",
        success: true,
        message: "transaction successfull"
      },
      {
        id: 2,
        accountNumber: "8798987934",
        paymentDate: "18 AUG 2017",
        amount: "890",
        paymentMethod: "CC#:*************4321",
        paymentTime: "06:45AM",
        invoiceId: "987576765",
        success: true,
        message: "transaction successfull"
      },
      {
        id: 3,
        accountNumber: "98789783435",
        paymentDate: "22 AUG 2017",
        amount: "890",
        paymentMethod: "CC#:*************4321",
        paymentTime: "06:45AM",
        invoiceId: "987576765",
        success: false,
        message: "transaction failed"
      },
      {
        id: 4,
        accountNumber: "98789783435",
        paymentDate: "22 AUG 2017",
        amount: "890",
        paymentMethod: "CC#:*************4321",
        paymentTime: "06:45AM",
        invoiceId: "987576765",
        success: false,
        message: "transaction failed"
      },
      {
        id: 5,
        accountNumber: "8798987934",
        paymentDate: "26 AUG 2017",
        amount: "890",
        paymentMethod: "CC#:*************4321",
        paymentTime: "06:45AM",
        invoiceId: "987576765",
        success: true,
        message: "transaction successfull"
      }
    ]
  )
}
export const getPaymentDue=()=>({
  accountNumber: "12837982174",
  dueDate: "22/02/2018",
  amount: "2380"
});
