// function Practice(){
//     console.log("Third task")
//     setTimeout(()=>{
//         console.log("First task")
//     }, 3000)
    
//     console.log("Second Task")
// }

// Practice();

// const ArrObj = [
//     {
//         title:"post1",
//         body: "This is a post one body"
//     },
//     {
//         title: "post2",
//         body: "This is post two's body"
//     },
// ]

// function getPosts(){
//     setTimeout(()=>{
//         let content = "";
//         ArrObj.forEach((i)=>{
//             content += `<li>${i.title}</li>`
//         })
//         document.body.innerHTML = content;

//     }, 1000)
// }

// getPosts()
// function createPost(post, callBack){
//     setTimeout(()=>{
//         postMessage.push(post);
//         callBack();
//     }, 2000);
// }

// createPost(
//     {title: "post3", body: "Post three content"},
//     getPosts
// )
//  const myPromise = new Promise((resolved, reject) => {
//     setTimeout(()=>{
//         console.log('a log')
//     }, 5000);

//     if(resolved){
//         resolved("i'm resolved")
//     }else if(rejected){
//         reject("i'm rejected")
//     }
//  });
//  console.log(myPromise)


//  const request = fetch("https://jsonplaceholder.typicode.com/todos/11").then(data => data.json()).then((result)=>{
//     console.log(result);
//  }).catch((error) => console.log("unable to fetch API", error)).finally(()=>{
//     console.log("finally executed")
//  }).finally(()=>{
//     console.log("finally executed")
//  })

 const myRequest = async() => {
    const base_url = "https://jsonplaceholder.typicode.com/todo/2";
    try{
        const request = await fetch(base_url);
        const response = await request.json();
        console.log(response);
    }catch (error){
        console.log(error, "unabke to fetch API");
    }
 }

 myRequest()