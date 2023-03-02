const updateLogonCount = (accounts, logons) => {
	logons.Logons.forEach((logonEntry, index) => {
		if (logonEntry.Id === accounts.Accounts[index]?.Id) {
			accounts.Accounts[index].LogonCount ++;
		} else {
			accounts.Accounts.push(
				{
					"Id": logonEntry.Id,
					"Name": logonEntry.Name,
					"LogonCount": 1
				}
			);
		}
	})

	return accounts
}


function updateAccounts(accounts, logons) {

	return updateLogonCount(accounts, logons)

}

module.exports = updateAccounts;