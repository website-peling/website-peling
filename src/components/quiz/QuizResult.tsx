import React from 'react';
import { Award, RefreshCw } from 'lucide-react';
import { Link } from '../ui/Link';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestartQuiz: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ 
  score, 
  totalQuestions,
  onRestartQuiz
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = '';
  let messageClass = '';
  
  if (percentage >= 80) {
    message = 'Luar biasa! Anda adalah ahli lingkungan!';
    messageClass = 'text-green-600';
  } else if (percentage >= 60) {
    message = 'Bagus! Anda memiliki pengetahuan lingkungan yang baik.';
    messageClass = 'text-green-600';
  } else if (percentage >= 40) {
    message = 'Tidak buruk, tapi masih ada ruang untuk peningkatan.';
    messageClass = 'text-yellow-600';
  } else {
    message = 'Terus belajar tentang isu lingkungan.';
    messageClass = 'text-red-600';
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full flex items-center justify-center bg-green-100">
            <span className="text-3xl font-bold text-green-700">{percentage}%</span>
          </div>
          <Award size={36} className="absolute -top-2 -right-2 text-green-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-2">Kuis Selesai!</h2>
      <p className={`text-xl font-medium mb-4 ${messageClass}`}>{message}</p>
      
      <p className="mb-6">
        Anda menjawab benar <span className="font-bold">{score}</span> dari <span className="font-bold">{totalQuestions}</span> pertanyaan.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={onRestartQuiz}
          className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center"
        >
          <RefreshCw size={18} className="mr-2" />
          Coba Lagi
        </button>
        <Link
          to="/resources"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition-colors"
        >
          Jelajahi Sumber Daya
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;