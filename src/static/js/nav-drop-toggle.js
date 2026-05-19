
function mouseEnterNavDrop(dropName) {
    const dropElement = document.querySelector(`.elcom-nav-drop[data-nav-drop="${dropName}"]`);
    if (dropElement) {
        dropElement.style.zIndex = '2';
        dropElement.style.opacity = '1';
    }
}

function mouseLeaveNavDrop(dropName) {
    const dropElement = document.querySelector(`.elcom-nav-drop[data-nav-drop="${dropName}"]`);
    if (dropElement) {
        dropElement.style.zIndex = '-1';
        dropElement.style.opacity = '0';
    }
}
