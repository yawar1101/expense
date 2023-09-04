import Expenses from './Components/Expense/Expenses/Expenses';

const App = () => {
    const expenses = [
        {
            id: 1,
            title: 'Television',
            amount: 500,
            date: new Date(2023, 7, 27),
        },
        {
            id: 2,
            title: 'Car Insurance',
            amount: 234.11,
            date: new Date(2023, 8, 2),
        },
        {
            id: 3,
            title: 'Desk',
            amount: 150,
            date: new Date(2023, 8, 13),
        },
        {
            id: 4,
            title: 'Fridge',
            amount: 550,
            date: new Date(2023, 7, 15),
        },
    ];

    return (
        <>
            <h1>Let's get started</h1>
            <Expenses items={expenses} />
        </>
    );
};

export default App;
