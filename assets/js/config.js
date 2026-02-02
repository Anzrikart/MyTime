/**
 * Configuration Management
 * Loads environment variables and app settings
 */

const CONFIG = {
    app: {
        name: 'Jadual Waktu Sekolah & Taska',
        version: '1.0.0',
        environment: 'development'
    },

    api: {
        baseUrl: 'http://localhost:3000/api',
        timeout: 5000
    },

    features: {
        enableNotifications: true,
        enablePrint: true,
        enableExport: true
    },

    ui: {
        defaultTheme: 'light',
        maxUsers: 100,
        animationDuration: 300
    },

    // Updated subject color mapping
    subjectColors: {
        // Main Subjects
        'BM': 'color-bm',
        'BI': 'color-bi',
        'MT': 'color-mt',
        'SN': 'color-sn',
        'SJ': 'color-sj',

        // Islamic Subjects
        'AQ': 'color-aq',
        'AK': 'color-ak',
        'HF': 'color-hf',
        'FQ': 'color-fq',
        'TA': 'color-ta',
        'SR': 'color-sr',
        'TAJ': 'color-taj',
        'TJ': 'color-tj',
        'PIM': 'color-pim',
        'PI': 'color-pi',
        'BAJ': 'color-baj',
        'BAS': 'color-bas',
        'BA': 'color-ba',
        'JW': 'color-jw',
        'KH': 'color-kh',
        'IM': 'color-im',
        'TF': 'color-tf',
        'AS': 'color-as',
        'KT': 'color-kt',
        'TAS': 'color-tas',
        'AT': 'color-at',

        // Skills & Arts
        'PJ': 'color-pj',
        'PSV': 'color-psv',
        'PMz': 'color-pmz',
        'MS': 'color-ms',
        'RBT': 'color-rbt',
        'PK': 'color-pk',

        // Break Times
        'R': 'rehat',
        'E': 'rehat',
        'H': 'rehat',
        'A': 'rehat',
        'T': 'rehat',
        'P': 'rehat',
        'CP': 'rehat',
        'ZOHOR': 'rehat',
        'DHUHA': 'rehat',

        // Nursery
        'GR': 'color-gr',
        'PP': 'color-pp',
        'FREE': 'color-free',
        'Daycare': 'color-daycare',

        // Tadika
        'Uniform': 'color-uniform',
        'Sport': 'color-sport'
    },

    // Days of week
    daysOfWeek: [
        'mon',
        'tue',
        'wed',
        'thu',
        'fri'
    ],

    // Initialize from environment (if available)
    init() {
        // In production, you would load from actual .env
        // For now, using default values
        console.log(`${
            this.app.name
        } v${
            this.app.version
        } initialized`);
    }
};

// Initialize configuration
CONFIG.init();
