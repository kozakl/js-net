export default function request<T1, T2 = {}>(url:string, data?:T2):Promise<T1>
{
    if (data)
    {
        const init:RequestInit = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        return fetch(process.env.API_URL + url, init)
            .then<T1>((response)=> {
                if (!response.ok)
                    throw new Error(response.status + ' ' +
                                    response.statusText);
                
                return response.json();
            })
    }
    else {
        return fetch(process.env.API_URL + url)
            .then<T1>((response)=> {
                if (!response.ok)
                    throw new Error(response.status + ' ' +
                                    response.statusText);
                
                return response.json();
            });
    }
}
