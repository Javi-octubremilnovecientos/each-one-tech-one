

export const setStorage = ({topic,results}) => {

    const existingData = JSON.parse(localStorage.getItem("noticias")) || [];
    const newData = [...existingData, { topic, results }];
    localStorage.setItem("noticias", JSON.stringify(newData));

}

export const checkLocalStorage = (topic)=>{
    
    const existingData = JSON.parse(localStorage.getItem("noticias")) 

    if(existingData){
     return   existingData.find(data => data.topic === topic)
    }else{
        return
    }
}
