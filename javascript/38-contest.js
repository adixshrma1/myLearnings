let url = 'https://codeforces.com/api/contest.list';
let p = fetch(url);
p.then(response => {
    return response.json();
}).then(contest => {
    console.log(contest.result);
    cardHtml ='';
    for (let item in contest.result) {
        cardHtml += `<div class="card" style="width: 18rem; display: inline-block;">
        <div class="card-body">
            <h5 class="card-title">${contest.result[item].name}</h5>
            <p class="card-text">
                Type of contest  : ${contest.result[item].type}<br/>
                Duration in min  : ${contest.result[item].durationSeconds / 60}
            </p>
        </div>
    </div>`
    }
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = cardHtml;
})

// harry did this using jumbotron of bootstrap 4 and used kontest api. (which is currently not working)

// // problem 2 (note saving)
// let note = prompt('enter your note.');
// localStorage.setItem('note', note);
// let n = localStorage.getItem('note');
// alert('your note is: ' + n);
// let c = confirm('do you want to delete your note');
// if(c){
//     localStorage.removeItem('note');
// }