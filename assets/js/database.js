/**
* Database Module
* Handles all data storage and retrieval
*/

const database = {
	// Basic reference data
	users: [
		{ id: 1, name: "Muhammad Syahmi" },
		{ id: 2, name: "Muhammad Ariq Auni" },
		{ id: 3, name: "Muhammad Lutfi" }
	],
	schools: [
		{ id: 1, name: "Sekolah Rendah Agama Olak Lempit", code: "SRAOL", address: "Kampung Sungai Lempit, 42700 Banting, Selangor" },
		{ id: 2, name: "Sekolah Kebangsaan Olak Lempit", code: "SKOL", address: "Kampung Olak Lempit, 42700 Banting, Selangor" },
		{ id: 3, name: "Sekolah Rendah Agama Intergrasi Sungai Manggis", code: "SRAISM", address: "Sungai Manggis, 42700 Banting, Selangor" },
		{ id: 4, name: "Taska Suria Ar-Raudhah", code: "TASKA", address: "1, Jalan Suria 1a/12, Bandar Mahkota Banting, 42700 Banting, Selangor" }
	],
	classes: [
		{ id: 1, name: "3JM", schoolId: 1, gradeLevel: 3 },
		{ id: 2, name: "3UUM", schoolId: 2, gradeLevel: 3 },
		{ id: 3, name: "1B", schoolId: 3, gradeLevel: 1 },
		{ id: 4, name: "Taska ", schoolId: 4, gradeLevel: 0 }
	],
	enrollments: [
		{ userId: 1, classId: 1 }, // Syahmi in 3 JM
		{ userId: 1, classId: 2 }, // Syahmi in 3 UUM
		{ userId: 2, classId: 3 }, // Auni in 1 Al-Biruni
		{ userId: 3, classId: 4 }  // Lutfi in Taska
	],

	// Unified category definitions
	subjectCategories: {
		MAIN: ['BM', 'BI', 'MT', 'SN'],           // Core subjects
		ISLAMIC: ['AQ', 'AK', 'HF', 'FQ', 'TA', 'SR', 'TAJ', 'PIM', 'BAJ', 'BAS', 'IM', 'JW', 'KH'], // Islamic subjects
		SKILLS: ['PJ', 'PSV', 'PMz', 'MS'], // Skills & Arts
		BREAKS: ['R', 'E', 'H', 'A', 'T', 'P', 'CP', 'ZOHOR', 'DHUHA'], // Breaks & Prayer
		NURSERY: ['GR', 'PP', 'FREE', 'Daycare']  // Nursery activities
	},

	// Complete subject definitions
	subjects: {
		// Core Subjects
		"BM": { name: "Bahasa Melayu", category: "MAIN" },
		"BI": { name: "Bahasa Inggeris", category: "MAIN" },
		"MT": { name: "Matematik", category: "MAIN" },
		"SN": { name: "Sains", category: "MAIN" },
		
		// Islamic Subjects
		"AQ": { name: "Al-Quran", category: "ISLAMIC" },
		"AK": { name: "Akhlak", category: "ISLAMIC" },
		"HF": { name: "Hafazan", category: "ISLAMIC" },
		"FQ": { name: "Feqah", category: "ISLAMIC" },
		"TA": { name: "Tauhid", category: "ISLAMIC" },
		"TAJ": { name: "Tajwid", category: "ISLAMIC" },
		"PIM": { name: "Pendidikan Islam", category: "ISLAMIC" },
		"BAJ": { name: "Bahasa Arab JAIS", category: "ISLAMIC" },
		"BAS": { name: "Bahasa Arab KSSR", category: "ISLAMIC" },
		"JW": { name: "Jawi", category: "ISLAMIC" },
		
		// Skills & Arts
		"PJ": { name: "Pendidikan Jasmani", category: "SKILLS" },
		"PSV": { name: "Pendidikan Seni Visual", category: "SKILLS" },
		"PMz": { name: "Pendidikan Muzik", category: "SKILLS" },
		"MS": { name: "Pendidikan Kesenian", category: "SKILLS" },
		
		// Breaks & Prayer
		"R": { name: "Rehat", category: "BREAKS" },
		"E": { name: "Rehat", category: "BREAKS" },
		"H": { name: "Rehat", category: "BREAKS" },
		"A": { name: "Rehat", category: "BREAKS" },
		"T": { name: "Rehat", category: "BREAKS" },
		"ZOHOR": { name: "Solat Zohor", category: "BREAKS" },
		"DHUHA": { name: "Solat Dhuha", category: "BREAKS" },
		
		// Nursery Activities
		"GR": { name: "Baju Hijau", category: "NURSERY" },
		"PP": { name: "Baju Purple", category: "NURSERY" },
		"FREE": { name: "Free Time", category: "NURSERY" },
		"Daycare": { name: "Daycare", category: "NURSERY" }
	},

	// Complete class assignments
	classAssignments: [
		// Class 1 (3JM)
		{ classId: 1, subjectCode: "AQ", teacherCode: "HAJAR" },
		{ classId: 1, subjectCode: "AK", teacherCode: "HAJAR" },
		{ classId: 1, subjectCode: "HF", teacherCode: "ALIAH" },
		{ classId: 1, subjectCode: "FQ", teacherCode: "FARAHIN" },
		{ classId: 1, subjectCode: "TA", teacherCode: "FARAHIN" },
		{ classId: 1, subjectCode: "TAJ", teacherCode: "SAYIDATUL" },
		{ classId: 1, subjectCode: "JW", teacherCode: "SAYIDATUL" },
		{ classId: 1, subjectCode: "BA", teacherCode: "ALIAH" },

		// Class 2 (3UUM)
		{ classId: 2, subjectCode: "BM", teacherCode: "HASBULLAH" },
		{ classId: 2, subjectCode: "BI", teacherCode: "ISAAC" },
		{ classId: 2, subjectCode: "MT", teacherCode: "HISHAM" },
		{ classId: 2, subjectCode: "SN", teacherCode: "SARMINAH" },
		{ classId: 2, subjectCode: "PJ", teacherCode: "ISAAC" },
		{ classId: 2, subjectCode: "PSV", teacherCode: "HASBULLAH" },

		// Class 3 (1B)
		{ classId: 3, subjectCode: "BM", teacherCode: "IDA" },
		{ classId: 3, subjectCode: "BI", teacherCode: "NADIA" },
		{ classId: 3, subjectCode: "MT", teacherCode: "HUSNA" },
		{ classId: 3, subjectCode: "SN", teacherCode: "AINI" },
		{ classId: 3, subjectCode: "PJ", teacherCode: "FAIQA" },
		{ classId: 3, subjectCode: "MS", teacherCode: "AINI" },
		{ classId: 3, subjectCode: "AT", teacherCode: "EMA" },
		{ classId: 3, subjectCode: "BAJ", teacherCode: "SUHA" },
		{ classId: 3, subjectCode: "BAS", teacherCode: "ZAWIN" },
		{ classId: 3, subjectCode: "JW", teacherCode: "HANA" },

		// Class 4 (Taska)
		{ classId: 4, subjectCode: "GR", teacherCode: "YUS" },
		{ classId: 4, subjectCode: "PP", teacherCode: "YUS" },
		{ classId: 4, subjectCode: "FREE", teacherCode: "YUS" }
	],

	timetables: {
		1: [ // Each timetable entry now references subjects and teachers through codes
			{ time: "08:00 - 08:30", mon: {code: "P", teacherCode: ""}, tue: {code: "AQ", teacherCode: "HAJAR"}, wed: {code: "AQ", teacherCode: "HAJAR"}, thu: {code: "AQ", teacherCode: "HAJAR"}, fri: {code: "BA", teacherCode: "ALIAH"} },
			{ time: "08:30 - 09:00", mon: {code: "AQ", teacherCode: "HAJAR"}, tue: {code: "IM", teacherCode: "HAJAR"}, wed: {code: "TA", teacherCode: "FARAHIN"}, thu: {code: "BA", teacherCode: "ALIAH"}, fri: {code: "JW", teacherCode: "SAYIDATUL"} },
			{ time: "09:00 - 09:30", mon: {code: "AQ", teacherCode: "HAJAR"}, tue: {code: "HF", teacherCode: "ALIAH"}, wed: {code: "TA", teacherCode: "FARAHIN"}, thu: {code: "BA", teacherCode: "ALIAH"}, fri: {code: "JW", teacherCode: "SAYIDATUL"} },
			{ time: "09:30 - 10:00", mon: {code: "AQ", teacherCode: "HAJAR"}, tue: {code: "TAJ", teacherCode: "SAYIDATUL"}, wed: {code: "FQ", teacherCode: "FARAHIN"}, thu: {code: "HF", teacherCode: "ALIAH"}, fri: {code: "SR", teacherCode: "HAJAR"} },
			{ time: "10:00 - 10:20", mon: {code: "R", teacherCode: ""}, tue: {code: "E", teacherCode: ""}, wed: {code: "H", teacherCode: ""}, thu: {code: "A", teacherCode: ""}, fri: {code: "T", teacherCode: ""} },
			{ time: "10:20 - 10:50", mon: {code: "HF", teacherCode: "ALIAH"}, tue: {code: "TAJ", teacherCode: "SAYIDATUL"}, wed: {code: "FQ", teacherCode: "FARAHIN"}, thu: {code: "KH", teacherCode: "FARAHIN"}, fri: {code: "SR", teacherCode: "HAJAR"} },
			{ time: "10:50 - 11:05", mon: {code: "DHUHA", teacherCode: ""}, tue: {code: "DHUHA", teacherCode: ""}, wed: {code: "DHUHA", teacherCode: ""}, thu: {code: "DHUHA", teacherCode: ""}, fri: {code: "DHUHA", teacherCode: ""} }
		],
		2: [ // 3 UUM D at SKOL
			{ time: "12:50 - 13:15", mon: {code: "PK", teacherCode: ""}, tue: {code: "CP", teacherCode: ""}, wed: {code: "CP", teacherCode: ""}, thu: {code: "CP", teacherCode: ""}, fri: {code: "", teacherCode: ""} },
			{ time: "13:15 - 13:40", mon: {code: "BI", teacherCode: ""}, tue: {code: "BM", teacherCode: ""}, wed: {code: "BM", teacherCode: ""}, thu: {code: "Tas", teacherCode: ""}, fri: {code: "", teacherCode: ""} },
			{ time: "13:40 - 14:05", mon: {code: "BI", teacherCode: ""}, tue: {code: "BM", teacherCode: ""}, wed: {code: "BM", teacherCode: ""}, thu: {code: "BM", teacherCode: ""}, fri: {code: "", teacherCode: ""} },
			{ time: "14:20 - 14:50", mon: {code: "ZOHOR", teacherCode: ""}, tue: {code: "ZOHOR", teacherCode: ""}, wed: {code: "ZOHOR", teacherCode: ""}, thu: {code: "ZOHOR", teacherCode: ""}, fri: {code: "BA", teacherCode: ""} },
			{ time: "14:50 - 15:10", mon: {code: "R", teacherCode: ""}, tue: {code: "E", teacherCode: ""}, wed: {code: "H", teacherCode: ""}, thu: {code: "A", teacherCode: ""}, fri: {code: "T", teacherCode: ""} },
			{ time: "15:10 - 15:40", mon: {code: "PI(U)", teacherCode: ""}, tue: {code: "BA", teacherCode: ""}, wed: {code: "PI(J)", teacherCode: ""}, thu: {code: "BI", teacherCode: ""}, fri: {code: "BM", teacherCode: ""} },
			{ time: "15:40 - 16:10", mon: {code: "PI(U)", teacherCode: ""}, tue: {code: "BA", teacherCode: ""}, wed: {code: "PA(AQ)", teacherCode: ""}, thu: {code: "BI", teacherCode: ""}, fri: {code: "BM", teacherCode: ""} },
			{ time: "16:10 - 16:40", mon: {code: "SN", teacherCode: ""}, tue: {code: "MT", teacherCode: ""}, wed: {code: "PI(AQ)", teacherCode: ""}, thu: {code: "BI", teacherCode: ""}, fri: {code: "PSV", teacherCode: ""} },
			{ time: "16:40 - 17:10", mon: {code: "SN", teacherCode: ""}, tue: {code: "MT", teacherCode: ""}, wed: {code: "PI(AQ)", teacherCode: ""}, thu: {code: "MT", teacherCode: ""}, fri: {code: "PSV", teacherCode: ""} },
			{ time: "17:10 - 17:40", mon: {code: "SN", teacherCode: ""}, tue: {code: "MT", teacherCode: ""}, wed: {code: "BI", teacherCode: ""}, thu: {code: "MT", teacherCode: ""}, fri: {code: "PJ", teacherCode: ""} },
			{ time: "17:40 - 18:10", mon: {code: "P", teacherCode: ""}, tue: {code: "PMz", teacherCode: ""}, wed: {code: "BI", teacherCode: ""}, thu: {code: "PJ", teacherCode: ""}, fri: {code: "Tas", teacherCode: ""} }
		],
		3: [ // 1B (1 Al-Biruni)
			{ time: "07:30 - 08:00", mon: {code: "AT", teacherCode: "EMA"}, tue: {code: "AT", teacherCode: "EMA"}, wed: {code: "AT", teacherCode: "EMA"}, thu: {code: "AT", teacherCode: "EMA"}, fri: {code: "P", teacherCode: ""} },
			{ time: "08:00 - 08:30", mon: {code: "BM", teacherCode: "IDA"}, tue: {code: "PJ", teacherCode: "FAIQA"}, wed: {code: "MS", teacherCode: "AINI"}, thu: {code: "PJ", teacherCode: "FAIQA"}, fri: {code: "AT", teacherCode: "EMA"} },
			{ time: "08:30 - 09:00", mon: {code: "FQ", teacherCode: "INA"}, tue: {code: "BM", teacherCode: "IDA"}, wed: {code: "MS", teacherCode: "AINI"}, thu: {code: "MT", teacherCode: "HUSNA"}, fri: {code: "FQ", teacherCode: "INA"} },
			{ time: "09:00 - 09:30", mon: {code: "BM", teacherCode: "IDA"}, tue: {code: "FQ", teacherCode: "INA"}, wed: {code: "BM", teacherCode: "IDA"}, thu: {code: "BM", teacherCode: "IDA"}, fri: {code: "MT ", teacherCode: "HUSNA"} },
			{ time: "09:30 - 10:00", mon: {code: "R", teacherCode: ""}, tue: {code: "E", teacherCode: ""}, wed: {code: "H", teacherCode: ""}, thu: {code: "A", teacherCode: ""}, fri: {code: "T", teacherCode: ""} },
			{ time: "10:00 - 10:30", mon: {code: "DHUHA", teacherCode: ""}, tue: {code: "DHUHA", teacherCode: ""}, wed: {code: "DHUHA", teacherCode: ""}, thu: {code: "DHUHA", teacherCode: ""}, fri: {code: "JW", teacherCode: "HANA"} },
			{ time: "10:30 - 11:00", mon: {code: "MT", teacherCode: "HUSNA"}, tue: {code: "BAJ", teacherCode: "SUHA"}, wed: {code: "BM", teacherCode: "IDA"}, thu: {code: "PK", teacherCode: "ZAWIN"}, fri: {code: "SN", teacherCode: "AINI"} },
			{ time: "11:00 - 11:30", mon: {code: "BI", teacherCode: "NADIA"}, tue: {code: "BM", teacherCode: "IDA"}, wed: {code: "PIM", teacherCode: "ZIZA"}, thu: {code: "MT", teacherCode: "HUSNA"}, fri: {code: "BI", teacherCode: "NADIA"} },
			{ time: "11:30 - 12:00", mon: {code: "PIM", teacherCode: "AINI"}, tue: {code: "BI", teacherCode: "NADIA"}, wed: {code: "BI", teacherCode: "NADIA"}, thu: {code: "BM", teacherCode: "IDA"}, fri: {code: "AK", teacherCode: "HANA"} },
			{ time: "12:00 - 12:30", mon: {code: "SN", teacherCode: "AINI"}, tue: {code: "MT", teacherCode: "HUSNA"}, wed: {code: "BM", teacherCode: "IDA"}, thu: {code: "SN", teacherCode: "AINI"}, fri: {code: "", teacherCode: ""} },
			{ time: "12:30 - 13:00", mon: {code: "R", teacherCode: ""}, tue: {code: "E", teacherCode: ""}, wed: {code: "H", teacherCode: ""}, thu: {code: "A", teacherCode: ""}, fri: {code: "", teacherCode: ""} },
			{ time: "13:00 - 13:30", mon: {code: "MT", teacherCode: "HUSNA"}, tue: {code: "JW", teacherCode: "HANA"}, wed: {code: "HF", teacherCode: "SARA"}, thu: {code: "BI", teacherCode: "NADIA"}, fri: {code: "", teacherCode: ""} },
			{ time: "13:30 - 14:00", mon: {code: "JW", teacherCode: "HANA"}, tue: {code: "BI", teacherCode: "NADIA"}, wed: {code: "JW", teacherCode: "HANA"}, thu: {code: "HF", teacherCode: "SARA"}, fri: {code: "", teacherCode: ""} },
			{ time: "14:00 - 14:30", mon: {code: "ZOHOR", teacherCode: ""}, tue: {code: "ZOHOR", teacherCode: ""}, wed: {code: "ZOHOR", teacherCode: ""}, thu: {code: "ZOHOR", teacherCode: ""}, fri: {code: "", teacherCode: ""} },
			{ time: "14:30 - 15:00", mon: {code: "AK", teacherCode: "HANA"}, tue: {code: "BAS", teacherCode: "ZAWIN"}, wed: {code: "BI", teacherCode: "NADIA"}, thu: {code: "BI", teacherCode: "NADIA"}, fri: {code: "", teacherCode: ""} },
			{ time: "15:00 - 15:30", mon: {code: "BAJ", teacherCode: "SUHA"}, tue: {code: "TA", teacherCode: "R.HUDA"}, wed: {code: "TA", teacherCode: "R.HUDA"}, thu: {code: "JW", teacherCode: "HANA"}, fri: {code: "", teacherCode: ""} }	

		],
		4: [ // Taska
			{ time: "08:00 - 10:00", mon: {code: "GR", teacherCode: "Yus"}, tue: {code: "PP", teacherCode: "Yus"}, wed: {code: "GR", teacherCode: "Yus"}, thu: {code: "PP", teacherCode: "Yus"}, fri: {code: "FREE", teacherCode: "Yus"} },
			{ time: "11:00 - 18:00", mon: {code: "Daycare", teacherCode: ""}, tue: {code: "Daycare", teacherCode: ""}, wed: {code: "Daycare", teacherCode: ""}, thu: {code: "Daycare", teacherCode: ""}, fri: {code: "Daycare", teacherCode: ""} }
		]
	},


	// Validate timetable data
	validateTimetableData: () => {
		Object.entries(database.timetables).forEach(([classId, timetable]) => {
			timetable.forEach(slot => {
				['mon', 'tue', 'wed', 'thu', 'fri'].forEach(day => {
					if (slot[day] && slot[day].code) {
						slot[day].code = database.normalizeSubjectCode(slot[day].code);
					}
				});
			});
		});
	}
};

// Initialize data validation
database.validateTimetableData();