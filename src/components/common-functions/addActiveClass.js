const addActiveClass = ((e, querySelector, activeClass) => {
    const items = document.querySelectorAll(`.${querySelector}`)
    for(let i=0; i<items.length; i++) { items[i].classList.remove(activeClass) }
    e.currentTarget.classList.add(activeClass)
})

export default addActiveClass