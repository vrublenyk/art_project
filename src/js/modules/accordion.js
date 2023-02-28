const accordion = (triggersSelector) => {
    const trigger = document.querySelectorAll(triggersSelector);
        //   content = document.querySelectorAll(itemsSelector);

    trigger.forEach(btn => {
        btn.addEventListener('click', function(){
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if(this.classList.contains('active-style')){
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    })

    // content.forEach(item => item.classList.add('animated', 'fadeInDown'));

    // trigger.forEach(item =>{
    //     item.addEventListener('click', function() {
    //         if(!this.classList.contains('active')){
    //             trigger.forEach(item =>{
    //                 item.classList.remove('active', 'active-style');
    //             })
    //             this.classList.add('active', 'active-style');
    //         }
    //     })
    // })



}

export default accordion;