
window.onload = () => {
    document.querySelector('.game_name').classList.remove('hidden-h1');
    document.querySelector('.tree').classList.remove('hidden');
    document.querySelector('.facts').classList.remove('hidden');

} 

const DragAndDrop = () => {
    const cards = document.querySelectorAll('.fact')
    const cells = document.querySelectorAll('.add')
    let count = 0

    const dragStart = function(event) {
        setTimeout(() => {
            this.classList.add('hide')
        }, 0)
        console.log('Start', this)
        event.dataTransfer.setData("dragItem", this.dataset.item)

        this.classList.remove('green')
        this.classList.remove('red')
    }

    const dragEnd = function(event) {
        this.classList.remove('hide')
        // console.log('End', this)
    }

    const dragOver = function(event) {
        event.preventDefault()
    }

    const dragEnter = function(event) {
        event.preventDefault()
        this.classList.add('hovered')
    }

    const dragLeave  = function(event) {
        this.classList.remove('hovered')
        
    }

    const dragDrop  = function(event) {
        // this.append(card)
        // this.classList.remove('hovered')
        // console.log('Drop')
        const dragFlag = event.dataTransfer.getData("dragItem")
        const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)
        if (String(this.dataset.zone) === String(dragFlag)) {
            dragItem.classList.add('green')
            console.log(this.dataset.zone,  dragFlag)
            count+=1
        } else {
            console.log(this.dataset.zone,  dragFlag)
            dragItem.classList.add('red')
        }
        dragItem.classList.add('many')
        this.append(dragItem)

        if (count == 3) {
            document.querySelector('.btn-continue').classList.remove('hidden')
        }
    }   
    const dragDrag  = function(event) {
        // this.append(card)
        this.classList.remove('hovered')
        // console.log('Drag')
    }

    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop)
    })
    cards.forEach((card) => {
        card.addEventListener('dragstart', dragStart)
        card.addEventListener('dragend', dragEnd)
        card.addEventListener('drag', dragDrag)
    })
    
    
}



DragAndDrop()





