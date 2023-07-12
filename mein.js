const apibutton= document.getElementById('apibutton');
const apiData= document.getElementById('apiData')

const callApi=()=>{
    fetch('https://meowfactsherokuapp..com/ ')
    .then(res=> res.json())
    .then (data => {
        apiData.innerText=JSON.stringify(data.data);
    }  ) 
.catch(e =>console.error(new Error(e)));   
}

apibutton.addEventListener('click', callApi);