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

function CheckboxAnswer({ answer, onChange, checked }) {
  return (
    <>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label onClick={onChange}>{answer.text}</label>
      {checked && <span> Я подтверждаю обработку своих данных</span>}
    </>
  );
}

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [emailInput, setEmailInput] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

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

  const handleCheckboxChange = () => {
    setCheckboxChecked((prevChecked) => !prevChecked);
  };

  const renderAnswerComponent = (answerType, answer, onChange, value, checked) => {
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
      case 'checkbox':
        return (
          <CheckboxAnswer answer={answer} onChange={onChange} checked={checked} />
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
              {renderAnswerComponent(answer.type, answer, handleEmailInput, emailInput, checkboxChecked)}
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
