let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnClr=$('#btnClr')
let inpNewTask=$('#inpNewTask')

function addItem()
{
    let listItem=$('<li>',{
        'class': 'list-group-item',text:inpNewTask.val()
    })

    listItem.click(() => {

        $(event.target).toggleClass('done')
    })

    ulTasks.append(listItem)
    inpNewTask.val('')
}

inpNewTask.keypress((e) => {
    if(e.which==13)
    {
        addItem()
    }
})

// functionality for adding the items
btnAdd.click(addItem)

// functionalities for clearing the input field
btnClr.click(() => {
    inpNewTask.val('')
})
















