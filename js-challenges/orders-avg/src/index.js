export default class OrdersAnalyzer {
    constructor() {
        this.weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    }

    averageDailySales(productId, orders) {
        const listOfOrders = orders.orders;

        const dailyOrders = {}

        for (let order in listOfOrders) {
            let creationDate = new Date(listOfOrders[order].creationDate)
            let day = this.weekdays[creationDate.getDay()]; // improve that part by having a default obj with all the days
            dailyOrders[day] = 0

            const orderLines = listOfOrders[order].orderLines
            for (let item in orderLines) {
                if (orderLines[item].productId === productId)
                    dailyOrders[day] += orderLines[item].quantity
            }
        }

        for (let weekday in this.weekdays){ // this should be removed after
            if (!dailyOrders.hasOwnProperty(this.weekdays[weekday])){
                dailyOrders[this.weekdays[weekday]] = 0
            }
        }

        return dailyOrders
    }
}
