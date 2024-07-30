// HackerMan: Mock hack program.
let arr = [
    'Initialising the hack...',
    'getting access to Ashish \'s smartphone',
    'hacking  into Ashish\'s social media accounts',
    '200k passwords tried for instagram',
    'Access denied...',
    'another 200k password tried',
    'password MATCHED'
]
async function sleep(seconds){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ resolve() }, seconds * 1000)
    })
}
async function startHack(message){
    await sleep(2);
    console.log(message);
}
(async ()=>{
    for(let i=0; i < arr.length; i++){
        await startHack(arr[i]);
    }
})()