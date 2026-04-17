"use client";

const QuestionBanner = ({ question, selectedAnswer, onAnswer }) => {
  return (
    <div className="p-3 md:p-5 space-y-6 md:space-y-10">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/images/bg/welcome_cover.png"
          alt="welcome-background"
          className="w-full h-32 md:h-28 lg:h-20 object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 text-white left-4 md:left-10">
          <p className="my-0 text-sm md:text-base font-semibold leading-normal">
            {question.question}
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Array.isArray(question?.options) &&
            question.options.map((option, index) => {
              const optionValue = String.fromCharCode(65 + index);
              const isSelected = selectedAnswer === optionValue;

              return (
                <label
                  key={optionValue}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={optionValue}
                    checked={isSelected}
                    onChange={() => onAnswer(question.id, optionValue)}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center text-sm font-medium ${
                        isSelected
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {optionValue}
                    </span>
                    <span className="flex-1">{option}</span>
                  </div>
                </label>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default QuestionBanner;
