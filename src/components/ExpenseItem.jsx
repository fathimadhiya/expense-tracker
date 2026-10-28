// ExpenseItem receives one expense object through its props and displays its details.
function ExpenseItem({ expense }) {
  return (
    <li data-cy="expense-item">
      <span>{expense.title}</span>
      <span>{Number(expense.amount).toFixed(2)}</span>
      <span>{expense.category}</span>
    </li>
  )
}

export default ExpenseItem
