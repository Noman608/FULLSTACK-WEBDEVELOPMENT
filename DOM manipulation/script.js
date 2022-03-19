// window.onload = function() {
//     let print = document.getElementById('print');
//     let num = document.getElementById('num');
//     let list = document.getElementById('list');
//     print.onclick = function() {

//         let start = new Date().getTime();
//         let N = parseInt(num.value);
//         let listHTML = '';
//         for (let i = 1; i <= N; i++) {
//             listHTML += '<li>' + i + '</li>';
//         }
//         list.innerHTML = listHTML;
//         console.log(new Date().getTime() - start);
//     }
// }

window.onload = function() {
    let print = document.getElementById('print');
    let num = document.getElementById('num');
    let list = document.getElementById('list');
    print.onclick = function() {

        let start = new Date().getTime();
        let N = parseInt(num.value);

        for (let i = 1; i <= N; i++) {
            let item = document.createElement('li')
            item.innerText = i;
            list.appendChild(item);
        }

        console.log(new Date().getTime() - start);
    }
}