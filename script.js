const input = document.querySelector("#search-bar input");
const searchBtn =  document.querySelector("#search-bar button");
const clientId = "iHjTb_L2_u82SYTC_c9e1cbDNsAL37ZbOrn34mhYKks";
const imgResults = document.querySelector("#img-results");
const showMore = document.querySelector("#show-more");

let keyWord = "";
let page = 1;
async function searchImg() {
    try {
        const keyWord = input.value;
        const apiUrl = `https://api.unsplash.com/search/photos?per_page=12&page=${page}&query=${keyWord}&client_id=${clientId}`;

        let response = await fetch(apiUrl);
        let data = await response.json();
        // console.log(data);
        console.log(data.results);
        let results = data.results;//array
        if ( page===1){
            imgResults.innerHTML = "";

        }

        results.forEach( (result)=>{
            let image = document.createElement('img');
            image.src = result.urls.small ;
            let imageLink = document.createElement( 'a');
            imageLink.href = result.links.html ;
            imageLink.target = "_blank" //open in new tab

            imageLink.appendChild(image);
            imgResults.appendChild(imageLink);
            showMore.style.display = "block";
        })

    } 
    catch (error) {
        console.log(error);
    }
}

searchBtn.addEventListener( "click", ()=>{
    page =1 ;
    searchImg();
})
showMore.addEventListener("click", ()=>{
    page++;
    
    searchImg();
})