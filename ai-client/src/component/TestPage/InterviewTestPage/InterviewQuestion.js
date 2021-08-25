import React from 'react';


var data =[
    {
        question: "Tell me about yourself",
        id: 1,
        time: 60,
        display:false
    },
    {
        question: "Why you are perfect for this position",
        id: 2,
        time: 60,
        display: false
    }
]




const InterviewQuestion = (props)=>{

    const [track, setTrack] = React.useState(0)
    const [question, setQuestion] = React.useState([])
    const TrackQuestion = (res)=>{

             


    }
    const NextQuestion = ()=>{
        for(let i=0; i<data.length;i++){
            timer()
            setTimeout(()=>{
                
                
                if(track<data.length-1){
                    setTrack(track+1);
                    clearTimeout()
                }
            }, data[i].time*1000)
            console.log(track)
        }
            


    }
    const timer = ()=>{
        let now = 0
        let clock = 0
        let time = setInterval(()=>{
            now+=1;
            clock = 60 - now
            document.querySelector('.timer').innerHTML = clock + "s"
            if(clock < 1){
                clearInterval(time)
               
            }
            console.log(clock)

    },1000)}

   

    return(
        <div>
            <div className="question-render">
                
                <div className="question text-center">
                    {NextQuestion() }
                
                   <p className="h3">{data[track].question} </p>
                </div>
                <div className="time">
                    <div className="mt-5">
                        
                        <h2 className="timer"></h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export {InterviewQuestion}