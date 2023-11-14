import React, { useState } from 'react';
import quizData from '../assets/quiz.json';
import '../assets/css/quiz.css';
import CustomSelect from './CustomSelect.jsx';

function TextAnswer({ answer, onSelect }) {
  return (
    <span onClick={onSelect}>
      {answer.text}
    </span>
  );
}

function EmailAnswer({ answer, onChange, value }) {
  return (
    <input
      type="email"
      placeholder={answer.placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

function TextInput({ answer, onChange, value }) {
  return (
    <input
      type="text"
      placeholder={answer.text}
      value={value}
      onChange={onChange}
    />
  );
}

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [emailInput, setEmailInput] = useState('');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');

  const handleAnswerSelect = (questionId, answerId, answerType) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));

    // Переход к следующему вопросу, только если это не dropdown
    if (activeQuestion < quizData.length - 1 && answerType !== 'dropdown') {
      setActiveQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    // Переход к предыдущему вопросу
    if (activeQuestion > 0) {
      setActiveQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  };

  const handleFirstNameInput = (event, inputId) => {
    const firstName = event.target.value;
    setFirstNameInput(firstName);
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizData[activeQuestion].id]: {
        ...prevAnswers[quizData[activeQuestion].id],
        [inputId]: firstName,
      },
    }));
  };
  
  const handleLastNameInput = (event, inputId) => {
    const lastName = event.target.value;
    setLastNameInput(lastName);
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizData[activeQuestion].id]: {
        ...prevAnswers[quizData[activeQuestion].id],
        [inputId]: lastName,
      },
    }));
  };

  

  const renderAnswerComponent = (answerType, answer, onChange, value) => {
    switch (answerType) {
      case 'dropdown':
        return (
          <CustomSelect
            options={answer.options}
            placeholder={answer.placeholder}
            onSelect={(selectedValue) => handleAnswerSelect(quizData[activeQuestion].id, selectedValue, answerType)}
          />
        );
      case 'email':
        return (
          <EmailAnswer answer={answer} onChange={onChange} value={value} />
        );
        case 'input':
          return (
            <TextInput
              answer={answer}
              onChange={onChange}
              value={value}
              inputId={answer.id} // Pass the answer ID as inputId
            />
          );
      default:
        return (
          <TextAnswer answer={answer} onSelect={() => handleAnswerSelect(quizData[activeQuestion].id, answer.id, answerType)} />
        );
    }
  };

  const generateJson = () => {
    console.log('Selected Answers:', selectedAnswers);
    // Здесь вы можете выполнить дополнительные действия с выбранными данными
  };

  return (
    <div className="quiz__form">
      <div key={activeQuestion}>
        <p className="quiz__title">{quizData[activeQuestion].question}</p>
        <ul className="quiz__answers">
          {quizData[activeQuestion].answers.map((answer) => (
            <li key={answer.id} className={`quiz__answer ${selectedAnswers[quizData[activeQuestion].id] === answer.id ? 'selected' : ''}`}>
              {renderAnswerComponent(answer.type, answer, handleEmailInput, emailInput, handleFirstNameInput, firstNameInput, handleLastNameInput, lastNameInput)}
            </li>
          ))}
        </ul>
        <div className="quiz__group">
          <button className="quiz__btn" onClick={handlePrevQuestion} disabled={activeQuestion === 0}>
            Back
          </button>
          {activeQuestion < quizData.length - 1 && (
            <button className="quiz__btn" onClick={() => setActiveQuestion((prevQuestion) => prevQuestion + 1)}>
              Continue
            </button>
          )}
          {activeQuestion === quizData.length - 1 && (
            <button className="quiz__btn" onClick={generateJson}>
              Generate JSON
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
