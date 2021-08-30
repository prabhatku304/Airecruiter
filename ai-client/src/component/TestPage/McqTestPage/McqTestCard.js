import React from "react";

const data = [
  {
    question:
      "Which of the following option leads to the portability and security of Java?",
    answers: [
      "Bytecode is executed by JVM",
      "sarthThe applet makes the Java code secure and portableak",
      "Use of exception handling",
      "Dynamic binding between objects",
    ],
    correct: "Bytecode is executed by JVM",
    questionId: "099099",
  },
  {
    question:
      "In which process, a local variable has the same name as one of the instance variables?",
    answers: [
      "Serialization",
      "Variable Shadowing",
      "Abstraction",
      "Multi-threading",
    ],
    correct: "Variable Shadowing",
    questionId: "093909",
  },
  {
    question: "Which of the following is not a Java features?",
    answers: [
      "Dynamic",
      "Architecture Neutral",
      "Use of pointers",
      "Object-oriented",
    ],
    correct: "Use of pointers",
    questionId: "009039",
  },
  {
    question:
      "hWhich of the following is true about the anonymous inner class?",
    answers: [
      "It has only methods",
      "Objects can't be created",
      "It has a fixed class name",
      "It has no class name",
    ],
    correct: "It has no class name",
    questionId: "090089",
  },
  {
    question: " What do you mean by nameless objects?",
    answers: [
      "An object created by using the new keyword",
      "An object of a superclass created in the subclass",
      "An object without having any name but having a reference",
      "An object that has no reference",
    ],
    correct: "An object that has no reference",
    questionId: "01010101",
  },
  {
    question: "An interface with no fields or methods is known as a ______.",
    answers: [
      "Runnable Interface",
      "Marker Interface",
      "Abstract Interface",
      "CharSequence Interface",
    ],
    correct: "Marker Interface",
    questionId: "092299",
  },
  {
    question: "Which option is false about the final keyword?",
    answers: [
      "A final method cannot be overridden in its subclasses.",
      "A final class cannot be extended.",
      "A final class cannot extend other classes.",
      "A final method can be inherited.",
    ],
    correct: "A final class cannot extend other classes.",
    questionId: "092300",
  },
  {
    question:
      "Which of these classes are the direct subclasses of the Throwable class?",
    answers: [
      "Exceptions occurred by the VirtualMachineError",
      "An exception caused by other exceptions",
      "Exceptions occur in chains with discarding the debugging information",
      "None",
    ],
    correct: "An exception caused by other exceptions",
    questionId: "092301",
  },
  {
    question:
      "In which memory a String is stored, when we create a string using new operator?",
    answers: ["Stack", "String memory", "Heap memory", "Random storage space"],
    correct: "Heap memory",
    questionId: "092302",
  },

  // {
  //     question:
  //       "how build the app ?",
  //     answers: ["vinayak", "sarthak", "somil", "devesh"],
  //     correct: "vinayak",
  //     questionId: "099099"
  //   },
  //   {
  //     question:
  //       "how build the app hi ?",
  //     answers: ["vinayak", "sarthak", "somil", "devesh"],
  //     correct: "vinayak",
  //     questionId: "093909"
  //   },
  //   {
  //     question:
  //       "how build the app hello ?",
  //     answers: ["vinayak", "sarthak", "somil", "devesh"],
  //     correct: "vinayak",
  //     questionId: "009039"
  //   },
  //   {
  //     question:
  //       "how build the app ?",
  //     answers: ["vinayak", "sarthak", "somil", "devesh"],
  //     correct: "vinayak",
  //     questionId: "090089"
  //   },
  //   {
  //     question:
  //       "how build the app ?",
  //     answers: ["vinayak", "sarthak", "somil", "devesh"],
  //     correct: "vinayak",
  //     questionId: "01010101"
  //   },
  //   {
  //     question:
  //       "how build the app ?",
  //     answers: ["vinayak", "sarthak", "somil", "devesh"],
  //     correct: "vinayak",
  //     questionId: "092299"
  //   },
];

const McqTestCard = (props) => {
  const [score, setScore] = React.useState(1);
  const [val, setVal] = React.useState("");
  const [isClicked, setClick] = React.useState(false);
  const [counter, setCount] = React.useState(0);

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = () => {
    let submit = window.confirm("do you want to Submit");
    if (submit) {
      props.SubmitTest(score);
    }
  };
  const nextQuestion = () => {
    let inputs = document.querySelectorAll("input");
    console.log(inputs.length);
    for (let i = 0; i < 4; i++) {
      inputs[i].checked = false;
    }
    if (val === data[counter].correct) {
      let questionScore = score + 1;
      setScore(questionScore);
      console.log(score);
    }

    setCount(counter + 1);
    console.log(counter);
  };

  return (
    <div className="card">
      <div className="ml-3">
        <h6>
          Question : {counter + 1} / {data.length}
        </h6>
      </div>
      <div className="card-body">
        <div className="text-center">
          <h3>{data[counter].question}</h3>
        </div>

        <div className="d-flex q-input p-3 mt-5">
          <div className="d-flex flex-column">
            {" "}
            <span>a. {data[counter].answers[0]} </span>
            <input
              type="radio"
              name="option"
              onChange={handleChange}
              value={data[counter].answers[0]}
              className="q-option ml-2"
            />
          </div>
          <div className="d-flex flex-column">
            {" "}
            <span>b. {data[counter].answers[1]}</span>
            <input
              type="radio"
              name="option"
              onChange={handleChange}
              value={data[counter].answers[1]}
              className="q-option ml-2"
            />
          </div>
          <div className="d-flex flex-column">
            {" "}
            <span>c. {data[counter].answers[2]}</span>
            <input
              type="radio"
              name="option"
              onChange={handleChange}
              value={data[counter].answers[2]}
              className="q-option ml-2"
            />
          </div>
          <div className="d-flex flex-column">
            {" "}
            <div>d. {data[counter].answers[3]}</div>
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
          {counter === data.length - 1 ? (
            <button className="btn" onClick={handleSubmit}>
              Submit Test
            </button>
          ) : (
            <button className="btn" onClick={nextQuestion}>
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { McqTestCard };
