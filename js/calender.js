const timetable = [
    { time: '08:00 - 09:00', Monday: 'Math', Tuesday: 'English', Wednesday: 'Physics', Thursday: 'Chemistry', Friday: 'Biology' },
    { time: '09:00 - 10:00', Monday: 'History', Tuesday: 'Math', Wednesday: 'English', Thursday: 'Physics', Friday: 'Chemistry' },
    { time: '10:00 - 11:00', Monday: 'Biology', Tuesday: 'History', Wednesday: 'Math', Thursday: 'English', Friday: 'Physics' },
    { time: '11:00 - 12:00', Monday: 'Chemistry', Tuesday: 'Biology', Wednesday: 'History', Thursday: 'Math', Friday: 'English' },
    { time: '12:00 - 01:00', Monday: 'Physics', Tuesday: 'Chemistry', Wednesday: 'Biology', Thursday: 'History', Friday: 'Math' }
];

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#timetable tbody');
    timetable.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            if (cell !== row.time) {
                td.classList.add('class');
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
});
