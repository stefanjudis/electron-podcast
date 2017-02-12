( function( window ) {
  const openExternal = require( 'electron' ).shell.openExternal;

  window.addEventListener( 'click', ( event ) => {
    const baseRegex = new RegExp( `${ window.location.hostname}` );

    if (
      event.target.tagName === 'A' &&
      ! baseRegex.test( event.target.href )
    ) {
      openExternal( event.target.href );
    }
  } );
} )( window );