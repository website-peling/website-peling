import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import QuizCard from '../components/quiz/QuizCard';
import ProgressBar from '../components/quiz/ProgressBar';
import QuizResult from '../components/quiz/QuizResult';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions';

interface Question {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOption: string;
  explanation: string;
}

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const currentQuestion: Question = quizQuestions[currentQuestionIndex];
  const isAnswered = selectedOptions[currentQuestion.id] !== undefined;
  
  const handleSelectOption = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOptions((prev) => ({
        ...prev,
        [currentQuestion.id]: optionId
      }));
      setShowExplanation(true);
    }
  };
  
  const handleNextQuestion = () => {
    setShowExplanation(false);
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setIsQuizCompleted(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(!!selectedOptions[quizQuestions[currentQuestionIndex - 1].id]);
    }
  };
  
  const calculateScore = () => {
    let totalScore = 0;
    
    quizQuestions.forEach((question) => {
      if (selectedOptions[question.id] === question.correctOption) {
        totalScore += 1;
      }
    });
    
    setScore(totalScore);
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setIsQuizCompleted(false);
    setScore(0);
    setShowExplanation(false);
  };
  
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {!isQuizCompleted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Kuis Pengetahuan Lingkungan</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Cobain kuis interaktif ini buat cek seberapa paham kamu tentang isu lingkungan dan belajar fakta seru tentang planet kita.
                </p>
              </div>
              
              <ProgressBar 
                current={currentQuestionIndex + 1} 
                total={quizQuestions.length} 
              />
              
              <QuizCard 
                question={currentQuestion.question}
                options={currentQuestion.options}
                selectedOption={selectedOptions[currentQuestion.id] || null}
                correctOption={currentQuestion.correctOption}
                isAnswered={isAnswered}
                onSelectOption={handleSelectOption}
              />
              
              {showExplanation && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4 max-w-2xl mx-auto">
                  <h4 className="font-semibold mb-2">Penjelasan:</h4>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
              
              <div className="flex justify-between max-w-2xl mx-auto mt-6">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center ${
                    currentQuestionIndex === 0 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <ArrowLeft size={18} className="mr-1" />
                  Sebelumnya
                </button>
                
                <button
                  onClick={handleNextQuestion}
                  disabled={!isAnswered}
                  className={`px-6 py-2 rounded-full font-medium inline-flex items-center ${
                    isAnswered
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentQuestionIndex === quizQuestions.length - 1 ? 'Kuis Selesai' : 'Pertanyaan Selanjutnya'}
                  {isAnswered && <ArrowRight size={18} className="ml-1" />}
                </button>
              </div>
            </>
          ) : (
            <>
              <QuizResult 
                score={score} 
                totalQuestions={quizQuestions.length} 
                onRestartQuiz={restartQuiz} 
              />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default QuizPage;