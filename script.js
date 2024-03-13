let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('#reset-btn')
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turnO = true //player 0 & player x


const winPatterns = [ //store possible wining pattrens in this 2d aray 9 rows 3 clurmns 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('click')
        if(turnO){
            box.innerHTML = 'O'
            box.classList.add('oColor')
            
            turnO = false
        }else{
            box.innerHTML = 'X'
            box.classList.add('xColor')
            turnO = true
        }
        box.disabled = true

        checkWinner()
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ''
    }
}

const restGame =()=>{
    turnO = true
    enableBoxes()
    msgContainer.classList.add('hide')
}

const showWinner = (winner) =>{
    msg.innerText =   `Congratulations, winner is ${winner}`
    msgContainer.classList.remove('hide');
    disableBoxes();
}


const checkWinner = () =>{
    for(let pattren of winPatterns){
        //total are 8 rows & 3 columns in each row
        // console.log('are parttren here :Rows',pattren)//calling all winning pattern array rows and cols also
        // console.log('0 index column ',pattren[0])//0 index column  for 8 rows 
        // console.log('1 index column ',pattren[1])//1st index column 
        // console.log('2 index column ',pattren[2])//1st index column 
        console.log(pattren[0],pattren[1],pattren[2])
        console.log(boxes[pattren[0]].innerText,boxes[pattren[1]].innerText,boxes[pattren[2]].innerText)
 
        let pos1val = boxes[pattren[0]].innerHTML
        let pos2val = boxes[pattren[1]].innerHTML
        let pos3val = boxes[pattren[2]].innerHTML
        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log('winner')
                showWinner(pos1val)
            }
        }

    }
}
newGameBtn.addEventListener('click',restGame)
resetbtn.addEventListener('click',restGame)