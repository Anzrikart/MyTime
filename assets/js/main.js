const getSubjectColor = code => CONFIG.subjectColors[code] || 'color-other';

const initializeDropdowns = () => {
    const userSelect = document.getElementById('userSelect');
    // Clear existing options first
    userSelect.innerHTML = '<option value="">-- Choose Student --</option>';
    
    // Add users without duplicates
    const addedUsers = new Set();
    database.users.forEach(user => {
        if (!addedUsers.has(user.id)) {
            const option = document.createElement('option');
            option.value = user.id;
            option.textContent = user.name;
            userSelect.appendChild(option);
            addedUsers.add(user.id);
        }
    });

    // Auto-select if only one user
    if (userSelect.options.length === 2) {
        userSelect.selectedIndex = 1;
        updateSchools();
    }
};

const updateSchools = () => {
    const userId = parseInt(document.getElementById('userSelect').value);
    const schoolSelect = document.getElementById('schoolSelect');
    const classSelect = document.getElementById('classSelect');
    
    schoolSelect.innerHTML = '<option value="">-- Choose School --</option>';
    classSelect.innerHTML = '<option value="">-- Choose Class --</option>';
    
    if (!userId) return;
    
    const userEnrollments = database.enrollments.filter(e => e.userId === userId);
    const userClassIds = userEnrollments.map(e => e.classId);
    const userClasses = database.classes.filter(c => userClassIds.includes(c.id));
    // Use Set to ensure unique school IDs
    const schoolIds = [...new Set(userClasses.map(c => c.schoolId))];
    
    // Add schools without duplicates
    const addedSchools = new Set();
    schoolIds.forEach(schoolId => {
        if (!addedSchools.has(schoolId)) {
            const school = database.schools.find(s => s.id === schoolId);
            const option = document.createElement('option');
            option.value = school.id;
            option.textContent = `${school.name} (${school.code})`;
            schoolSelect.appendChild(option);
            addedSchools.add(schoolId);
        }
    });

    // Auto-select if only one school
    if (schoolSelect.options.length === 2) {
        schoolSelect.selectedIndex = 1;
        updateClasses();
    }
};

const updateClasses = () => {
    const userId = parseInt(document.getElementById('userSelect').value);
    const schoolId = parseInt(document.getElementById('schoolSelect').value);
    const classSelect = document.getElementById('classSelect');
    
    classSelect.innerHTML = '<option value="">-- Choose Class --</option>';
    
    if (!userId || !schoolId) return;
    
    const userEnrollments = database.enrollments.filter(e => e.userId === userId);
    const userClassIds = userEnrollments.map(e => e.classId);
    const availableClasses = database.classes.filter(c => 
        userClassIds.includes(c.id) && c.schoolId === schoolId
    );
    
    availableClasses.forEach(cls => {
        const option = document.createElement('option');
        option.value = cls.id;
        option.textContent = cls.name;
        classSelect.appendChild(option);
    });

    // Auto-select if only one class
    if (classSelect.options.length === 2) {
        classSelect.selectedIndex = 1;
        loadTimetable();
    }
};

// Convert "HH:MM" to 12-hour format
const convertTo12Hr = timeStr => {
    const [hour, minute] = timeStr.split(':');
    let h = parseInt(hour);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${minute} ${ampm}`;
};

// Convert a time range (e.g., "12:50 - 13:15") to 12-hour format
const convertTo12HourRange = rangeStr => {
    return rangeStr
        .split(' - ')
        .map(t => convertTo12Hr(t.trim()))
        .join(' - ');
};

const loadTimetable = () => {
    const classId = parseInt(document.getElementById('classSelect').value);
    const tbody = document.getElementById('timetableBody');
    const infoBox = document.getElementById('infoBox');
    const classInfo = document.getElementById('classInfo');
    
    if (!classId) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-cell">Please select a class to view the timetable</td></tr>';
        infoBox.style.display = 'none';
        return;
    }
    
    const selectedClass = database.classes.find(c => c.id === classId);
    const selectedSchool = database.schools.find(s => s.id === selectedClass.schoolId);
    const timetable = database.timetables[classId];
    
    classInfo.innerHTML = `<strong>Class:</strong> ${selectedClass.name} | <strong>School:</strong> ${selectedSchool.name} | <strong>Address:</strong> ${selectedSchool.address}`;
    infoBox.style.display = 'block';
    
    tbody.innerHTML = '';
    
    timetable.forEach(slot => {
        const row = document.createElement('tr');
        
        const timeCell = document.createElement('td');
        timeCell.className = 'time-cell';
        // Convert time range to 12-hour format
        timeCell.textContent = convertTo12HourRange(slot.time);
        row.appendChild(timeCell);
        
        CONFIG.daysOfWeek.forEach(day => {
            const cell = document.createElement('td');
            const dayData = slot[day];
            
            if (dayData.code) {
                cell.className = `subject-cell ${getSubjectColor(dayData.code)}`;
                cell.innerHTML = `
                    <span class="subject-code">${dayData.code}</span>
                    ${dayData.teacherCode ? `<span class="teacher-name">${dayData.teacherCode}</span>` : ''}
                `;
            } else {
                cell.className = 'empty-cell';
                cell.textContent = '-';
            }
            
            row.appendChild(cell);
        });
        
        tbody.appendChild(row);
    });
};

// Initialize on page load
initializeDropdowns();