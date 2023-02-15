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

    // drag over
    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                container.appendChild(draggable)
            } else {
                container.insertBefore(draggable, afterElement)
            }
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

// sidenav

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}