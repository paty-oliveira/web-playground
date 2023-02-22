export default class OrdersAnalyzer {
    constructor() {
        this.weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    }

    averageDailySales(productId, orders) {
        let dailySales = {
            "SUNDAY": 0,
            "MONDAY": 0,
            "TUESDAY": 0,
            "WEDNESDAY": 0,
            "THURSDAY": 0,
            "FRIDAY": 0,
            "SATURDAY": 0,
        }

        const ordersList = orders.orders;
        let quantity = 0

        for (let orderIndex in ordersList){
            let creationDate = new Date(ordersList[orderIndex].creationDate);
            let day = this.weekdays[creationDate.getDay()];

            let orderLinesList = ordersList[orderIndex].orderLines

            for (let orderLineIndex in orderLinesList) {
                if (orderLinesList[orderLineIndex].productId === productId){
                    quantity = orderLinesList[orderLineIndex].quantity
                    dailySales[day] += quantity
                }
            }
        }
        return dailySales
    }
}
