import React from 'react';
import { Check, X } from 'lucide-react';

interface Option {
  id: string;
  text: string;
}

interface QuizCardProps {
  question: string;
  options: Option[];
  selectedOption: string | null;
  correctOption: string;
  isAnswered: boolean;
  onSelectOption: (optionId: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  selectedOption,
  correctOption,
  isAnswered,
  onSelectOption,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isCorrect = option.id === correctOption;
          
          let optionClass = "p-4 border rounded-lg cursor-pointer transition-colors flex justify-between items-center";
          
          if (!isAnswered) {
            optionClass += isSelected 
              ? " border-green-500 bg-green-50" 
              : " border-gray-200 hover:border-green-300 hover:bg-green-50";
          } else {
            if (isSelected) {
              optionClass += isCorrect
                ? " border-green-500 bg-green-100"
                : " border-red-500 bg-red-100";
            } else if (isCorrect) {
              optionClass += " border-green-500 bg-green-100";
            } else {
              optionClass += " border-gray-200 opacity-70";
            }
          }
          
          return (
            <div
              key={option.id}
              className={optionClass}
              onClick={() => !isAnswered && onSelectOption(option.id)}
            >
              <span>{option.text}</span>
              {isAnswered && isCorrect && (
                <Check size={20} className="text-green-600" />
              )}
              {isAnswered && isSelected && !isCorrect && (
                <X size={20} className="text-red-600" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;