function calcRevenueMonth() {
    /// Get the current user's orders
    const approvedOrders = this.orders.filter((order) => order.status === 'approved')

    approvedOrders.sort((orderA, orderB) => {
        if (new Date(orderA.checkout) > new Date(orderB.checkout)) return 1
        if (new Date(orderA.checkout) < new Date(orderB.checkout)) return -1
        return 0
    })

    const totalPerMonth = approvedOrders.reduce((result, order) => {
        const month = this.getMonthFromDate(order.checkout)
        result[month] = result[month] || { totalPrice: 0 }
        result[month].totalPrice += order.totalPrice
        return result
    }, {})

    const monthNames = [] //['January  ,'March']'
    const revenues = [] //  [  200    ,  435]

    for (const month in totalPerMonth) {
        const monthName = this.getFormattedMonthName(month)
        monthNames.push(monthName)
        revenues.push(totalPerMonth[month].totalPrice)
    }

    //  Set Month names and revenues in the Chart:
    this.chartData.labels = monthNames
    this.chartData.datasets[0].data = revenues
}

function getFormattedMonthName(monthNum) {
    return new Date(2000, +monthNum - 1).toLocaleString('default', { month: 'long' })
}

function getMonthFromDate(dateString) {
    const dateParts = dateString.split('/')
    const month = dateParts[1]
    return month
}