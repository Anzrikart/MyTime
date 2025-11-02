Users (Students/Parents)
- user_id (PK)
- name
- email (optional)

Schools
- school_id (PK)
- school_name
- school_code
- address
- school_year

Classes
- class_id (PK)
- class_name
- school_id (FK)
- grade_level

User_Class_Enrollment
- enrollment_id (PK)
- user_id (FK)
- class_id (FK)
- school_year

Subjects
- subject_id (PK)
- subject_code
- subject_name

Teachers
- teacher_id (PK)
- teacher_name
- school_id (FK)

Timetable_Slots
- slot_id (PK)
- class_id (FK)
- subject_id (FK)
- teacher_id (FK)
- day_of_week (Mon-Fri)
- time_slot
- start_time
- end_time
- notes (optional)
- school_year