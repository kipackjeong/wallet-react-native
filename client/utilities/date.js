export const getToday = () => {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = "0" + dd;
	}
	if (mm < 10) {
		mm = "0" + mm;
	}
	var today = mm + "/" + dd + "/" + yyyy;
	return today;
};
export const getLastDateOfMonth = (mm, yyyy) => {
	return new Date(yyyy, mm, 0).getDate();
};

export const getSevenDays = (today) => {
	const sevenDays = [today];
	var newDate = new Date();
	let dd = newDate.getDate();
	let mm = newDate.getMonth() + 1;
	let yyyy = newDate.getFullYear();

	for (var i = 1; i < 7; i++) {
		// if today is the first day of the month
		if (dd - 1 <= 0) {
			dd = getLastDate(mm, yyyy) - 1;
			// if today is JAN
			if (mm == 1) {
				mm = 12;
			} else {
				mm = newDate.getMonth();
			}

			if (mm == 12) {
				yyyy -= 1;
			}
		} else {
			dd -= 1;
		}

		if (dd < 10) {
			dd = "0" + dd;
		}
		if (mm < 10) {
			mm = "0" + mm;
		}
		sevenDays.push(mm + "/" + dd + "/" + yyyy);
	}
	return sevenDays;
};

export const generateMMDDYYYY = (date) => {
	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	let yyyy = date.getFullYear();
	if (dd < 10) {
		dd = "0" + dd;
	}
	if (mm < 10) {
		mm = "0" + mm;
	}
	return mm + "/" + dd + "/" + yyyy;
};
