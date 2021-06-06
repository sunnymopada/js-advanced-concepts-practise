document.getElementById("grandParent").addEventListener('click',(e)=>{
    console.log("Grand parent clicked")
    e.stopPropagation()
})

document.getElementById("parent").addEventListener('click',(e)=>{
    console.log("Parent clicked")
    e.stopPropagation()
})

document.getElementById("child").addEventListener('click',(e)=>{
    console.log("Child clicked")
    e.stopPropagation()
})