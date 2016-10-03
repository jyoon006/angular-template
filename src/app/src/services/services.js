export default function( $http ) {

  return {
    get: function( url, query ) {
      return $http({
        method: 'GET',
        url: url,
        query: query
      });
    },
    post: function( url, data ) {
      return $http({
        method: 'POST',
        url: url,
        data: { data }
      });
    }
  }
}
