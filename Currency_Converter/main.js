
const apiValue = async (value, currency) => {
    let str = ""
    let url = "https://api.currencyapi.com/v3/currencies?apikey=cur_live_uMjmbuvG1xvpT8TWVUYZ0QhBsJTvclsLcREfRwgu&currencies=EUR%2CUSD%2CCAD&" + currency
    let response = await fetch(url)
    let rjson = await response.json()
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rjson["data"])) {
        str += `<tr>
                     <th>${key}</th>
                     <th>${rjson["data"][key]["code"]}</th>
                     <th>${rjson["data"][key]["value"]*value}</th>
                </tr>`
    }

    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = str;
}

const button = document.querySelector(".btn");
button.addEventListener("click", (e)=>{
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = parseInt(document.querySelector("select[name='currency']").value)
    apiValue(value, currency)
})


