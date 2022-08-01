import axios from "axios"


class OrderService{

    saveOrder = async (data)=>{


        let promise = new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/rental_system_war/api/order",data)
                .then((res)=>{
                    return resolve(res)

                })
                .catch((err)=>{
                    return resolve(err)
                })

        })

        return  await promise;


    }

    getLastOrderId = async ()=>{
        let promise = new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/rental_system_war/api/order/lastOrderId")
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{
                    return resolve(err)
                })



        })


        return  await promise;





    }






}

export default new OrderService();