let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')


// we want to add itme in botn ways by clicking on add button or by cl
//clicking enter button
function addItem() {

    //creating an eement using jquery
    let listItem = $('<li>', {
        //class is a reserverd word in javascript that so we put 
        //it in a string.
        'class': 'list-group-item',
        text: inpNewTask.val()
    })

    listItem.click(() => {
        listItem.toggleClass('done')
    })

    ulTasks.append(listItem)
    inpNewTask.val('')

}

//on clicking enter button .
//in this we can go to concole and see on pressing of enter
//button event 13 happened 
inpNewTask.keypress((e) => {
    if (e.which == 13) addItem()
})


//on clicking add button
//call add item function
btnAdd.click(addItem)
btnClear.click(() =>
    inpNewTask.val('')
)
