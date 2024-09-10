// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axios from "axios";
// // import Header from "./header";

// // interface Question {
// //   id: number;
// //   question: string;
// //   options: string[];
// //   correctAnswer: string;
// // }

// // const QuestionPage: React.FC = () => {
// //   const navigate = useNavigate();
// //   const { questionId } = useParams<{ questionId: string }>();
// //   const [questions, setQuestions] = useState<Question[]>([]);
// //   const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
// //   const currentQuestionIndex = Number(questionId) - 1;

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/questions")
// //       .then((response) => setQuestions(response.data))
// //       .catch((error) => console.error("Error fetching data:", error));
// //   }, []);

// //   const handleAnswerSelection = (answer: string) => {
// //     const newAnswers = [...selectedAnswers];
// //     newAnswers[currentQuestionIndex] = answer;
// //     setSelectedAnswers(newAnswers);
// //   };

// //   const handleContinue = () => {
// //     if (currentQuestionIndex < questions.length - 1) {
// //       navigate(`/question/${currentQuestionIndex + 2}`);
// //     } else {
// //       const isPassed = selectedAnswers.every(
// //         (answer, idx) => answer === questions[idx].correctAnswer
// //       );
// //       navigate(isPassed ? "/passed" : "/failed");
// //     }
// //   };

// //   const handlePrevious = () => {
// //     navigate(`/question/${currentQuestionIndex}`);
// //   };

// //   return (
// //     <div>
// //       <Header />
// //       {questions.length > 0 && (
// //         <div>
// //           <h2>{questions[currentQuestionIndex].question}</h2>
// //           <ul>
// //             {questions[currentQuestionIndex].options.map((option, idx) => (
// //               <li key={idx} onClick={() => handleAnswerSelection(option)}>
// //                 {option}
// //               </li>
// //             ))}
// //           </ul>
// //           <div>
// //             {currentQuestionIndex > 0 && (
// //               <button onClick={handlePrevious}>Previous</button>
// //             )}
// //             <button onClick={handleContinue}>Continue</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default QuestionPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Header from "./header";

// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// const QuestionPage: React.FC = () => {
//   const navigate = useNavigate();
//   const { questionId } = useParams<{ questionId: string }>();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
//   const [usedQuestions, setUsedQuestions] = useState<number[]>([]); // Track used questions
//   const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
//   const currentQuestionIndex = Number(questionId) - 1;

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/questions")
//       .then((response) => {
//         const allQuestions = response.data as Question[];
//         setQuestions(allQuestions);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   console.log("questions>>>>", questions);
//   useEffect(() => {
//     if (questions.length > 0) {
//       let availableQuestions = questions.filter(
//         (q) => !usedQuestions.includes(q.id)
//       );
//       if (availableQuestions.length > 0) {
//         const randomIndex = Math.floor(
//           Math.random() * availableQuestions.length
//         );
//         const selectedQuestion = availableQuestions[randomIndex];
//         setCurrentQuestion(selectedQuestion);
//         setUsedQuestions((prev) => [...prev, selectedQuestion.id]);
//       }
//     }
//   }, [questions, currentQuestionIndex]);

//   const handleAnswerSelection = (answer: string) => {
//     const newAnswers = [...selectedAnswers];
//     newAnswers[currentQuestionIndex] = answer;
//     setSelectedAnswers(newAnswers);
//   };

//   const handleContinue = () => {
//     if (currentQuestionIndex < 4) {
//       // Only show 5 questions total
//       navigate(`/question/${currentQuestionIndex + 2}`);
//     } else {
//       const isPassed = selectedAnswers.every(
//         (answer, idx) => answer === questions[idx].correctAnswer
//       );
//       navigate(isPassed ? "/passed" : "/failed");
//     }
//   };

//   const handlePrevious = () => {
//     navigate(`/question/${currentQuestionIndex}`);
//   };

//   return (
//     <div>
//       <Header />
//       {currentQuestion && (
//         <div>
//           <h2>{currentQuestion.question}</h2>
//           <ul>
//             {currentQuestion.options.map((option, idx) => (
//               <li key={idx} onClick={() => handleAnswerSelection(option)}>
//                 {option}
//               </li>
//             ))}
//           </ul>
//           <div>
//             {currentQuestionIndex > 0 && (
//               <button onClick={handlePrevious}>Previous</button>
//             )}
//             <button onClick={handleContinue}>Continue</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuestionPage;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./header";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();
  const { questionId } = useParams<{ questionId: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const currentQuestionIndex = Number(questionId) - 1;

  useEffect(() => {
    if (questionId) {
      axios
        .get("http://localhost:5000/questions")
        .then((response) => {
          const allQuestions = response.data as Question[];
          setQuestions(allQuestions);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [questionId]);
  console.log("question>>>>", questions);

  useEffect(() => {
    if (questions.length > 0) {
      let availableQuestions = questions.filter(
        (q) => !usedQuestions.includes(q.id)
      );
      if (availableQuestions.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * availableQuestions.length
        );
        const selectedQuestion = availableQuestions[randomIndex];
        setCurrentQuestion(selectedQuestion);
        setUsedQuestions((prev) => [...prev, selectedQuestion.id]);
      }
    }
  }, [questions, currentQuestionIndex]);

  const handleAnswerSelection = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleContinue = () => {
    if (currentQuestionIndex < 4) {
      navigate(`/question/${currentQuestionIndex + 2}`);
    } else {
      const isPassed = selectedAnswers.every(
        (answer, idx) => answer === questions[idx].correctAnswer
      );
      navigate(isPassed ? "/passed" : "/failed");
    }
  };

  const handlePrevious = () => {
    navigate(`/question/${currentQuestionIndex}`);
  };

  return (
    <div>
      <Header />
      {currentQuestion && (
        <div>
          <h2>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.options.map((option, idx) => (
              <li key={idx} onClick={() => handleAnswerSelection(option)}>
                {option}
              </li>
            ))}
          </ul>
          <div>
            {currentQuestionIndex > 0 && (
              <button onClick={handlePrevious}>Previous</button>
            )}
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
