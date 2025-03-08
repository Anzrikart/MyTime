async function loadSubjectColors() {
    try {
        const response = await fetch('/assets/config/subject.json');
        if (!response.ok) throw new Error('Failed to load subjects');
        const data = await response.json();
        for (const school in data) {
            data[school].forEach(subject => {
                subjectColors[subject.subject] = subject.color;
            });
        }
    } catch (error) {
        console.error('Error loading subjects:', error);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    await loadSubjectColors(); // Ensure colors are loaded before displaying the timetable
    document.getElementById('schoolSelect').addEventListener('change', loadTimetable);
    loadTimetable(); // Load default timetable on page load
});

async function loadTimetable() {
    const school = document.getElementById('schoolSelect').value;
    try {
        const response = await fetch('/assets/config/timetable.json');
        if (!response.ok) throw new Error('Failed to load timetable');
        const data = await response.json();
        displayTimetable(data[school]);
    } catch (error) {
        console.error('Error loading timetable:', error);
    }
}

function displayTimetable(timetable) {
    const tbody = document.querySelector("#timetableTable tbody");
    tbody.innerHTML = "";
    timetable.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.start}</td>
            <td>${row.end}</td>
            <td style="${getCellStyle(row.monday)}">${row.monday || '-'}</td>
            <td style="${getCellStyle(row.tuesday)}">${row.tuesday || '-'}</td>
            <td style="${getCellStyle(row.wednesday)}">${row.wednesday || '-'}</td>
            <td style="${getCellStyle(row.thursday)}">${row.thursday || '-'}</td>
            <td style="${getCellStyle(row.friday)}">${row.friday || '-'}</td>
        `;
        tbody.appendChild(tr);
    });
}

function getCellStyle(subject) {
    if (["R", "U", "M", "A", "H"].includes(subject)) {
        return "background-color: #c1c1c1; color: gold;";
    }
    const color = subjectColors[subject] || 'transparent';
    return `background-color: ${color};`;
}

