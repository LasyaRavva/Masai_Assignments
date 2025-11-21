function getPerformanceLevel(rating) {
    if (rating > 4.5) return "Excellent";
    if (rating >= 3 && rating <= 4.5) return "Good";
    return "Needs Improvement";
}

function evaluateEmployees(employees) {
    const rank = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };

    return employees
        .filter(emp => emp.tasksCompleted > 5)
        .map(emp => ({
            name: emp.name,
            rating: emp.rating,
            performance: getPerformanceLevel(emp.rating)
        }))
        .sort((a, b) => {
            if (rank[b.performance] !== rank[a.performance]) {
                return rank[b.performance] - rank[a.performance]; 
            }
            return b.rating - a.rating; 
        })
        .map(({ name, performance }) => ({ name, performance }));
}

const input = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(
    evaluateEmployees(input).filter(e => e.performance === "Excellent" || e.performance === "Good")
);