const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        wrapper.querySelectorAll('.all').forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        })
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(wrapper.querySelectorAll(markType).length > 0){
            wrapper.querySelectorAll(markType).forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    }  
    function tab(selector){
        const btnSelector = menu.querySelector(selector);
        const markSelector = wrapper.querySelectorAll(selector)
        btnSelector.addEventListener('click',() =>{
            if(markSelector){
                typeFilter(selector)
            } else {
                typeFilter();
            }
        })

    }  
    tab('.lovers');
    tab('.all');
    tab('.girl');
    tab('.guy');
    tab('.chef');
    tab('.grandmother');
    tab('.granddad');


    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.tagName == 'LI'){
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    })
};
export default filter;