import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
    },
    
    {
			questionText: 'What is the capital of Germany?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Berlin', isCorrect: true },
				{ answerText: 'Munich', isCorrect: false },
				{ answerText: 'Frankfurt', isCorrect: false },
			],
		},

      {
			questionText: 'What is the capital of Kenya?',
			answerOptions: [
				{ answerText: 'Kinshasa', isCorrect: false },
				{ answerText: 'Kampala', isCorrect: false },
				{ answerText: 'Munich', isCorrect: false },
				{ answerText: 'Nairobi', isCorrect: true },
			],
		},

 {
			questionText: 'What is the capital of Angola?',
			answerOptions: [
				{ answerText: 'Brazaville', isCorrect: false },
				{ answerText: 'Luanda', isCorrect: true },
				{ answerText: 'Lusaka', isCorrect: false },
				{ answerText: 'Nairobi', isCorrect: false },
			],
		},

     {
			questionText: 'What is the capital of New Zealand',
			answerOptions: [
				{ answerText: 'Wellington', isCorrect: true },
				{ answerText: 'Christchurch', isCorrect: false },
				{ answerText: 'Canberra', isCorrect: false },
				{ answerText: 'Brisbane', isCorrect: true },
			],
		},


		{
			questionText: 'What is the capital of New Mozambique?',
			answerOptions: [
				{ answerText: 'Manzini', isCorrect: false },
				{ answerText: 'Maputo', isCorrect: true },
				{ answerText: 'Beira', isCorrect: false },
				{ answerText: 'Windhoek', isCorrect: false },
			],
		},
		{
			questionText: 'Gaborone is the capital of?',
			answerOptions: [
				{ answerText: 'Namibia', isCorrect: false },
				{ answerText: 'ESwatini', isCorrect: false },
				{ answerText: 'Lesotho', isCorrect: false },
				{ answerText: 'Botswana', isCorrect: true },
			],
    },
   {
	questionText: 'Dar es Salaam is the capital of?',
			answerOptions: [
				{ answerText: 'Ethopia', isCorrect: false },
				{ answerText: 'Somalia', isCorrect: false },
				{ answerText: 'Uganda', isCorrect: false },
				{ answerText: 'Tanzania', isCorrect: true },
			],
    },
     {
    questionText: 'The capital of Egypt is?',
			answerOptions: [
				{ answerText: 'Tripoli', isCorrect: false },
				{ answerText: 'Alexadria', isCorrect: false },
				{ answerText: 'Cairo', isCorrect: true },
				{ answerText: 'Suex', isCorrect: false },
			],
    },

    
		 {
			questionText: 'The capital of England is?',
			answerOptions: [
				{ answerText: 'London', isCorrect: true },
				{ answerText: 'Edinburgh', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
				{ answerText: 'Thames', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}