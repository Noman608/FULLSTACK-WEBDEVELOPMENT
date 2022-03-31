// $(() => {
//     let item =  $('#item');
//     $('#prepend').click(()=>{
//         let text =item.val();
//         $('#list').prepend($(`<li>`).text(text))
//     })
//     $('#append').click(()=>{
//         let text = item.val();
//         $('#list').append($(`<li>`).text(text))
//     })
// });

$(() => {
  let list = $("#people");
  let page = 1;
  $("#fetch").click(() => {
    $.get(`https://reqres.in/api/users?pages=${page}`, (data) => {
      page++;
      for (let person of data.data) {
        list.append($(`<li> ${person.first_name} ${person.last_name}</li>`));
      }
    });
  });
});
