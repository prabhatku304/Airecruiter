import React from 'react';

const data =[
    { 
        question: 
          "how build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "099099"
      }, 
      { 
        question: 
          "how build the app hi ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "093909"
      }, 
      { 
        question: 
          "how build the app hello ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "009039"
      }, 
      { 
        question: 
          "how build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "090089"
      }, 
      { 
        question: 
          "how build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "01010101"
      }, 
      { 
        question: 
          "how build the app ?", 
        answers: ["vinayak", "sarthak", "somil", "devesh"], 
        correct: "vinayak", 
        questionId: "092299"
      }, 
]

const McqTestCard = (props)=>{

    const [score, setScore] = React.useState(1);
    const [val, setVal] = React.useState("");
    const [isClicked, setClick] = React.useState(false)
    const [counter, setCount] = React.useState(0)
    
    const handleChange = (e)=>{
            setVal(e.target.value)
            
    }
    const handleSubmit = ()=>{
         let submit = window.confirm("do you want to Submit")
         if(submit){
            props.SubmitTest(score)
         }
            
    }
    const nextQuestion = ()=>{
       let inputs = document.querySelectorAll('input')
        console.log(inputs.length)
        for(let i=0;i<4;i++){
            inputs[i].checked = false
        }
        if(val === data[counter].correct ){
            let questionScore = score+1;
            setScore(questionScore)
            console.log(score)
            
        }
        
        setCount(counter+1)
        console.log(counter)
        
    }

    return(
        <div className="card">
             <div className="ml-3">
                 <h6>Question : {counter+1} / {data.length}</h6>
             </div>
                <div className="card-body">
                    <div className="text-center">
                        <h3>{data[counter].question}</h3>
                    </div>
                    
                    <div className="d-flex q-input p-3 mt-5">
                        <div className=""> <span>a</span> 
                            <input
                            type="radio"
                             name="option"
                             onChange={handleChange}
                             value={data[counter].answers[0]}
                             className="q-option ml-2"
                             
                            />

                        </div>
                        <div className=""> <span>b</span> 
                            <input
                            type="radio"
                             name="option"
                             onChange={handleChange}
                             value={data[counter].answers[1]}
                             className="q-option ml-2"
                            />

                        </div>
                        <div className=""> <span>c</span> 
                            <input
                            type="radio"
                             name="option"
                             onChange={handleChange}
                             value={data[counter].answers[2]}
                             className="q-option ml-2"
                            />

                        </div>
                        <div className=""> <span>d</span> 
                            <input
                            type="radio"
                             name="option"
                             onChange={handleChange}
                             value={data[counter].answers[3]}
                             className="q-option ml-2"
                            />

                        </div>
                        
                    </div>
                        <div className="update-btn">
                            {counter===data.length-1 ? (
                                <button className="btn" onClick={handleSubmit}>Submit Test</button>
                            ):( <button className="btn" onClick={nextQuestion}>Next Question</button>)}
                           

                        </div>
                </div>
        </div>
    )
}

export {McqTestCard}