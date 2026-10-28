import { useState } from 'react'

const CATEGORIES = ['Food', 'Travel', 'Bills', 'Other']

// ExpenseForm receives an onAddExpense callback and keeps its form fields and validation message in local state.
function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [error, setError] = useState('')
  const [errorField, setErrorField] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const numericAmount = Number(amount)

    if (!trimmedTitle) {
      setError('Please enter a title.')
      setErrorField('title')
      return
    }

    if (amount.trim() === '' || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Please enter an amount greater than 0.')
      setErrorField('amount')
      return
    }

    onAddExpense({ title: trimmedTitle, amount: numericAmount, category })
    setTitle('')
    setAmount('')
    setCategory(CATEGORIES[0])
    setError('')
    setErrorField('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="expense-title">Title</label>
      <input
        id="expense-title"
        data-cy="expense-title"
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
          if (error) {
            setError('')
            setErrorField('')
          }
        }}
        aria-invalid={errorField === 'title'}
        aria-describedby={error ? 'expense-form-error' : undefined}
      />

      <label htmlFor="expense-amount">Amount</label>
      <input
        id="expense-amount"
        data-cy="expense-amount"
        type="number"
        min="0"
        step="any"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value)
          if (error) {
            setError('')
            setErrorField('')
          }
        }}
        aria-invalid={errorField === 'amount'}
        aria-describedby={error ? 'expense-form-error' : undefined}
      />

      <label htmlFor="expense-category">Category</label>
      <select
        id="expense-category"
        data-cy="expense-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {CATEGORIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {error && (
        <p id="expense-form-error" role="alert">
          {error}
        </p>
      )}

      <button data-cy="add-expense" type="submit">
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm
