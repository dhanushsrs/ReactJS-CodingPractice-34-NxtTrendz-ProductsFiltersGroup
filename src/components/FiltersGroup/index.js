import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {changeRating, activeRatingId} = props

      const activeFilterClass =
        activeRatingId === eachRating.ratingId
          ? 'filter-item active-filter'
          : 'filter-item'

      const onClickChangeRating = () => {
        changeRating(eachRating.ratingId)
      }

      return (
        <li
          className="rating-list-container"
          key={eachRating.ratingId}
          onClick={onClickChangeRating}
        >
          <img
            src={eachRating.imageUrl}
            className="rating-img"
            alt={`rating ${eachRating.ratingId}`}
          />

          <p className={activeFilterClass}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilter = () => (
    <>
      <h1 className="filter-heading">Rating</h1>
      <ul>{renderRatingList()}</ul>
    </>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const activeClassName =
        activeCategoryId === eachCategory.categoryId
          ? 'filter-item active-filter'
          : 'filter-item'

      const onClickChangeCategory = () => {
        changeCategory(eachCategory.categoryId)
      }

      return (
        <li
          className="category-list"
          key={eachCategory.categoryId}
          onClick={onClickChangeCategory}
        >
          <p className={activeClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilter = () => (
    <div>
      <h1 className="filter-heading">Category</h1>
      <ul className="category-list-items">{renderCategoriesList()}</ul>
    </div>
  )

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {onFilterSearchInput} = props

    if (event.key === 'Enter') {
      onFilterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      {renderSearchInput()}
      {renderCategoryFilter()}
      {renderRatingFilter()}
      <button
        className="clear-filters-btn"
        type="button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
