const img = document.querySelector('.gliphy-img')
const btn = document.querySelector('.btn-get-img')
const input = document.querySelector('#img-search')
const message = document.querySelector('.message')


btn.addEventListener('click', function(){
    let searchValue = input.value
    fetchImg(searchValue)
})

function renderError(err){
    message.textContent = err
    fetchImg("cant find")
}



function fetchImg(searchValue){
   
    searchValue == ""? searchValue = "Confused": searchValue;

    console.log(searchValue)
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=lqiImbhCVOOJE5Ww9ZcC9KLQ61XxndZJ&s=${searchValue}`,{mode: 'cors'})
    .then((response)=>{
        if (!response.ok) throw new Error('Too many requests, please wait 5 seconds and try again');
        console.log(response)
        return(response.json())
    })
    .then((data)=>{
        console.log(data)
        if(data.data == []) throw new Error('No image found')
        let newImg =  data.data.images.original.url
        // console.log(data.data.images.original.url)
        img.src = newImg
    })
    .catch((err) => {
        console.log(err);
        renderError(err)
    
        
      });
}