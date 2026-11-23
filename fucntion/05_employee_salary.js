// Question 5:

const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 0.10;
    }
    return salary * 0.05;
};

const calculateTax = (salary) => {
    return salary * 0.05;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    const bonus = bonusCallback(salary);
    const tax = taxCallback(salary);
    const netSalary = salary + bonus - tax;

    return { bonus, tax, netSalary };
};

const generatePayslip = (name, salary, callback) => {
    const result = callback(salary, calculateBonus, calculateTax);

    console.log(`Employee: ${name}`);
    console.log(`Basic Salary: Rs. ${salary}`);
    console.log(`Bonus: Rs. ${result.bonus}`);
    console.log(`Tax: Rs. ${result.tax}`);
    console.log(`Net Salary: Rs. ${result.netSalary}`);
};

generatePayslip("Ram", 50000, (salary, bonusCallback, taxCallback) =>
    calculateNetSalary(salary, bonusCallback, taxCallback)
);
