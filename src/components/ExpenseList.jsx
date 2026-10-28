import ExpenseItem from './ExpenseItem.jsx'

// ExpenseList receives an array of expenses through its props.
function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p data-cy="expense-list-empty">No expenses yet.</p>
  }

  return (
    <ul data-cy="expense-list">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={`${expense.title}-${expense.category}-${index}`}
          expense={expense}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
