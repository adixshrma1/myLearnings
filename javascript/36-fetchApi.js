// // here we are getting a resource.
// let p = fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e0a191f85e57ca9cfb2d9e288938c487')
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
// }).then(json => console.log(json))

// here, we are creating a new resource with the POST method.
// const options={
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title:'foo',
//         body:'bar',
//         userId:1
//     })
// }
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// with sync await.
async function addPost(todo) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}
async function getTodo(id){
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let response = await p.json();
    return response;
}
async function mainFun(){
    let todo = {
        title: 'Adi',
        body: 'bhai...',
        userId: 1
    }
    let data = await addPost(todo);
    let get = await getTodo(10);
    console.log("The returned data is : ",data);
    console.log(get);
}
mainFun();