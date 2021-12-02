/*
expense {
    date : Date
    desc : string
    category : string
    price : int
}

month {
    month : string
    week1 : [expense]
    week2 : [expense]
    week3 : [expense]
    week4 : [expense]
}

*/

const getToday = () => {
    var today = new Date()
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = mm + '/' + dd + '/' + yyyy;
    return today
}
const getLastDate = (mm, yyyy) => {
    return new Date(yyyy, mm, 0).getDate()
}

const getSevenDays = (today) => {
    const sevenDays = [today]
    var newDate = new Date()
    let dd = newDate.getDate()
    let mm = newDate.getMonth() + 1;
    let yyyy = newDate.getFullYear();

    for (var i = 1; i < 7; i++) {
        // if today is the first day of the month
        if (dd - 1 <= 0) {
            dd = getLastDate(mm, yyyy) - 1
            // if today is JAN 
            if (mm == 1) {
                mm = 12
            }
            else {
                mm = newDate.getMonth()
            }

            if (mm == 12) {
                yyyy -= 1
            }
        } else {
            dd -= 1
        }



        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        sevenDays.push(mm + '/' + dd + '/' + yyyy)
    }
    return sevenDays
}
const generateMMDDYYYY = (date) => {
    let dd = date.getDate()
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return mm + '/' + dd + '/' + yyyy
}
const today = getToday()
const sevenDays = getSevenDays(today)

const mockData = {
    date: today,
    // 7 days
    sevenDayExpenses: [{

        date: sevenDays[0],
        expenses: [
            { id: 'id', description: 'walmart', category: 'grocery', price: 1 },
            { id: 'id', description: 'enmarket gas', category: 'transportation', price: 10 },
            { id: 'id', description: 'McDonald', category: 'restaurant', price: 10 },
            { id: 'id', description: 'earphone', category: 'e-commerce', price: 10 },
            { id: 'id', description: 'YMCA', category: 'health', price: 10 },
            { id: 'id', description: 'snacks', category: 'grocery', price: 10 }
        ]
    }, {
        date: sevenDays[1],
        expenses: [
            { id: 'id', description: 'k-mart', category: 'grocery', price: 10 },
            { id: 'id', description: 'vehicle registration', category: 'transportation', price: 10 },
            { id: 'id', description: 'uber', category: 'restaurant', price: 10 },
            { id: 'id', description: 'cigarette', category: 'e-commerce', price: 10 },
            { id: 'id', description: 'vape juice', category: 'health', price: 10 },
            { id: 'id', description: 'burger king', category: 'restaurant', price: 10 }
        ]
    }, {
        date: sevenDays[2],
        expenses: [
            { id: 'id', description: 'movie', category: 'entertainment', price: 10 },
            { id: 'id', description: 'soccer shoes', category: 'sports', price: 10 },
            { id: 'id', description: 'soccer ball', category: 'sports', price: 10 },
            { id: 'id', description: 'kroger', category: 'grocerty', price: 10 },
        ]
    }, {
        date: sevenDays[3],
        expenses: [
            { id: 'id', description: 'h-mart', category: 'grocery', price: 10 },
            { id: 'id', description: 'computer desk', category: 'e-commerce', price: 10 },
            { id: 'id', description: 'udemy course', category: 'education', price: 10 },
            { id: 'id', description: 'kids tablet', category: 'family', price: 10 },
        ]
    },
    ]

}

export default mockData


