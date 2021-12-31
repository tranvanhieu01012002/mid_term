const API_URL = "https://61bc10c1d8542f0017824531.mockapi.io";

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}

add_news = () => {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var text_discribe = document.querySelector("#text_discribe").value;
    var content = document.querySelector("#content").value;
    var img = document.querySelector("#img").value;
    var current = new Date();
    var day = current.getDate();
    var month = current.getMonth();
    var year = current.getFullYear();
    current = `${day}/${month + 1}/${year}`;
    var news = {
        title: title,
        author: author,
        content: text_discribe + "  " + content,
        img: img,
        time: current,
        id: "",
    };
    callAPI("newspapers", "POST", news).then(
        (res = () => {
            console.log("successful !");
            reset();
        })
    );
};
reset = () => {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#text_discribe").value = "";
    document.querySelector("#content").value = "";
    document.querySelector("#img").value = "";
};