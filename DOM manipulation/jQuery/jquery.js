$(() => {
    let item = $('#item');
    let Prepend = $('#prepend');
    let list = $('#list');
    Prepend.click(() => {
        let Text = item.val();
        $('#list').prepend($(`<li>${Text}</li>`));
        //OR  //$('#list').prepend($(`<li>`).text(Text));
        //  list.prepend($(`<li>`).html(`<b>${Text}</b>`))
    })
    $('#append').click(() => {
        let Text = item.val();
        item.append($(`<li>${Text}</li>`));
        //OR  //$('#list').prepend($(`<li>`).text(Text));
        //  list.prepend($(`<li>`).html(`<b>${Text}</b>`))
    })

})