export default function updateFilters(filterName, newValue, filtersControl) {
  const { filters, setFilters } = filtersControl
  const newFilters = { ...filters }
  newFilters[filterName] = newValue
  setFilters(newFilters)
}
export { updateFilters }
