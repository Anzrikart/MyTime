/**
* Database Module
* Handles all data storage and retrieval
*/

const database = {
    // Basic reference data
    users: [
        {
            id: 1,
            name: "Muhammad Syahmi"
        }, {
            id: 2,
            name: "Muhammad Ariq Auni"
        }, {
            id: 3,
            name: "Muhammad Lutfi"
        }
    ],
    schools: [
        {
            id: 1,
            name: "Sekolah Rendah Agama Olak Lempit",
            code: "SRAOL",
            address: "Kampung Sungai Lempit, 42700 Banting, Selangor",
            logo: "assets/images/logos/sraol.png"
        },
        {
            id: 2,
            name: "Sekolah Kebangsaan Olak Lempit",
            code: "SKOL",
            address: "Kampung Olak Lempit, 42700 Banting, Selangor",
            logo: "assets/images/logos/skol.png"
        },
        {
            id: 3,
            name: "Sekolah Rendah Agama Intergrasi Sungai Manggis",
            code: "SRAISM",
            address: "Sungai Manggis, 42700 Banting, Selangor",
            logo: "assets/images/logos/sraism.png"
        },
        {
            id: 4,
            name: "Taska Suria Ar-Raudhah",
            code: "TASKA",
            address: "1, Jalan Suria 1a/12, Bandar Mahkota Banting, 42700 Banting, Selangor",
            logo: "assets/images/logos/taska.png"
        }, {
            id: 5,
            name: "Tadika Pintar Ar-Raudhah",
            code: "TADIKA",
            address: "Jalan Mahkota 2A/B, Kampung Sungai Manggis, 42700 Banting, Selangor",
            logo: "assets/images/logos/tadika.png"
        }

    ],
    classes: [
        {
            id: 1,
            name: "3JM",
            schoolId: 1,
            gradeLevel: 3
        },
        {
            id: 2,
            name: "3UUM",
            schoolId: 2,
            gradeLevel: 3
        },
        {
            id: 3,
            name: "1B",
            schoolId: 3,
            gradeLevel: 1
        },
        {
            id: 4,
            name: "Taska",
            schoolId: 4,
            gradeLevel: 0
        }, {
            id: 5,
            name: "4UUM",
            schoolId: 2,
            gradeLevel: 4
        }, {
            id: 6,
            name: "4JF",
            schoolId: 1,
            gradeLevel: 4
        }, {
            id: 7,
            name: "2B",
            schoolId: 3,
            gradeLevel: 2
        }, {
            id: 8,
            name: "Tadika",
            schoolId: 5,
            gradeLevel: 0
        }
    ],
    enrollments: [
        {
            userId: 1,
            classId: 1
        },
        { // Syahmi in 3 JM
            userId: 1,
            classId: 2
        },
        { // Syahmi in 3 UUM
            userId: 2,
            classId: 3
        },
        { // Auni in 1 Al-Biruni
            userId: 3,
            classId: 4
        }, { // Lutfi in Taska
            userId: 1,
            classId: 5
        }, { // Syahmi in 4 JM
            userId: 1,
            classId: 6
        }, { // Syahmi in 4 UUM
            userId: 2,
            classId: 7
        }, { // Auni in 2 Al-Biruni
            userId: 3,
            classId: 8
        } // Lutfi in Tadika
    ],

    // Unified category definitions
    subjectCategories: {
        MAIN: [
            'BM',
            'BI',
            'MT',
            'SN',
            'SJ'
        ], // Core subjects
        ISLAMIC: [
            'AQ',
            'AK',
            'HF',
            'FQ',
            'TA',
            'SR',
            'TAJ',
            'PIM',
            'BAJ',
            'BAS',
            'IM',
            'JW',
            'KH',
            'RBT'
        ], // Islamic subjects
        SKILLS: [
            'PJ', 'PSV', 'PMz', 'MS'
        ], // Skills & Arts
        BREAKS: [
            'R',
            'E',
            'H',
            'A',
            'T',
            'P',
            'CP',
            'ZOHOR',
            'DHUHA'
        ], // Breaks & Prayer
        NURSERY: [
            'GR', 'PP', 'FREE', 'Daycare'
        ], // Nursery activities
        TADIKA: ['Uniform', 'Sport'] // Tadika activities
    },

    // Complete subject definitions
    subjects: {
        // Core Subjects
        "BM": {
            name: "Bahasa Melayu",
            category: "MAIN"
        },
        "BI": {
            name: "Bahasa Inggeris",
            category: "MAIN"
        },
        "MT": {
            name: "Matematik",
            category: "MAIN"
        },
        "SN": {
            name: "Sains",
            category: "MAIN"
        },
        "SJ": {
            name: "Sejarah",
            category: "MAIN"
        },

        // Islamic Subjects
        "AQ": {
            name: "Al-Quran",
            category: "ISLAMIC"
        },
        "AK": {
            name: "Akhlak",
            category: "ISLAMIC"
        },
        "HF": {
            name: "Hafazan",
            category: "ISLAMIC"
        },
        "FQ": {
            name: "Feqah",
            category: "ISLAMIC"
        },
        "TA": {
            name: "Tauhid",
            category: "ISLAMIC"
        },
        "TAJ": {
            name: "Tajwid",
            category: "ISLAMIC"
        },
        "PIM": {
            name: "Pendidikan Islam",
            category: "ISLAMIC"
        },
        "BAJ": {
            name: "Bahasa Arab JAIS",
            category: "ISLAMIC"
        },
        "BAS": {
            name: "Bahasa Arab KSSR",
            category: "ISLAMIC"
        },
        "JW": {
            name: "Jawi",
            category: "ISLAMIC"
        },
        "RBT": {
            name: "Reka Bentuk Teknologi",
            category: "SKILLS"
        },
        "IM": {
            name: "Ibadah Muamalat",
            category: "ISLAMIC"
        },
        "SR": {
            name: "Sirah",
            category: "ISLAMIC"
        },
        "KH": {
            name: "Khat",
            category: "ISLAMIC"
        },
        "TF": {
            name: "Tafsir",
            category: "ISLAMIC"
        },
        "TJ": {
            name: "Tajwid",
            category: "ISLAMIC"
        },
        "AS": {
            name: "Akidah Sirah",
            category: "ISLAMIC"
        },
        "KT": {
            name: "Khat",
            category: "ISLAMIC"
        },
        "PK": {
            name: "Pendidikan Kesihatan",
            category: "SKILLS"
        },
        "TAS": {
            name: "Tasawwur",
            category: "ISLAMIC"
        },
        "AT": {
            name: "Adab Tauhid",
            category: "ISLAMIC"
        },
        "PI": {
            name: "Pendidikan Islam",
            category: "ISLAMIC"
        },

        // Skills & Arts
        "PJ": {
            name: "Pendidikan Jasmani",
            category: "SKILLS"
        },
        "PSV": {
            name: "Pendidikan Seni Visual",
            category: "SKILLS"
        },
        "PMz": {
            name: "Pendidikan Muzik",
            category: "SKILLS"
        },
        "MS": {
            name: "Pendidikan Kesenian",
            category: "SKILLS"
        },

        // Breaks & Prayer
        "R": {
            name: "Rehat",
            category: "BREAKS"
        },
        "E": {
            name: "Rehat",
            category: "BREAKS"
        },
        "H": {
            name: "Rehat",
            category: "BREAKS"
        },
        "A": {
            name: "Rehat",
            category: "BREAKS"
        },
        "T": {
            name: "Rehat",
            category: "BREAKS"
        },
        "ZOHOR": {
            name: "Solat Zohor",
            category: "BREAKS"
        },
        "DHUHA": {
            name: "Solat Dhuha",
            category: "BREAKS"
        },

        // Nursery Activities
        "GR": {
            name: "Baju Hijau",
            category: "NURSERY"
        },
        "PP": {
            name: "Baju Purple",
            category: "NURSERY"
        },
        "FREE": {
            name: "Free Time",
            category: "NURSERY"
        },
        "Daycare": {
            name: "Daycare",
            category: "NURSERY"
        },

        // TADIKA Activities
        "Uniform": {
            name: "Baju Kotak",
            category: "TADIKA"
        },
        "Sport": {
            name: "Baju Sukan",
            category: "TADIKA"
        }
    },

    // Complete class assignments
    classAssignments: [
        // Class 1 (3JM)
        {
            classId: 1,
            subjectCode: "AQ",
            teacherCode: "HAJAR"
        },
        {
            classId: 1,
            subjectCode: "AK",
            teacherCode: "HAJAR"
        },
        {
            classId: 1,
            subjectCode: "HF",
            teacherCode: "ALIAH"
        },
        {
            classId: 1,
            subjectCode: "FQ",
            teacherCode: "FARAHIN"
        }, {
            classId: 1,
            subjectCode: "TA",
            teacherCode: "FARAHIN"
        }, {
            classId: 1,
            subjectCode: "TAJ",
            teacherCode: "SAYIDATUL"
        }, {
            classId: 1,
            subjectCode: "JW",
            teacherCode: "SAYIDATUL"
        }, {
            classId: 1,
            subjectCode: "BA",
            teacherCode: "ALIAH"
        },

        // Class 2 (3UUM)
        {
            classId: 2,
            subjectCode: "BM",
            teacherCode: "HASBULLAH"
        }, {
            classId: 2,
            subjectCode: "BI",
            teacherCode: "ISAAC"
        }, {
            classId: 2,
            subjectCode: "MT",
            teacherCode: "HISHAM"
        }, {
            classId: 2,
            subjectCode: "SN",
            teacherCode: "SARMINAH"
        }, {
            classId: 2,
            subjectCode: "PJ",
            teacherCode: "ISAAC"
        }, {
            classId: 2,
            subjectCode: "PSV",
            teacherCode: "HASBULLAH"
        },

        // Class 3 (1B)
        {
            classId: 3,
            subjectCode: "BM",
            teacherCode: "IDA"
        }, {
            classId: 3,
            subjectCode: "BI",
            teacherCode: "NADIA"
        }, {
            classId: 3,
            subjectCode: "MT",
            teacherCode: "HUSNA"
        }, {
            classId: 3,
            subjectCode: "SN",
            teacherCode: "AINI"
        }, {
            classId: 3,
            subjectCode: "PJ",
            teacherCode: "FAIQA"
        }, {
            classId: 3,
            subjectCode: "MS",
            teacherCode: "AINI"
        }, {
            classId: 3,
            subjectCode: "AT",
            teacherCode: "EMA"
        }, {
            classId: 3,
            subjectCode: "BAJ",
            teacherCode: "SUHA"
        }, {
            classId: 3,
            subjectCode: "BAS",
            teacherCode: "ZAWIN"
        }, {
            classId: 3,
            subjectCode: "JW",
            teacherCode: "HANA"
        },

        // Class 4 (Taska)
        {
            classId: 4,
            subjectCode: "GR",
            teacherCode: "YUS"
        }, {
            classId: 4,
            subjectCode: "PP",
            teacherCode: "YUS"
        }, {
            classId: 4,
            subjectCode: "FREE",
            teacherCode: "YUS"
        },

        // Class 5 (TADIKA)
        {
            classId: 5,
            subjectCode: "Uniform",
            teacherCode: "YUS"
        }, {
            classId: 5,
            subjectCode: "Sport",
            teacherCode: "YUS"
        }, {
            classId: 5,
            subjectCode: "DAYCARE",
            teacherCode: "YUS"
        }
    ],

    timetables: {
        1: [
            {
                // Each timetable entry now references subjects and teachers through codes
                time: "08:00 - 08:30",
                mon: {
                    code: "P",
                    teacherCode: ""
                },
                tue: {
                    code: "AQ",
                    teacherCode: "HAJAR"
                },
                wed: {
                    code: "AQ",
                    teacherCode: "HAJAR"
                },
                thu: {
                    code: "AQ",
                    teacherCode: "HAJAR"
                },
                fri: {
                    code: "BA",
                    teacherCode: "ALIAH"
                }
            },
            {
                time: "08:30 - 09:00",
                mon: {
                    code: "AQ",
                    teacherCode: "HAJAR"
                },
                tue: {
                    code: "IM",
                    teacherCode: "HAJAR"
                },
                wed: {
                    code: "TA",
                    teacherCode: "FARAHIN"
                },
                thu: {
                    code: "BA",
                    teacherCode: "ALIAH"
                },
                fri: {
                    code: "JW",
                    teacherCode: "SAYIDATUL"
                }
            },
            {
                time: "09:00 - 09:30",
                mon: {
                    code: "AQ",
                    teacherCode: "HAJAR"
                },
                tue: {
                    code: "HF",
                    teacherCode: "ALIAH"
                },
                wed: {
                    code: "TA",
                    teacherCode: "FARAHIN"
                },
                thu: {
                    code: "BA",
                    teacherCode: "ALIAH"
                },
                fri: {
                    code: "JW",
                    teacherCode: "SAYIDATUL"
                }
            },
            {
                time: "09:30 - 10:00",
                mon: {
                    code: "AQ",
                    teacherCode: "HAJAR"
                },
                tue: {
                    code: "TAJ",
                    teacherCode: "SAYIDATUL"
                },
                wed: {
                    code: "FQ",
                    teacherCode: "FARAHIN"
                },
                thu: {
                    code: "HF",
                    teacherCode: "ALIAH"
                },
                fri: {
                    code: "SR",
                    teacherCode: "HAJAR"
                }
            }, {
                time: "10:00 - 10:20",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "T",
                    teacherCode: ""
                }
            }, {
                time: "10:20 - 10:50",
                mon: {
                    code: "HF",
                    teacherCode: "ALIAH"
                },
                tue: {
                    code: "TAJ",
                    teacherCode: "SAYIDATUL"
                },
                wed: {
                    code: "FQ",
                    teacherCode: "FARAHIN"
                },
                thu: {
                    code: "KH",
                    teacherCode: "FARAHIN"
                },
                fri: {
                    code: "SR",
                    teacherCode: "HAJAR"
                }
            }, {
                time: "10:50 - 11:05",
                mon: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                tue: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                wed: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                thu: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                fri: {
                    code: "DHUHA",
                    teacherCode: ""
                }
            }
        ],
        2: [
            {
                // 3 UUM D at SKOL
                time: "12:50 - 13:15",
                mon: {
                    code: "PK",
                    teacherCode: ""
                },
                tue: {
                    code: "CP",
                    teacherCode: ""
                },
                wed: {
                    code: "CP",
                    teacherCode: ""
                },
                thu: {
                    code: "CP",
                    teacherCode: ""
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            },
            {
                time: "13:15 - 13:40",
                mon: {
                    code: "BI",
                    teacherCode: ""
                },
                tue: {
                    code: "BM",
                    teacherCode: ""
                },
                wed: {
                    code: "BM",
                    teacherCode: ""
                },
                thu: {
                    code: "Tas",
                    teacherCode: ""
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            },
            {
                time: "13:40 - 14:05",
                mon: {
                    code: "BI",
                    teacherCode: ""
                },
                tue: {
                    code: "BM",
                    teacherCode: ""
                },
                wed: {
                    code: "BM",
                    teacherCode: ""
                },
                thu: {
                    code: "BM",
                    teacherCode: ""
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            },
            {
                time: "14:20 - 14:50",
                mon: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                tue: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                wed: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                thu: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                fri: {
                    code: "BA",
                    teacherCode: ""
                }
            }, {
                time: "14:50 - 15:10",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "T",
                    teacherCode: ""
                }
            }, {
                time: "15:10 - 15:40",
                mon: {
                    code: "PI(U)",
                    teacherCode: ""
                },
                tue: {
                    code: "BA",
                    teacherCode: ""
                },
                wed: {
                    code: "PI(J)",
                    teacherCode: ""
                },
                thu: {
                    code: "BI",
                    teacherCode: ""
                },
                fri: {
                    code: "BM",
                    teacherCode: ""
                }
            }, {
                time: "15:40 - 16:10",
                mon: {
                    code: "PI(U)",
                    teacherCode: ""
                },
                tue: {
                    code: "BA",
                    teacherCode: ""
                },
                wed: {
                    code: "PA(AQ)",
                    teacherCode: ""
                },
                thu: {
                    code: "BI",
                    teacherCode: ""
                },
                fri: {
                    code: "BM",
                    teacherCode: ""
                }
            }, {
                time: "16:10 - 16:40",
                mon: {
                    code: "SN",
                    teacherCode: ""
                },
                tue: {
                    code: "MT",
                    teacherCode: ""
                },
                wed: {
                    code: "PI(AQ)",
                    teacherCode: ""
                },
                thu: {
                    code: "BI",
                    teacherCode: ""
                },
                fri: {
                    code: "PSV",
                    teacherCode: ""
                }
            }, {
                time: "16:40 - 17:10",
                mon: {
                    code: "SN",
                    teacherCode: ""
                },
                tue: {
                    code: "MT",
                    teacherCode: ""
                },
                wed: {
                    code: "PI(AQ)",
                    teacherCode: ""
                },
                thu: {
                    code: "MT",
                    teacherCode: ""
                },
                fri: {
                    code: "PSV",
                    teacherCode: ""
                }
            }, {
                time: "17:10 - 17:40",
                mon: {
                    code: "SN",
                    teacherCode: ""
                },
                tue: {
                    code: "MT",
                    teacherCode: ""
                },
                wed: {
                    code: "BI",
                    teacherCode: ""
                },
                thu: {
                    code: "MT",
                    teacherCode: ""
                },
                fri: {
                    code: "PJ",
                    teacherCode: ""
                }
            }, {
                time: "17:40 - 18:10",
                mon: {
                    code: "P",
                    teacherCode: ""
                },
                tue: {
                    code: "PMz",
                    teacherCode: ""
                },
                wed: {
                    code: "BI",
                    teacherCode: ""
                },
                thu: {
                    code: "PJ",
                    teacherCode: ""
                },
                fri: {
                    code: "Tas",
                    teacherCode: ""
                }
            }
        ],
        3: [
            {
                // 1B (1 Al-Biruni)
                time: "07:30 - 08:00",
                mon: {
                    code: "AT",
                    teacherCode: "EMA"
                },
                tue: {
                    code: "AT",
                    teacherCode: "EMA"
                },
                wed: {
                    code: "AT",
                    teacherCode: "EMA"
                },
                thu: {
                    code: "AT",
                    teacherCode: "EMA"
                },
                fri: {
                    code: "P",
                    teacherCode: ""
                }
            },
            {
                time: "08:00 - 08:30",
                mon: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                tue: {
                    code: "PJ",
                    teacherCode: "FAIQA"
                },
                wed: {
                    code: "MS",
                    teacherCode: "AINI"
                },
                thu: {
                    code: "PJ",
                    teacherCode: "FAIQA"
                },
                fri: {
                    code: "AT",
                    teacherCode: "EMA"
                }
            },
            {
                time: "08:30 - 09:00",
                mon: {
                    code: "FQ",
                    teacherCode: "INA"
                },
                tue: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                wed: {
                    code: "MS",
                    teacherCode: "AINI"
                },
                thu: {
                    code: "MT",
                    teacherCode: "HUSNA"
                },
                fri: {
                    code: "FQ",
                    teacherCode: "INA"
                }
            },
            {
                time: "09:00 - 09:30",
                mon: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                tue: {
                    code: "FQ",
                    teacherCode: "INA"
                },
                wed: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                thu: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                fri: {
                    code: "MT",
                    teacherCode: "HUSNA"
                }
            }, {
                time: "09:30 - 10:00",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "T",
                    teacherCode: ""
                }
            }, {
                time: "10:00 - 10:30",
                mon: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                tue: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                wed: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                thu: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                fri: {
                    code: "JW",
                    teacherCode: "HANA"
                }
            }, {
                time: "10:30 - 11:00",
                mon: {
                    code: "MT",
                    teacherCode: "HUSNA"
                },
                tue: {
                    code: "BAJ",
                    teacherCode: "SUHA"
                },
                wed: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                thu: {
                    code: "PK",
                    teacherCode: "ZAWIN"
                },
                fri: {
                    code: "SN",
                    teacherCode: "AINI"
                }
            }, {
                time: "11:00 - 11:30",
                mon: {
                    code: "BI",
                    teacherCode: "NADIA"
                },
                tue: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                wed: {
                    code: "PIM",
                    teacherCode: "ZIZA"
                },
                thu: {
                    code: "MT",
                    teacherCode: "HUSNA"
                },
                fri: {
                    code: "BI",
                    teacherCode: "NADIA"
                }
            }, {
                time: "11:30 - 12:00",
                mon: {
                    code: "PIM",
                    teacherCode: "AINI"
                },
                tue: {
                    code: "BI",
                    teacherCode: "NADIA"
                },
                wed: {
                    code: "BI",
                    teacherCode: "NADIA"
                },
                thu: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                fri: {
                    code: "AK",
                    teacherCode: "HANA"
                }
            }, {
                time: "12:00 - 12:30",
                mon: {
                    code: "SN",
                    teacherCode: "AINI"
                },
                tue: {
                    code: "MT",
                    teacherCode: "HUSNA"
                },
                wed: {
                    code: "BM",
                    teacherCode: "IDA"
                },
                thu: {
                    code: "SN",
                    teacherCode: "AINI"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "12:30 - 13:00",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "13:00 - 13:30",
                mon: {
                    code: "MT",
                    teacherCode: "HUSNA"
                },
                tue: {
                    code: "JW",
                    teacherCode: "HANA"
                },
                wed: {
                    code: "HF",
                    teacherCode: "SARA"
                },
                thu: {
                    code: "BI",
                    teacherCode: "NADIA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "13:30 - 14:00",
                mon: {
                    code: "JW",
                    teacherCode: "HANA"
                },
                tue: {
                    code: "BI",
                    teacherCode: "NADIA"
                },
                wed: {
                    code: "JW",
                    teacherCode: "HANA"
                },
                thu: {
                    code: "HF",
                    teacherCode: "SARA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "14:00 - 14:30",
                mon: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                tue: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                wed: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                thu: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "14:30 - 15:00",
                mon: {
                    code: "AK",
                    teacherCode: "HANA"
                },
                tue: {
                    code: "BAS",
                    teacherCode: "ZAWIN"
                },
                wed: {
                    code: "BI",
                    teacherCode: "NADIA"
                },
                thu: {
                    code: "BI",
                    teacherCode: "NADIA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "15:00 - 15:30",
                mon: {
                    code: "BAJ",
                    teacherCode: "SUHA"
                },
                tue: {
                    code: "TA",
                    teacherCode: "R.HUDA"
                },
                wed: {
                    code: "TA",
                    teacherCode: "R.HUDA"
                },
                thu: {
                    code: "JW",
                    teacherCode: "HANA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }

        ],
        4: [
            {
                // Taska
                time: "08:00 - 10:00",
                mon: {
                    code: "GR",
                    teacherCode: "Yus"
                },
                tue: {
                    code: "PP",
                    teacherCode: "Yus"
                },
                wed: {
                    code: "GR",
                    teacherCode: "Yus"
                },
                thu: {
                    code: "PP",
                    teacherCode: "Yus"
                },
                fri: {
                    code: "FREE",
                    teacherCode: "Yus"
                }
            }, {
                time: "11:00 - 18:00",
                mon: {
                    code: "Daycare",
                    teacherCode: ""
                },
                tue: {
                    code: "Daycare",
                    teacherCode: ""
                },
                wed: {
                    code: "Daycare",
                    teacherCode: ""
                },
                thu: {
                    code: "Daycare",
                    teacherCode: ""
                },
                fri: {
                    code: "Daycare",
                    teacherCode: ""
                }
            }
        ],
        5: [
            {
                // 4 UUM at SKOL
                time: "12:50 - 13:20",
                mon: {
                    code: "P",
                    teacherCode: "MHASBULLAH.ZA"
                },
                tue: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                wed: {
                    code: "SJ",
                    teacherCode: "NORAZEAN.D"
                },
                thu: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            },
            {
                time: "13:20 - 13:50",
                mon: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                tue: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                wed: {
                    code: "SJ",
                    teacherCode: "NORAZEAN.D"
                },
                thu: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            },
            {
                time: "13:50 - 14:20",
                mon: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                tue: {
                    code: "MT",
                    teacherCode: "NORAZEAN.D"
                },
                wed: {
                    code: "BA",
                    teacherCode: "FUZIAHR.A"
                },
                thu: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            },
            {
                time: "14:20 - 14:50",
                mon: {
                    code: "PI(J)",
                    teacherCode: "NURSAADAH.B"
                },
                tue: {
                    code: "MT",
                    teacherCode: "NORAZEAN.D"
                },
                wed: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                thu: {
                    code: "PSV",
                    teacherCode: "FARAE.MS"
                },
                fri: {
                    code: "PI(AQ)",
                    teacherCode: "NURSAADAH.B / SAZIZAH.S"
                }
            }, {
                time: "14:50 - 15:10",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "T",
                    teacherCode: ""
                }
            }, {
                time: "15:10 - 15:40",
                mon: {
                    code: "PK",
                    teacherCode: "ARAHMAN.S"
                },
                tue: {
                    code: "MT",
                    teacherCode: "NORAZEAN.D"
                },
                wed: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                thu: {
                    code: "PSV",
                    teacherCode: "FARAE.MS"
                },
                fri: {
                    code: "PI(AQ)",
                    teacherCode: "NURSAADAH.B / SAZIZAH.S"
                }
            }, {
                time: "15:40 - 16:10",
                mon: {
                    code: "TAS",
                    teacherCode: "NURSAADAH.B / SDNADIA.MP"
                },
                tue: {
                    code: "PI(U)",
                    teacherCode: "NURSAADAH.B"
                },
                wed: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                thu: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                fri: {
                    code: "PI(AQ)",
                    teacherCode: "NURSAADAH.B / SAZIZAH.S"
                }
            }, {
                time: "16:10 - 16:40",
                mon: {
                    code: "SN",
                    teacherCode: "PKP"
                },
                tue: {
                    code: "PI(U)",
                    teacherCode: "NURSAADAH.B"
                },
                wed: {
                    code: "MT",
                    teacherCode: "NORAZEAN.D"
                },
                thu: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                fri: {
                    code: "BA",
                    teacherCode: "FUZIAHR.A"
                }
            }, {
                time: "16:40 - 17:10",
                mon: {
                    code: "SN",
                    teacherCode: "PKP"
                },
                tue: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                wed: {
                    code: "MT",
                    teacherCode: "NORAZEAN.D"
                },
                thu: {
                    code: "SN",
                    teacherCode: "PKP"
                },
                fri: {
                    code: "BA",
                    teacherCode: "FUZIAHR.A"
                }
            }, {
                time: "17:10 - 17:40",
                mon: {
                    code: "RBT",
                    teacherCode: "MHASBULLAH.ZA"
                },
                tue: {
                    code: "BI",
                    teacherCode: "ISAACN.J"
                },
                wed: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                thu: {
                    code: "SN",
                    teacherCode: "PKP"
                },
                fri: {
                    code: "PJ",
                    teacherCode: "ARAHMAN.S"
                }
            }, {
                time: "17:40 - 18:10",
                mon: {
                    code: "RBT",
                    teacherCode: "MHASBULLAH.ZA"
                },
                tue: {
                    code: "PMz",
                    teacherCode: "MFAZMIRULA.M"
                },
                wed: {
                    code: "BM",
                    teacherCode: "MHASBULLAH.ZA"
                },
                thu: {
                    code: "PJ",
                    teacherCode: "ARAHMAN.S"
                },
                fri: {
                    code: "TAS",
                    teacherCode: "NURSAADAH.B / SAZIZAH.S /WASYAFIQ.WA"
                }
            }
        ],
        6: [
            {
                // 4JF at SRAOL
                time: "08:00 - 08:30",
                mon: {
                    code: "AQ",
                    teacherCode: "DIRA"
                },
                tue: {
                    code: "JW",
                    teacherCode: "SYAKIRA"
                },
                wed: {
                    code: "TJ",
                    teacherCode: "DIRA"
                },
                thu: {
                    code: "SR",
                    teacherCode: "SUE"
                },
                fri: {
                    code: "KT",
                    teacherCode: "SYAKIRA"
                }
            },

            {
                time: "08:30 - 09:00",
                mon: {
                    code: "AQ",
                    teacherCode: "DIRA"
                },
                tue: {
                    code: "SR",
                    teacherCode: "SUE"
                },
                wed: {
                    code: "AQ",
                    teacherCode: "DIRA"
                },
                thu: {
                    code: "IM",
                    teacherCode: "SYAKIRA"
                },
                fri: {
                    code: "FQ",
                    teacherCode: "ZUL"
                }
            },

            {
                time: "09:00 - 09:30",
                mon: {
                    code: "TF",
                    teacherCode: "ZUL"
                },
                tue: {
                    code: "TJ",
                    teacherCode: "DIRA"
                },
                wed: {
                    code: "BA",
                    teacherCode: "MADHAH"
                },
                thu: {
                    code: "TF",
                    teacherCode: "ZUL"
                },
                fri: {
                    code: "BA",
                    teacherCode: "MADIHAH"
                }
            },

            {
                time: "09:30 - 10:00",
                mon: {
                    code: "AS",
                    teacherCode: "SUE"
                },
                tue: {
                    code: "TJ",
                    teacherCode: "DIRA"
                },
                wed: {
                    code: "HF",
                    teacherCode: "ZUL"
                },
                thu: {
                    code: "BA",
                    teacherCode: "MADHAH"
                },
                fri: {
                    code: "TF",
                    teacherCode: "ZUL"
                }
            }, {
                time: "10:00 - 10:20",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "T",
                    teacherCode: ""
                }
            }, {
                time: "10:20 - 10:50",
                mon: {
                    code: "",
                    teacherCode: ""
                },
                tue: {
                    code: "FQ",
                    teacherCode: "ZUL"
                },
                wed: {
                    code: "HF",
                    teacherCode: "ZUL"
                },
                thu: {
                    code: "FQ",
                    teacherCode: "ZUL"
                },
                fri: {
                    code: "AS",
                    teacherCode: "SUE"
                }
            }, {
                time: "10:50 - 11:05",
                mon: {
                    code: "",
                    teacherCode: ""
                },
                tue: {
                    code: "",
                    teacherCode: ""
                },
                wed: {
                    code: "",
                    teacherCode: ""
                },
                thu: {
                    code: "",
                    teacherCode: ""
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }
        ],
        8: [
            {
                // Tadika
                time: "08:00 - 10:00",
                mon: {
                    code: "Uniform",
                    teacherCode: "Yus"
                },
                tue: {
                    code: "Sport",
                    teacherCode: "Yus"
                },
                wed: {
                    code: "Uniform",
                    teacherCode: "Yus"
                },
                thu: {
                    code: "Sport",
                    teacherCode: "Yus"
                },
                fri: {
                    code: "Uniform",
                    teacherCode: "Yus"
                }
            }, {
                time: "11:00 - 18:00",
                mon: {
                    code: "Daycare",
                    teacherCode: ""
                },
                tue: {
                    code: "Daycare",
                    teacherCode: ""
                },
                wed: {
                    code: "Daycare",
                    teacherCode: ""
                },
                thu: {
                    code: "Daycare",
                    teacherCode: ""
                },
                fri: {
                    code: "Daycare",
                    teacherCode: ""
                }
            }
        ],
        7: [
            {
                // 2B (2 Al-Biruni)
                time: "07:30 - 08:00",
                mon: {
                    code: "AT",
                    teacherCode: "AISHAH.J"
                },
                tue: {
                    code: "AT",
                    teacherCode: "AISHAH.J"
                },
                wed: {
                    code: "AT",
                    teacherCode: "AISHAH.J"
                },
                thu: {
                    code: "AT",
                    teacherCode: "AISHAH.J"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            },
            {
                time: "08:00 - 08:30",
                mon: {
                    code: "AT",
                    teacherCode: "AISHAH.J"
                },
                tue: {
                    code: "PJ",
                    teacherCode: "ZAINAIF"
                },
                wed: {
                    code: "BI",
                    teacherCode: "NORLELA"
                },
                thu: {
                    code: "BAS",
                    teacherCode: "FAIZAL"
                },
                fri: {
                    code: "AT",
                    teacherCode: "AISHAH.J"
                }
            },
            {
                time: "08:30 - 09:00",
                mon: {
                    code: "MT",
                    teacherCode: "AISHAH.J"
                },
                tue: {
                    code: "PJ",
                    teacherCode: "ZAINAIF"
                },
                wed: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                thu: {
                    code: "MT",
                    teacherCode: "AISHAH.J"
                },
                fri: {
                    code: "MS",
                    teacherCode: "R.HUDA"
                }
            },
            {
                time: "09:00 - 09:30",
                mon: {
                    code: "MT",
                    teacherCode: "AISHAH.J"
                },
                tue: {
                    code: "BI",
                    teacherCode: "NORLELA"
                },
                wed: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                thu: {
                    code: "MT",
                    teacherCode: "AISHAH.J"
                },
                fri: {
                    code: "MS",
                    teacherCode: "R.HUDA"
                }
            }, {
                time: "09:30 - 10:00",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "T",
                    teacherCode: ""
                }
            }, {
                time: "10:00 - 10:30",
                mon: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                tue: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                wed: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                thu: {
                    code: "DHUHA",
                    teacherCode: ""
                },
                fri: {
                    code: "SN",
                    teacherCode: "AIN"
                }
            }, {
                time: "10:30 - 11:00",
                mon: {
                    code: "JW",
                    teacherCode: "HALIZA"
                },
                tue: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                wed: {
                    code: "SN",
                    teacherCode: "AINI"
                },
                thu: {
                    code: "BI",
                    teacherCode: "NORLELA"
                },
                fri: {
                    code: "PK",
                    teacherCode: "ZAINAIF"
                }
            }, {
                time: "11:00 - 11:30",
                mon: {
                    code: "HF",
                    teacherCode: "N.HUDA"
                },
                tue: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                wed: {
                    code: "SN",
                    teacherCode: "AINI"
                },
                thu: {
                    code: "BI",
                    teacherCode: "NORLELA"
                },
                fri: {
                    code: "BI",
                    teacherCode: "NORLELA"
                }
            }, {
                time: "11:30 - 12:00",
                mon: {
                    code: "BI",
                    teacherCode: "NORLELA"
                },
                tue: {
                    code: "MT",
                    teacherCode: "AISHAH.J"
                },
                wed: {
                    code: "BAJ",
                    teacherCode: "FAUZIAH"
                },
                thu: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                fri: {
                    code: "BI",
                    teacherCode: "NORLELA"
                }
            }, {
                time: "12:00 - 12:30",
                mon: {
                    code: "BI",
                    teacherCode: "NORLELA"
                },
                tue: {
                    code: "MT",
                    teacherCode: "AISHAH.J"
                },
                wed: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                thu: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "12:30 - 13:00",
                mon: {
                    code: "R",
                    teacherCode: ""
                },
                tue: {
                    code: "E",
                    teacherCode: ""
                },
                wed: {
                    code: "H",
                    teacherCode: ""
                },
                thu: {
                    code: "A",
                    teacherCode: ""
                },
                fri: {
                    code: "T",
                    teacherCode: ""
                }
            }, {
                time: "13:00 - 13:30",
                mon: {
                    code: "PI",
                    teacherCode: "FAIQAH"
                },
                tue: {
                    code: "TA",
                    teacherCode: "R.HUDA"
                },
                wed: {
                    code: "JW",
                    teacherCode: "HALIZA"
                },
                thu: {
                    code: "BM",
                    teacherCode: "ARLINA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "13:30 - 14:00",
                mon: {
                    code: "TA",
                    teacherCode: "R.HUDA"
                },
                tue: {
                    code: "HF",
                    teacherCode: "N.HUDA"
                },
                wed: {
                    code: "JW",
                    teacherCode: "HALIZA"
                },
                thu: {
                    code: "AK",
                    teacherCode: "AIN"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "14:00 - 14:30",
                mon: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                tue: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                wed: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                thu: {
                    code: "ZOHOR",
                    teacherCode: ""
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "14:30 - 15:00",
                mon: {
                    code: "AK",
                    teacherCode: "AIN"
                },
                tue: {
                    code: "FQ",
                    teacherCode: "AIN"
                },
                wed: {
                    code: "FQ",
                    teacherCode: "AIN"
                },
                thu: {
                    code: "JW",
                    teacherCode: "HALIZA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }, {
                time: "15:00 - 15:30",
                mon: {
                    code: "BAJ",
                    teacherCode: "FAUZIAH"
                },
                tue: {
                    code: "PI",
                    teacherCode: "FAIQAH"
                },
                wed: {
                    code: "FQ",
                    teacherCode: "AIN"
                },
                thu: {
                    code: "JW",
                    teacherCode: "HALIZA"
                },
                fri: {
                    code: "",
                    teacherCode: ""
                }
            }

        ]
    },

    /**
     * Normalize subject code to uppercase and trim whitespace
     * @param {string} code - The subject code to normalize
     * @returns {string} Normalized subject code
     */
    normalizeSubjectCode(code) {
        if (!code || typeof code !== 'string') {
            return '';
        }
        return code.trim().toUpperCase();
    },

    /**
     * Validate timetable data and normalize subject codes
     */
    validateTimetableData() {
        Object.entries(database.timetables).forEach(([classId, timetable]) => {
            timetable.forEach(slot => {
                [
                    'mon',
                    'tue',
                    'wed',
                    'thu',
                    'fri'
                ].forEach(day => {
                    if (slot[day] && slot[day].code) {
                        slot[day].code = database.normalizeSubjectCode(slot[day].code);
                    }
                });
            });
        });
    },

    // Lookup maps for O(1) access
    _classMap: null,
    _schoolMap: null,
    _userMap: null,
    _subjectMap: null,

    /**
     * Initialize lookup maps for faster data access
     */
    initializeMaps() {
        this._classMap = new Map(this.classes.map(c => [c.id, c]));
        this._schoolMap = new Map(this.schools.map(s => [s.id, s]));
        this._userMap = new Map(this.users.map(u => [u.id, u]));
        this._subjectMap = new Map(Object.entries(this.subjects));
    },

    /**
     * Get class by ID
     * @param {number} id - Class ID
     * @returns {Object|undefined} Class object or undefined
     */
    getClassById(id) {
        if (!this._classMap) 
            this.initializeMaps();
        


        return this._classMap.get(id);
    },

    /**
     * Get school by ID
     * @param {number} id - School ID
     * @returns {Object|undefined} School object or undefined
     */
    getSchoolById(id) {
        if (!this._schoolMap) 
            this.initializeMaps();
        


        return this._schoolMap.get(id);
    },

    /**
     * Get user by ID
     * @param {number} id - User ID
     * @returns {Object|undefined} User object or undefined
     */
    getUserById(id) {
        if (!this._userMap) 
            this.initializeMaps();
        


        return this._userMap.get(id);
    },

    /**
     * Get subject by code
     * @param {string} code - Subject code
     * @returns {Object|undefined} Subject object or undefined
     */
    getSubjectByCode(code) {
        if (!this._subjectMap) 
            this.initializeMaps();
        


        return this._subjectMap.get(this.normalizeSubjectCode(code));
    },

    /**
     * Get timetable by class ID
     * @param {number} classId - Class ID
     * @returns {Array|undefined} Timetable array or undefined
     */
    getTimetableByClassId(classId) {
        return this.timetables[classId];
    },

    /**
     * Get enrollments by user ID
     * @param {number} userId - User ID
     * @returns {Array} Array of enrollment objects
     */
    getEnrollmentsByUserId(userId) {
        return this.enrollments.filter(e => e.userId === userId);
    }
};

// Initialize data validation
database.validateTimetableData();
