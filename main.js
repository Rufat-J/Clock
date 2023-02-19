const showTime = () => {
    let date = new Date()
    console.log(date)

    let weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let h = date.getHours();
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = 'AM'

   /* let dayOfWeek = weekday[date.getDay]*/
    let dayOfWeek = weekdays[date.getDay()]
    let dayOfMonth = date.getDate()

    console.log(dayOfMonth)

    if (h === 0) {
        h = h-12
        session = 'PM';
    }

    let time = h + ':' + m + ':' + s + ' ' + session

    document.querySelector('.clock').innerText = time
    document.querySelector('.clock').textContent = time

    document.querySelector('.day').innerHTML =
        months[date.getMonth()] + ' ' + dayOfMonth + ', ' + date.getFullYear()

    document.querySelector('.dayOfWeek').innerHTML = dayOfWeek

    setTimeout(showTime, 1000)
}

showTime()