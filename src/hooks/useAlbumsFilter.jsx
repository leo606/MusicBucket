import { useSelector } from 'react-redux';

function useAlbumsFilter() {
  const releases = useSelector(({ artist }) => artist.releaseGroups);
  const mainAlbums = releases.filter((r) => r['primary-type'] === 'Album' && !r['secondary-types'].length);
  const compilations = releases.filter((r) => r['primary-type'] === 'Album' && r['secondary-types'].includes('Compilation'));
  const eps = releases.filter((r) => r['primary-type'] === 'Album' && r['secondary-types'].includes('Ep'));

  return [mainAlbums, compilations, eps];
}

export default useAlbumsFilter;
