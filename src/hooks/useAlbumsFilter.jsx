function useAlbumsFilter(rel) {
  return rel.filter((r) => r['primary-type'] === 'Album' && !r['secondary-types'].length);
  // return rel.find((r) => r.title.includes('Pablo'));
}

export default useAlbumsFilter;
