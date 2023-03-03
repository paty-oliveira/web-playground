const updateAccounts = require('./updateAccounts');

describe('updateAccounts function', () => {

	describe('LogonCount parameter on Logon must be updated', () => {
		test('If the id account is found, the LogonCount must be incremented by 1', () => {
			const accounts = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 1
					},
				]
			};

			const logons = {
				"Logons": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"Date" : new Date(2017, 1, 14, 16, 15, 6, 111)
					},
				]
			};

			const actualResult = updateAccounts(accounts, logons);
			const expectedResult = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 2
					},
				]
			};

			expect(actualResult).toEqual(expectedResult);
		});

		test('If the id account is not found, the LogonCount must be set to 1', () => {
			const accounts = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 1
					},
				]
			};

			const logons = {
				"Logons": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"Date" : new Date(2017, 1, 14, 16, 15, 6, 111)
					},
					{
						"Id": 22,
						"Name": "Mary One",
						"Date" : new Date(2017, 1, 14, 17, 15, 6, 111)
					},
				]
			};

			const actualResult = updateAccounts(accounts, logons);
			const expectedResult = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 2
					},
					{
						"Id": 22,
						"Name": "Mary One",
						"LogonCount": 1
					}
				]
			};

			expect(actualResult).toEqual(expectedResult);
		})
	});

	describe('LastLogon parameter on Logon must be updated', () => {
		test('If LastLogon is older than the logon "Date" it will be set to the logon Date', () => {
			const accounts = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 1,
						"LastLogon":  new Date(2023, 3, 1, 16, 15, 6, 111)
					},
				]
			};

			const logons = {
				"Logons": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"Date" : new Date(2023, 3, 4, 10, 10, 10, 10)
					},
				]
			};

			const actualResult = updateAccounts(accounts, logons);
			const expectedResult = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 2,
						"LastLogon": new Date(2023, 3, 4, 10, 10, 10, 10)
					},
				]
			};

			expect(actualResult).toEqual(expectedResult);
		})

		test('If the id account is not found, the LastLogon must be equal to the same date on Logons', () => {
			const accounts = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 1,
						"LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
					},
				]
			};

			const logons = {
				"Logons": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"Date" : new Date(2018, 1, 14, 16, 15, 6, 111)
					},
					{
						"Id": 22,
						"Name": "Mary One",
						"Date" : new Date(2017, 1, 14, 17, 15, 6, 111)
					},
				]
			};

			const actualResult = updateAccounts(accounts, logons);
			const expectedResult = {
				"Accounts": [
					{
						"Id": 21,
						"Name": "John Shepherd",
						"LogonCount": 2,
						"LastLogon": new Date(2018, 1, 14, 16, 15, 6, 111)
					},
					{
						"Id": 22,
						"Name": "Mary One",
						"LogonCount": 1,
						"LastLogon": new Date(2017, 1, 14, 17, 15, 6, 111)
					}
				]
			};

			expect(actualResult).toEqual(expectedResult);
		})
	})
})