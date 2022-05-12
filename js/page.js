import swal from 'sweetalert2';

const deviceWidth = window.innerWidth;
if(deviceWidth > 1200) {
    const navItems = Array.from(document.querySelectorAll('.nav-wrapper a'));
    // console.log( navItems );
    navItems.forEach(el => {
        if(el.href === window.location.href) {
            el.classList.add('active');
        }
    });
}
if(!window.location.host.includes('localhost') && !window.location.host.includes('blog.abschill')) {
    let path = window.location.pathname;
    if(path === '/') path = '';
    swal.mixin({
        toast: true,
        showConfirmButton: true
    }).fire('Domain Change', '<p>This domain has changed to blog.abschill.com, you will be redirected</p>', 'info')
    .then(_ => window.location.replace('https://blog.abschill.com' + path));
}


function handleIntersection(observables) {
	observables.forEach(e => {
		if(e.isIntersecting) {
			console.log(e.boundingClientRect)
			e.target.classList.add('is-visible');
			io.unobserve(e.target);
		}
	})
}

const anyObservables = Array.from(document.querySelectorAll('.io'));
const io = new IntersectionObserver(handleIntersection, {
	root: document.getRootNode(),
	threshold: .2
});

if(anyObservables && anyObservables.length > 0) {
	anyObservables.forEach(el => io.observe(el));
}

// copy to clipboard on pre tags
const codeSegments = document.querySelectorAll('pre');

codeSegments.forEach(preTag => {
    preTag.title = "Click to Copy Text";
    preTag.addEventListener('click', () => {
        navigator.clipboard.writeText(preTag.innerText);
    } );
} );
