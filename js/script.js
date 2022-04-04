const productView = document.querySelectorAll('.view__img')
const view = document.querySelector('.view')
const viewClose = document.querySelector('.view__close')


productView.forEach(function(card,key){
    card.addEventListener('click',function(){
        view.classList.add('active')
        const imgSrc = card.querySelector('img').getAttribute('src')
        view.querySelector('img').setAttribute('src', imgSrc)
    })
})

viewClose.addEventListener('click',function(){
    view.classList.remove('active')
})

// function videoView(){
//     const videoPlay = document.getElementById('video')
//     const videoImg = document.querySelector('.video-wrapper-img')
//     const videoWrapper = document.querySelector('.video-wrapper')
//     if(videoPlay.play){
//         videoWrapper.style = 'display: none !important;'
//     }else{
//         videoWrapper.style = 'display: block !important;'
//     }
// }