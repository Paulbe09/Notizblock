let titles = [];
let notices = [];
let trashtitle = [];
let trashnotices = [];
load();


function init() {
    load()
    rendern()
}


function rendern() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const notice = notices[i];

        content.innerHTML += generate(title, notice,i);

    }
}


function generate(title, notice, i){
    return `
    <div class="block">
        <img class="pin" src="./img/pushpin.png">
        <h2>${title}</h2> 
        <p>${notice} </p> <br>
        <img class="deletebutton" src="./img/trash1.png" onclick="deleteNotice(${i})">
    </div>
`;
}


function saveNotice() {
    let titlein = document.getElementById('title_input');
    let noticein = document.getElementById('notice_input');

    if (titlein.value.length === 0) { alert('Gib einen Titel ein') }
    else {

        if (noticein.value.length === 0) { alert('Gib eine Notiz ein') }
        else {
            pushin(titlein, noticein)
           
        }
    }
}


function pushin(titlein, noticein){
    titles.push(titlein.value);
    notices.push(noticein.value);

    document.getElementById('title_input').value = ``;
    document.getElementById('notice_input').value = ``;

    rendern();
    save();
}


function deleteNotice(i) {
    titles.splice(i, 1);
    notices.splice(i, 1)

    rendern()
    save();
}


function save() {
    let titleAsText = JSON.stringify(titles);
    localStorage.setItem('title_input', titleAsText)

    let noticeAsText = JSON.stringify(notices)
    localStorage.setItem('notice_input', noticeAsText)

}


function load() {
    let titleAsText = localStorage.getItem('title_input');
    let noticeAsText = localStorage.getItem('notice_input');
    if (titleAsText && noticeAsText) {
        titles = JSON.parse(titleAsText);
        notices = JSON.parse(noticeAsText);
    }
}