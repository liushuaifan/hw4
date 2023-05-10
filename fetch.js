const XHR = (url, cb) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            cb(xhttp.response);
        }
    };
    xhttp.open("GET", url);
    xhttp.send();
};

// XHR("https://jsonplaceholder.typicode.com/todos/1", (data) => {
//     console.log(1, data);
// });

function myFetch(url, cb, type, object,id ){
    var data = {};
    var xhr = new XMLHttpRequest();
    if(type==='get'){
        XHR(url,cb);
    } else if(type==='post'){
        for(let key in object){
            data[key] = object[key];
        }
        var json = JSON.stringify(data);
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "201") {
                console.log(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(json);
    } else if(type==='put'){
        for(let key in object){
            data[key] = object[key];
        }
        var json = JSON.stringify(data);
        xhr.open("PUT", url+'/'+id, true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "201") {
                console.log(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(json);

    }else if(type==='delete'){
 
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", url, true);
        xhr.onload = function () {
	        var users = JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "200") {
                    console.log(users);
                } else {
                    console.error(users);
                }
        }
        xhr.send(null); 
    }
}

myFetch("https://jsonplaceholder.typicode.com/todos/1", (data) => {
    console.log(1, data);
}, "get");

myFetch("https://jsonplaceholder.typicode.com/todos", (data) => {
    console.log(2, data);
}, "post", {userId: 1,
    title: 'clean room',
    completed: false});

    myFetch("https://jsonplaceholder.typicode.com/todos", (data) => {
        //console.log( data);
    }, "put", {
        userId: 2,
        id: 8,
        title: 'hello task',
        completed: false
        },  8);

        myFetch("https://jsonplaceholder.typicode.com/todos/1", (data) => {
            
        }, "delete");







