function mainAlbumsFilter(rel) {
  return rel.filter((r) => r['primary-type'] === 'Album' && !r['secondary-types'].length);
}

export default mainAlbumsFilter;
