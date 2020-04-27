import sampleData from "../data/sampleData"

const delay = (ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
}

export default ()=>{
    return delay(3000).then(()=>{
        return Promise.resolve(sampleData)
    })
}
