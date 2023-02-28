const burger = (burgerSelector, menu) => {
    const menuElem = document.querySelector(menu),
          burgerElem = document.querySelector(burgerSelector);
    
    menuElem.style.display = 'none';
    // burgerElem.addEventListener('click', () => {
    //    if(!burgerElem.classList.contains('active')){
    //         burgerElem.classList.add('active');
    //         menuElem.style.display = 'block';
    //    } else{
    //         burgerElem.classList.remove('active');
    //         menuElem.style.display = 'none';
    //    }   
    // });
    // menuElem.addEventListener('mouseleave', (e) => {
    //     if(e.target && e.target == menuElem){
    //         burgerElem.classList.remove('active');
    //         menuElem.style.display = 'none';
    //     }
    // })

    burgerElem.addEventListener('click', () => {
        if(menuElem.style.display == 'none' && window.screen.availWidth < 993){
            menuElem.style.display = 'block';
            menuElem.classList.add('animated', 'fadeInDown')
        } else {
            menuElem.style.display = 'none';

        }
    })

    window.addEventListener('resize', () => {
        if(window.screen.availWidth < 993){
            menuElem.style.display = 'none';
        }
    })


};


export default burger;