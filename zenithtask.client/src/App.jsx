import { useEffect, useState } from 'react';
import './App.css';
import PieChart from './components/PieChart/index.jsx';
import BarChart from './components/BarChart/index.jsx';
import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";

function App() {
    const [employees, setEmployees] = useState();
    const [expenses, setExpenses] = useState();
    const { t, i18n } = useTranslation();
    const currentLocale = Cookies.get("i18next") || "ar";
    const [language, setLanguage] = useState(currentLocale);
    const languages = [
        { name: "English", code: "en", dir: "ltr" },
        { name: "العربية", code: "ar", dir: "rtl" },
    ];

    const currentLangObj = languages.find((lang) => lang.code === currentLocale);
    useEffect(() => {
        populateEmployeeData();
        populateExpenseData();
    }, []);

    useEffect(() => {
        document.body.dir = currentLangObj.dir || 'rtl'
    }, [currentLangObj]);

    function getEmployeeData() {
        const res = [];
        const total = employees.length;
        employees.forEach((forecast) => {
            res.push({
                label: forecast.name,
                value: forecast.salary,
                total,
                tooltipContent: `<b>${t('name')}: </b>${forecast.name}<br><b>${t('salary')}: </b>${forecast.salary}<br>`,
            })
        })
        return res
    }
    function getExpenseData() {
        const res = [];
        const depth = Math.floor(Math.random() * 20 + 3);
        expenses.forEach((forecast) => {
            res.push({
                label: forecast.expenseName,
                value: forecast.amount,
                depth,
                tooltipContent: `<div style='height:100px'><b>${t('expenseName')}: </b>${forecast.expenseName}<br><b>${t('expenseType')}: </b>${forecast.amount}`,
            })
        })
        return res
    }
    const handleChangeLocale = (e) => {
        const lang = e.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    
    const contents = employees === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <div>
            <div className="switcher">
                {/* Language switch dropdown here */}
                <span>{t('language') }</span>{" "}
                <select onChange={handleChangeLocale} value={language}>
                    {languages.map(({ name, code }) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            <h4>{t('employees')}</h4>
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>{t('id')}</th>
                        <th>{t('name')}</th>
                        <th>{t('salary')}</th>
                        <th>{t('status')}</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.id}</td>
                            <td>{forecast.name}</td>
                            <td>{forecast.salary}</td>
                            <td>{forecast.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <h4>{t('expenses')}</h4>
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>{t('id')}</th>
                        <th>{t('expenseName')}</th>
                        <th>{t('expenseType')}</th>
                        <th>{t('amount')}</th>
                        <th>{t('date')}</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.id}</td>
                            <td>{forecast.expenseName}</td>
                            <td>{forecast.expenseType}</td>
                            <td>{forecast.amount}</td>
                            <td>{forecast.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <PieChart
                data={getEmployeeData()}
                pieSize={400}
                svgSize={500}
                innerRadius={100}
                containerId="pie"
            />
            <BarChart
                svgProps={{
                    margin: { top: 80, bottom: 80, left: 80, right: 80 },
                    width: 600,
                    height: 400,
                }}
                axisProps={{
                    xLabel: `${t('expenseName')}`,
                    yLabel: `${t('amount')}`,
                }}
                data={getExpenseData()}
                strokeWidth={4}
            />
        </div>;

    return (
        <div>
            <h1 id="tabelLabel">{t('heading')}</h1>
            <p>{t('compHeading')}</p>
            {contents}
        </div>
    );

    async function populateEmployeeData() {
        const response = await fetch('https://localhost:7256/Employees');
        const data = await response.json();
        setEmployees(data);
    }
    async function populateExpenseData() {
        const response = await fetch('https://localhost:7256/Expenses');
        const data = await response.json();
        setExpenses(data);
    }

}

export default App;