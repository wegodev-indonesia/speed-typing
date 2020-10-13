function init(){
    //Tantangan, silahkan tambahkan array lainnya atau gunakan API
    let words = [
        'makan', 
        'minum',
        'sayur'
    ]

    const game          = document.getElementById('game')
      let input         = document.createElement("input")
      let word          = document.createElement("h2")
      let order         = 0
      let totalOrders   = words.length

    //create element word
    word.setAttribute("id", "word");
    game.appendChild(word);
    
    //create element input
    input.setAttribute("id", "input");
    game.appendChild(input);
    
    function showWord(theWord){
        word.innerHTML = theWord;
    }
    
    function clearClass(){
        word.removeAttribute("class");
    }

    function wrong(){
        clearClass()
        word.classList.add('wrong')
    }

    function correct(){
        clearClass()
        word.classList.add('correct')
    }

    input.addEventListener('keyup', e => {
        if(e.code == 'Enter'){
            input = document.getElementById('input')
            
            if(input.value == words[order]){
                input.value = ''
                order++
                clearClass()
                if(totalOrders == order){
                    correct()
                    showWord('You Win')
                    input.remove();
                }else{
                    showWord(words[order])
                }
            }
            else{
                wrong()
            }   
        }
    })

    showWord(words[order]);
}

init()