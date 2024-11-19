


export default function AuthDelete(url: string, data: any, accessToken: any, errorHandler: () => {}, responseHandler?: () => {}) {

    fetch(url, { method: "DELETE", headers: { "Content-Type": "application/json", authorization: `Bearer ${accessToken}` }, body: JSON.stringify(data) })
        .then(response => {
            if (!response.ok) {
                errorHandler()
                return
            }
            response.json()
        })
        .then(data => {
            if (responseHandler) {
                responseHandler()
            }
        })

        .catch(error => {
            console.log(error)
            errorHandler()
        })

}
