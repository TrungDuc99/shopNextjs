
interface IPayment
{
    name: string,
    paymentDate: number,
    amount: number,
    paymentType?: string,
    gatePayment: () => string
}



interface IUser
{
    name: string,
    id: number,
    category: string,
    user: string,
    password: string,
    
}


interface IProduct
{
    name: string,
    id: number,
    category: string,
}


const paymentCard: IPayment = {
    name: 'Momo:49230',
    paymentDate: 12354684561,
    amount: 100,
    gatePayment: () =>"Hello"
}
console.log(paymentCard.gatePayment())
// Tạo project bằng create next App
// Liên kết các Interface lại với nhau trong type script
//-Tạo sẵn 1 Interface có ID bên trong để demo getStaticPaths

