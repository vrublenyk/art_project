const checkTextInputs = (selector) =>{
    const txtInputs = document.querySelectorAll(selector);
    txtInputs.forEach(input => {
        input.setAttribute('pattern', '^[А-Яа-яЁё\s]+$');
        input.addEventListener('keypress',(e) => {
            if(e.key.match(/[^а-яё 0-9]/gi)){
                e.preventDefault();

            }
        })
    })
};

export default checkTextInputs;
