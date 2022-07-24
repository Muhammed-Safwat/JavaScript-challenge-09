/** change root color */
let el = document.querySelectorAll( ".container ul li" );
a = window.localStorage.getItem( "color" );
document.documentElement.style.setProperty( "--main-color", `${ a }` );
el.forEach( el =>
{
    el.addEventListener( "click", ( e ) =>
    {
        window.localStorage.setItem( "color", e.target.dataset.color );
        let a = window.localStorage.getItem( "color" );
        document.documentElement.style.setProperty( "--main-color", `${ a }` );
    } );
} );