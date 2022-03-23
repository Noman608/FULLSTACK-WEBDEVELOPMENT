$(() => {
    let fetch = $('#fetch');
    let list = $('#people')
    let page = 1;
    fetch.click(() => {
        $.get(`https://reqres.in/api/users?page=${page}`, (data) => {
            page++;
            for (let p of data.data) {
                list.append(
                    $(`<img width="100" src="${p.avatar}"> <li>${p.first_name}  ${p.last_name}</li>`)
                );
            }
        })
    })

})