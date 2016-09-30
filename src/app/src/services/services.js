export default function( $http ) {

  return {
    get: function( url ) {
      return $http({
        method: 'GET',
        url: url
      });
    },
    post: function( url, data ) {
      return $http({
        method: 'POST',
        url: url
      });
    }
  }
}
