
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
    nameUser: string,
    id: number,
    category: string,
    user: string,
    password: string,
    
}
interface IProduct
{
    namePd: string,
    id: number,
    category: string,
    image: string,
    destination: string,
}

interface ICard
{
    namePd: string,
    id: number,
    category: string,
    soLuong:number
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

