import React from 'react';


const CompanyQuestionContent = (props)=>{

    const [question, setQuestion] = React.useState('')
    const [answer_1, setAnswer1] = React.useState('');
    const [answer_2, setAnswer2] = React.useState('');
    const [answer_3, setAnswer3] = React.useState('');
    const [answer_4, setAnswer4] = React.useState('');

    const [correct, setCorrect] = React.useState('');

    const handleChange = (e)=>{
        e.preventDefault()
     props.onSubmitCallback({question,answer_1,answer_2,answer_3,answer_4,correct})
     setQuestion('')
     setAnswer1('')
     setAnswer2('')
     setAnswer3('')
     setAnswer4('')
     setCorrect('')
    }

    return(
            <div>
                <div className="container mt-5 card">
                    <div className="question-upload p-5 ">
                        <div className="">
                            <form onSubmit={handleChange}>
                                <div className="form-group">
                                    <textarea 
                                    type="text"
                                    placeholder="type question"
                                    className="form-control"
                                    name="question"
                                    onChange={(e)=> setQuestion(e.target.value)}
                                    value={question}
                                    row={4}
                                    />
                                </div>
                                <div className="answer">
                                    <div className="form-group">
                                        <input 
                                        type="text"
                                        placeholder="type answer"
                                        className="form-control"
                                        name="answer_1"
                                        onChange={(e)=>{
                                            setAnswer1(e.target.value)
                                        }}
                                        value={answer_1}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        type="text"
                                        placeholder="type answer"
                                        className="form-control"
                                        name="answer_2"
                                        onChange={(e)=> {
                                            setAnswer2(e.target.value)
                                        }}
                                        value={answer_2}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        type="text"
                                        placeholder="type answer"
                                        className="form-control"
                                        name="answer_3"
                                        onChange={(e)=>{
                                            setAnswer3(e.target.value)
                                        }}
                                        value={answer_3}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        type="text"
                                        placeholder="type answer"
                                        className="form-control"
                                        name="answer_4"
                                        onChange={(e)=>{
                                            setAnswer4(e.target.value)
                                        }}
                                        value={answer_4}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-4">
                                    <input 
                                    type="text"
                                    placeholder="type correct answer"
                                    className="form-control w-50 "
                                    name="correct"
                                    onChange={(e)=> setCorrect(e.target.value)}
                                    value={correct}
                                    />
                                </div>

                                <div className="update-btn mt-5">
                                    <button className="btn">Upload</button>
                                </div>
                             
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export {CompanyQuestionContent}