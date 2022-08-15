const API_KEY ="Lefiiv4O_BcPeizhH1U_l_wWP24";
//add api url as a const so it can call the url when called upon
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

//add click event listener
document.getElementById("status").addEventListener("click", e => getStatus(e));

//get request task to make get resquest to url with api key and pass function to data to display it
async function getStatus(e){
    //template literal
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if(response.ok){
        console.log(data);
    }
}