document.getElementById("category").addEventListener('click',(e)=>{
    console.log("event info",e.target.id,e.target.tagName)
    if(e.target.tagName==="LI"){
        window.location.href=`/${e.target.id}`
    }
})
