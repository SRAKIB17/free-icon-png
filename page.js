

const pageMain = document.getElementById('page')
let page = 1;
while (page <= 10){
    let pageDiv = `<button class="bg-fuchsia-300 w-fit p-1 rounded-full hover:bg-fuchsia-400 border-solid border-2 hover:border-indigo-600 hover:bg-green" value="${page}" id='page-${page}' onclick='showIcon(this)'>
    ${page}
    </button>`
    pageMain.innerHTML += pageDiv;
    page++
}