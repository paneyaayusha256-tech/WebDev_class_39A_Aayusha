// Question 2:

const calculateAverage = (m1, m2, m3) => {
    return (m1 + m2 + m3) / 3;
};

const getDivision = (average) => {
    if (average >= 70) {
        return "First Division";
    } else if (average >= 60) {
        return "Second Division";
    } else if (average >= 50) {
        return "Third Division";
    } else {
        return "Fail";
    }
};

const processResult = (name, m1, m2, m3, callback) => {
    const average = callback(m1, m2, m3);
    const division = getDivision(average);

    console.log(`Student: ${name}`);
    console.log(`Average: ${average}`);
    console.log(`Division: ${division}`);
};

processResult("Sita", 80, 70, 75, calculateAverage);
