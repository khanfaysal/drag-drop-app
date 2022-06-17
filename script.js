const containers = document.querySelectorAll('.container');
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {

    // drag start
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    // drag end

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY)
            console.log(afterElement);
            const draggable = document.querySelector('.dragging');
            container.appendChild(draggable)
        })
    })
})

// drag after element in y axis

function getDragAfterElement(container, y) {

    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}