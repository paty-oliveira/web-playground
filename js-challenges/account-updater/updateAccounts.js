const sortByIdAsc = (obj) => {
	return obj.sort((a, b) => a.Id - b.Id)
}

function updateAccounts(accounts, logons) {
	sortByIdAsc(accounts.Accounts);
	sortByIdAsc(logons.Logons);

	logons.Logons.forEach((logonEntry, index) => {

		if (logonEntry.Id === accounts.Accounts[index]?.Id && logonEntry.Date > accounts.Accounts[index]?.LastLogon) {
			accounts.Accounts[index].LogonCount ++;
			accounts.Accounts[index].LastLogon = logonEntry.Date;

		} else {
			accounts.Accounts.push(
				{
					"Id": logonEntry.Id,
					"Name": logonEntry.Name,
					"LogonCount": 1,
					"LastLogon": logonEntry.Date
				}
			);
		}
	})

	return accounts
}

module.exports = updateAccounts;