window.addEventListener('DOMContentLoaded',function(){
    const heart = document.querySelector('.heart_btn');
    const header = document.querySelector('#header');
    const sidebox=document.querySelector('.side_box');
    const variableWidth = document.querySelectorAll('.contents_box .contents');
    heart.addEventListener('click',function(){
        console.log('hit');
        heart.classList.toggle('on');
    });
    function resizeFunc(){
        if(scrollY>=10)
        {
            let calcWidth=(window.innerWidth*0.5)+167;
            sidebox.style.left=calcWidth+'px';
        }

        if (matchMedia('screen and (max-width : 800px)').matches) {
            console.log("under 800px : "+variableWidth.length);
            for (let i = 0; i < variableWidth.length; i++) {
                variableWidth[i].style.width = window.innerWidth - 20 + 'px';
            }
    
        } else {
    
            for (let i = 0; i < variableWidth.length; i++) {
    
                if (window.innerWidth > 600) {
                    variableWidth[i].removeAttribute('style');
                }
    
            }
    
        }
        
    }
    function scrollFunc()
    {
        if(scrollY>=10)
        {
            header.classList.add('on');
            sidebox.classList.add('on')
            resizeFunc();
        }
        else{
            header.classList.remove('on');
            sidebox.classList.remove('on');
            sidebox.removeAttribute('style');
        }
    }
    window.addEventListener('scroll',scrollFunc);

    window.addEventListener('resize',resizeFunc);
})
