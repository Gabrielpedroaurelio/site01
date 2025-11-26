export async function PostRequest(url, content) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content)
    };

    const response = await fetch(url, options);

    if (!response.ok) {
        console.log(`Failed Request ... \n Error: ${response.statusText}`);
    } else {
        return await response.json();
    }
}

export async function GetRequest(url) {

    const resquest = await fetch(url)
    if (!resquest.ok) {
        console.log(`Falied Request ... \n Error: ${resquest.statusText}`);


    }
    else {
        const returns_request = await resquest.json()
        return returns_request;

    }

}
export async function PuteRequest(url,content) {
    const Options = {
        headers: { "Content-Type": "application/json" },

        body: content,
        method: "put"
    }
    const resquest = await fetch(url, Options)
    if (!resquest.ok) {
        console.log(`Falied Request ... \n Error: ${resquest.statusText}`);


    }
    else {
        const returns_request = await resquest.json()
        return returns_request;

    }

}
export async function DeleteRequest(url,) {
    const Options = {
        headers: { "Content-Type": "application/json" }
,
        methods: "delete"
    }
    const resquest = await fetch(url, Options)
    if (!resquest.ok) {
        console.log(`Falied Request ... \n Error: ${resquest.statusText}`);


    }
    else {
        const returns_request = await resquest.json()
        return returns_request;

    }

}