
const isPrimitive = (value) => {
    return typeof value!=="object" || value===null
}

const getPlainObject=(parentKey,dataObject)=>{
    let plainObject={}
    const objectKeys=Object.keys(dataObject)
    objectKeys.forEach((objectKey)=>{
        const objectValue=dataObject[objectKey]
        const updatedObjectKey=parentKey?parentKey+"_"+objectKey:objectKey
        if(isPrimitive(objectValue)){
            plainObject[updatedObjectKey]=objectValue
        }else{
            plainObject={...plainObject,...getPlainObject(updatedObjectKey,objectValue)}
        }
    })
    return plainObject
}

const user={
    name:"Sunny",
    address:{
        office:{
            city:"Hyderabad",
            temp:null,
        },
        personal:{
            city:"Visakhapatnam",
            temp:undefined,
        }
    }
}

console.log("Final",getPlainObject("",user))
