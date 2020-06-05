document.querySelector('.box').style.display='none';

// preloader
var loaders;
function loader(){
    loaders=setTimeout(showPage,2000)
}
function showPage(){
    document.querySelector('.loading').style.display='none';
    document.querySelector('.box').style.display='block';
    document.querySelector('.bgBackground').classList.add('whiteBg')
   
}
