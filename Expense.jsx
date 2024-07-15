import React,{useState} from 'react'
import Expense from 'react';
function Plan() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id:'e2', title:'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id:'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [items,setItems] = useState (expenses);

  const addItem = () => {
    const item = {
      id: 'e5',
      title: 'New Item',
      amount: 64.12,
      date: new Date(2020, 9, 14),
    };
    setItems(prevExpenses => [...prevExpenses, item]);
  }

  return (
    <div className="App">
     <h1>Expense Tracker App</h1>
     <Expense items={items}/>
     {/* <Counter/> */}
     <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Plan;