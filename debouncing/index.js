let count=0

const getData = () => {
    console.log("Fetching data",++count,document.getElementById('search').value)
}

let previousTime=Date.now()

const debounce = (func,delay) => {
    let timer
    return function(arguments){
    let context=this
    args=arguments
    timer && clearTimeout(timer)
    timer= setTimeout(
        ()=>{
            func.apply(context,arguments)
        },delay)
    }
}

const getDataWithDebounce = debounce(getData,300)
