function expensive(){
    console.log("Call expensive function")
}

function throttle(func,limit){
    let flag=true
    return function(arguments){
        const context=this
        if(flag){
            func.apply(context,arguments)
            flag=false;
        }
        setTimeout(()=>{
            flag=true
        },limit)
    }
}

const validateWithThrottle = throttle(expensive,1000)