import OrdersAnalyzer from "../src/index";
import * as matchers from './matchers';
const orders = require("./stationery-data.js")

describe('OrdersAnalyzer', () => {
    const analyzer = new OrdersAnalyzer();

    it('should return an empty report when the productId is not in the orders list', function () {
        const productId = 1;
        const actualResult = analyzer.averageDailySales(productId, orders);
        const expectedResult = {
            "SUNDAY": 0,
            "MONDAY": 0,
            "TUESDAY": 0,
            "WEDNESDAY": 0,
            "THURSDAY": 0,
            "FRIDAY": 0,
            "SATURDAY": 0,
        }

        expect(actualResult).toEqual(expectedResult)
    });

    it('should return the report for the productId 1746', () => {
        const productId = 9872;
        const actualResult = analyzer.averageDailySales(productId, orders);
        const expectedResult = {
            "SUNDAY": 4,
            "MONDAY": 3,
            "TUESDAY": 0,
            "WEDNESDAY": 0,
            "THURSDAY": 0,
            "FRIDAY": 0,
            "SATURDAY": 4
        }

        expect(actualResult).toEqual(expectedResult);
    })
});
