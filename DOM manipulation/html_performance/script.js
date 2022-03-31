window.onload = function () {
  let num = document.getElementById("num");
  let list = document.getElementById("list");
  let print = document.getElementById("print");
  print.onclick = function () {
    let start = new Date().getTime();
    let N  = parseInt(num.value);
    for (let i = 1; i <= N; i++) {
        let item =  document.createElement('li');
        item.innerHTML = i;
        list.appendChild(item)
    }
    
    console.log(new Date().getTime() - start);
  };
};
