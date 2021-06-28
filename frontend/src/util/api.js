
class API {

    static post(path, data, callback) {

        const { hostname } = window.location;
        const api_url = `http://${hostname}:3001${path}`;

        console.log(api_url)

        fetch(api_url, {
            method: "POST",
            credentials: "same-origin",
            body: data
        
        }).then(response => {
            callback(response);
        })
    }

}

export default API;