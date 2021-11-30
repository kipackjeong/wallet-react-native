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
const getSevenDays = (today) => {
    const sevenDays = [today]

    for (var i = 1; i < 7; i++) {
        var newDate = new Date()
        let dd = newDate.getDate() - i
        let mm = newDate.getMonth() + 1;
        let yyyy = newDate.getFullYear();

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
const today = getToday()
const sevenDays = getSevenDays(today)

console.log(sevenDays)

const mockData = {
    date: today,
    // 7 days
    sevenDayExpenses: [{
        date: sevenDays[0],
        expenses: [
            { description: 'walmart', category: 'grocery', price: 10 },
            { description: 'enmarket gas', category: 'transportation', price: 10 },
            { description: 'McDonald', category: 'restaurant', price: 10 },
            { description: 'earphone', category: 'e-commerce', price: 10 },
            { description: 'YMCA', category: 'health', price: 10 },
            { description: 'snacks', category: 'grocery', price: 10 }
        ]
    }, {
        date: sevenDays[1],
        expenses: [
            { description: 'k-mart', category: 'grocery', price: 10 },
            { description: 'vehicle registration', category: 'transportation', price: 10 },
            { description: 'uber', category: 'restaurant', price: 10 },
            { description: 'cigarette', category: 'e-commerce', price: 10 },
            { description: 'vape juice', category: 'health', price: 10 },
            { description: 'burger king', category: 'restaurant', price: 10 }
        ]
    }, {
        date: sevenDays[2],
        expenses: [
            { description: 'movie', category: 'entertainment', price: 10 },
            { description: 'soccer shoes', category: 'sports', price: 10 },
            { description: 'soccer ball', category: 'sports', price: 10 },
            { description: 'kroger', category: 'grocerty', price: 10 },
        ]
    }, {
        date: sevenDays[3],
        expenses: [
            { description: 'h-mart', category: 'grocery', price: 10 },
            { description: 'computer desk', category: 'e-commerce', price: 10 },
            { description: 'udemy course', category: 'education', price: 10 },
            { description: 'kids tablet', category: 'family', price: 10 },
        ]
    },
    ]

}

module.exports = mockData


