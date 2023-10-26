const calendarElement = document.getElementById('calendar');
const today = new Date();

calendarElement.innerHTML = `<h2>${today.toLocaleString('en-us', { month: 'long' })} ${today.getFullYear()}</h2>`;

const month = today.getMonth();
const year = today.getFullYear();

calendarElement.innerHTML += '<table>';
calendarElement.innerHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);

let dayOfWeek = firstDay.getDay();
let day = 1;

while (day <= lastDay.getDate()) {
  calendarElement.innerHTML += '<tr>';
  for (let i = 0; i < 7; i++) {
    if (dayOfWeek === i) {
      const bookingCount = getBookingCountForDate(day, month, year);
      calendarElement.innerHTML += `<td><span class="date">${day}</span><span class="count">${bookingCount} bookings</span></td>`;
      day++;
    } else {
      calendarElement.innerHTML += '<td></td>';
    }
  }
  calendarElement.innerHTML += '</tr>';
  dayOfWeek = (dayOfWeek + 1) % 7;
}

calendarElement.innerHTML += '</table>';

function getBookingCountForDate(day, month, year) {
  let count = 0;
  QueueBookingCustomerData.forEach((bookingCu) => {
    const bookingDate = new Date(bookingCu.booking_date_user);
    if (bookingDate.getDate() === day && bookingDate.getMonth() === month && bookingDate.getFullYear() === year) {
      count++;
    }
  });
  return count;
}