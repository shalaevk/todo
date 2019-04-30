// const xhr = new XMLHttpRequest();

// // xhr.addEventListener('readystatechange', (e) => {
// //   if(xhr.readyState === 4){
// //       console.log(xhr.responseText)
// //   }
// //   console.log(xhr.readyState)
// // });

// xhr.addEventListener('load', (e) => {
//  console.log(xhr.responseText)
//  // xhr.status статус код 200 300 404
//  // xhr.statusText текст ответа = ok, not found
// })

// xhr.addEventListener('error', (e) => {
//  console.log(xhr.responseText)
// })

// xhr.addEventListener('timeout', (e) => {
//  console.log('timeout')
// })

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// xhr.timeout = 3000;

// xhr.setRequestHeader('header', 'application/json')

// xhr.send();


// const ajax = (function (){
//     function send(settings){
//         const xhr = new XMLHttpRequest();

//         xhr.addEventListener('error', (e) => {
//             settings.error({
//                 errorText: xhr.responseText,
//                 code: xhr.status
//             });
//         })

//         xhr.addEventListener('load', (e) => {
//             settings.success(xhr.responseText)
//         });

//         xhr.addEventListener('timeout', (e) => {
//             // some actions
//         });

//         xhr.open(settings.method, settings.url);
//         xhr.timeout = settings.timeout || 3000;
//         // console.log(settings.url)
//         if(settings.headers){
//             for( let headerName in settings.headers){
//                 console.log(headerName)
//                 xhr.setRequestHeader(headerName, settings.headers[headerName])
//             }
//         }
//         xhr.send(settings.data);
//         // return 
//     }
//     return {
//         send: send
//     }

// })();


class Jsonplaceholder {
    getTodos(){
        return new Promise( (resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/todos/`, {method: 'GET'})
                .then( (res) => res.json())
                .then(todos => resolve(todos))
                .catch( err => reject(err))
        })
    }

    delTodo(id){
        return new Promise( (resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: 'DELETE'})
                .then( (id) => resolve(id))
                .catch( (err) => reject(err))

        })
    };
};

