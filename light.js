window.onload = () => {
    document.querySelector('.header').classList.remove('hidden-h1');
    document.querySelector('.big-image').classList.remove('hidden');
    document.querySelector('.bool').classList.remove('hidden');
} 

const bools = document.querySelectorAll('.variable')

bools.forEach((bool => {
    bool.onclick = function (event) {
        if(bool.classList[2] == 'true') {
            bool.classList.add('green')
            
        } else {
            bool.classList.add('red')
        }
        document.querySelector('.frs').disabled = true; 
        document.querySelector('.scn').disabled = true; 
        setTimeout(() => {
            document.querySelector('.btn-continue').classList.remove('hidden')
        }, 800);

    }
}))


const next = document.querySelector('.btn-continue')

next.onclick = function(event) {
    // document.querySelector('.cor1').classList.remove('hidden-pro');
    // document.querySelector('.mor1').classList.remove('hidden-pro');
    console.log('Hello ')
}