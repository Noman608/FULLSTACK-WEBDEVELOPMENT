let ulTasks = $("#ulTasks");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let inputNewTask = $("#newTask");
let btnCleanup = $("#btnCleanup");
let btnSort = $("#btnSort");

function addItem() {
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inputNewTask.val(),
  });
  listItem.click((event) => {
    listItem.toggleClass("done");
  });
  ulTasks.append(listItem);
  inputNewTask.val("");
}
function clearDone() {
  $("#ulTasks .done").remove();
}
function sortTask() {
  $("#ulTasks .done").appendTo(ulTasks);
}
inputNewTask.keypress((e) => {
  if (e.which == 13) {
    addItem();
  }
});
btnAdd.click(addItem);
btnCleanup.click(clearDone);

btnSort.click(sortTask);

btnReset.click(() => {
  inputNewTask.val("");
  toggleInputButtons(true)
});

function toggleInputButtons(valIsEmpty) {
  if (!valIsEmpty) {
    btnReset.prop('disabled', false);
    btnAdd.prop('disabled', false);
  } else {
    btnReset.prop('disabled',true)
    btnAdd.prop('disabled', true);
  }
}
inputNewTask.on('input',()=>{
  toggleInputButtons(inputNewTask.val()=='');
})
