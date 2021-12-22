API_key = 'afc56ea0aa5740c091e2059db39aed84';
let i = 0;
countryCode = '';

window.onload = top_news();

async function top_news() {

    console.log(countryCode);
    await axios.get(`https://newsapi.org/v2/top-headlines?source=bbc-news&apiKey=${API_key}`)
        .then(response => response.data.articles)
        .then(data=>{
            console.log("WORKING");
            // NEWS IMAGE
            let f1=document.getElementById("fig-1");
            let f2=document.getElementById("fig-2");
            let f3=document.getElementById("fig-3");

            if(f1.hasChildNodes){
                f1.removeChild(f1.childNodes[0]);
                f2.removeChild(f2.childNodes[0]);
                f3.removeChild(f3.childNodes[0]);
            }

            let img1=document.createElement('img')
            img1.src=data[i*3].urlToImage
            f1.appendChild(img1)

            let img2=document.createElement('img');
            img2.src=(data[(i*3)+1].urlToImage)
            f2.appendChild(img2)

            let img3=document.createElement('img')
            img3.src=(data[(i*3)+2].urlToImage)
            f3.appendChild(img3)

            // NEWS TITLE
            let n1=document.getElementById("news-1");
            let n2=document.getElementById("news-2");
            let n3=document.getElementById("news-3");

            n1.innerHTML=data[i*3].title
            n2.innerHTML=data[(i*3)+1].title
            n3.innerHTML=data[(i*3)+2].title
            
            // NEWS DESC
            let d1=document.getElementById("desc-1");
            let d2=document.getElementById("desc-2");
            let d3=document.getElementById("desc-3");

            d1.innerHTML=data[i*3].description
            d2.innerHTML=data[(i*3)+1].description
            d3.innerHTML=data[(i*3)+2].description
        })
}


async function get_news(countryCode) {

    console.log(countryCode);
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_key}`)
        .then(response => response.data.articles)
        .then(data=>{
            console.log("WORKING");
            // NEWS IMAGE
            let f1=document.getElementById("fig-1");
            let f2=document.getElementById("fig-2");
            let f3=document.getElementById("fig-3");

            if(f1.hasChildNodes){
                f1.removeChild(f1.childNodes[0]);
                f2.removeChild(f2.childNodes[0]);
                f3.removeChild(f3.childNodes[0]);
            }

            let img1=document.createElement('img')
            img1.src=data[i*3].urlToImage
            f1.appendChild(img1)

            let img2=document.createElement('img');
            img2.src=(data[(i*3)+1].urlToImage)
            f2.appendChild(img2)

            let img3=document.createElement('img')
            img3.src=(data[(i*3)+2].urlToImage)
            f3.appendChild(img3)

            // NEWS TITLE
            let n1=document.getElementById("news-1");
            let n2=document.getElementById("news-2");
            let n3=document.getElementById("news-3");

            n1.innerHTML=data[i*3].title
            n2.innerHTML=data[(i*3)+1].title
            n3.innerHTML=data[(i*3)+2].title
            
            // NEWS DESC
            let d1=document.getElementById("desc-1");
            let d2=document.getElementById("desc-2");
            let d3=document.getElementById("desc-3");

            d1.innerHTML=data[i*3].description
            d2.innerHTML=data[(i*3)+1].description
            d3.innerHTML=data[(i*3)+2].description
        })
}


countryIN = ()=>{
    countryCode = `in`;
    get_news(countryCode)
}

countryUS = ()=>{
    countryCode = `us`;
    get_news(countryCode)
}