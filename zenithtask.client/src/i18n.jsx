import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    heading: 'Zenith Task',
                    compHeading: 'This component demonstrates fetching data from the server.',
                    employees: 'Employees',
                    expenses: 'Espenses',
                    id: 'Id',
                    name: 'Name',
                    salary: 'Salary',
                    status: 'Status',
                    expenseName: 'Expense Name',
                    expenseType: 'Expense Type',
                    amount: 'Amount',
                    date: 'Date',
                    language: 'Languages',
                },
            },
            ar: {
                translation: {
                    heading: 'مهمة زينيث',
                    compHeading: 'يوضح هذا المكون جلب البيانات من الخادم.',
                    employees: 'موظفين',
                    expenses: 'نفقات',
                    id: 'بطاقة تعريف',
                    name: 'اسم',
                    salary: 'مرتب',
                    status: 'حالة',
                    expenseName: 'اسم المصاريف',
                    expenseType: 'نوع المصاريف',
                    amount: 'كمية',
                    date: 'تاريخ',
                    language: 'اللغات',
                },
            },
        },
        fallbackLng: 'en',
        detection: {
            order: ["path", "localStorage", "htmlTag", "cookie"],
            caches: ["localStorage", "cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;