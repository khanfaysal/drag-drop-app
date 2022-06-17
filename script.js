const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {

    // drag start
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('.dragging')
    })

    // drag end

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

    containers.forEach(container => {
        container.addEventListener('dragover', () => {
            console.log('drag over');
        })
    })
})