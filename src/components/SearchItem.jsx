

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}></input>
    </form>
  )
}

export default SearchItem