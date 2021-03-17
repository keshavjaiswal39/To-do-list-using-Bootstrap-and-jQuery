let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnClr=$('#btnClr')
let inpNewTask=$('#inpNewTask')

// functionality for adding the items
btnAdd.click(() => {
    let listItem=$('<li>',{
        'class': 'list-group-item',text:inpNewTask.val()
    })

    listItem.click(() => {

        $(event.target).toggleClass('done')
    })

    ulTasks.append(listItem)
    inpNewTask.val('')
})

// functionalities for clearing the input field
btnClr.click(() => {
    inpNewTask.val('')
})
















