const CATEGORIES = ['All', 'Food', 'Travel', 'Bills', 'Other']

// CategoryFilter receives the selected category and a callback for category changes.
function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <>
      <label htmlFor="category-filter-select">Filter by category</label>
      <select
        id="category-filter-select"
        data-cy="category-filter"
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

export default CategoryFilter
