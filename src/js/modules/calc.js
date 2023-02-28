
const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result),
          calc = document.querySelectorAll('.calc select');
    
    let sum = 0;

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if(sizeBlock.value === '' || materialBlock.value === ''){
            resultBlock.textContent = 'Please choose matherial and size';
        } else if(promocodeBlock.vlaue == 'IWANTPOPART'){
            resultBlock.textContent = sum * 0.7;
        } else {
            resultBlock.textContent = sum;
  
        }
    };

    if(sizeBlock.value && materialBlock.value || sizeBlock.value && materialBlock.value && optionsBlock.value){
        state.price = sum;
    } else if(promocodeBlock.value === 'IWANTPOPART'){
        state.price = sum*0.7;
        state.promo = true;
    }

    calc.forEach(select =>{
        updateState(select, 'size', 'size', sizeBlock);
        updateState(select, 'material', 'material', materialBlock);
        updateState(select, 'option', 'option',optionsBlock );
    })

    function updateState (select, value, block,key){
        if(select.getAttribute('id')=== value){
            state[key]= block.value;
        }
    }

    sizeBlock.addEventListener('change', calcFunction); 
    materialBlock.addEventListener('change', calcFunction); 
    optionsBlock.addEventListener('change', calcFunction); 
    promocodeBlock.addEventListener('input', calcFunction); 

};
export default calc;