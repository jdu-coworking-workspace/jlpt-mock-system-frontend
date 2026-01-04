import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, AlertCircle, Clock } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/_test-taking/tests/$testId/take')({
  component: TestTakingComponent,
})

function TestTakingComponent() {
  const { testId } = Route.useParams()
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const questions = [
    {
      id: 1,
      text: 'この大学は地元の学生が多い',
      options: ['じもと', 'ちげん', 'ちもと', 'じけん'],
      category: 'Kanji reading',
    },
    {
      id: 2,
      text: '両国経済的に密接な関係にある',
      options: ['ひっせつ', 'みっせつ', 'みつせつ', 'ひつせつ'],
      category: 'Kanji reading',
    },
  ]

  const toggleAnswer = (qId: number, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: optionIndex + 1,
    }))
  }

  return (
    <div className="flex flex-col h-screen bg-[#f0f4f8]">
      {/* Test Header Area */}
      <div className="flex flex-col items-center py-3 space-y-2 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="bg-[#333] text-white px-6 py-1.5 rounded-full flex gap-6 text-sm shadow-sm">
          <button className="text-[#f9b17a] font-bold border-b-2 border-[#f9b17a] px-2">
            文字・語彙
          </button>
          <button className="hover:text-gray-300 px-2 transition-colors">
            聴解
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-4 px-6 pb-6 overflow-hidden max-w-[1600px] mx-auto w-full">
        {/* Main Content */}
        <div className="flex-1 flex flex-col space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {/* Instruction Box */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-base font-medium text-gray-800">
              問題______の読み方として最もよいものを、1・2・3・4から一つ選びなさい。
            </p>
          </div>

          {/* Question Cards */}
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm relative group hover:border-teal-100 transition-colors"
            >
              <div
                className="absolute right-4 top-4 text-gray-300 group-hover:text-teal-600 transition-colors cursor-pointer"
                title="Report Issue"
              >
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="text-gray-400 text-sm font-bold mb-3 uppercase tracking-wider">
                Question {q.id}
              </h3>
              <p className="text-xl mb-6 font-medium text-gray-900 leading-relaxed">
                {q.text.split('地元').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="underline underline-offset-4 decoration-2 decoration-gray-400">
                        地元
                      </span>
                    )}
                  </span>
                ))}
              </p>

              <div className="space-y-3 mb-6 pl-1">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-base cursor-pointer hover:bg-gray-50 p-2 rounded-lg -ml-2 transition-colors"
                    onClick={() => toggleAnswer(q.id, i)}
                  >
                    <span
                      className={cn(
                        'w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all',
                        answers[q.id] === i + 1
                          ? 'bg-black border-black text-white'
                          : 'border-black text-black bg-white',
                      )}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={cn(
                        answers[q.id] === i + 1
                          ? 'font-semibold text-gray-900'
                          : 'text-gray-700',
                      )}
                    >
                      {opt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Selection Bubbles (Scantron Style) */}
              <div className="flex gap-6 mt-2 pt-4 border-t border-gray-50">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => toggleAnswer(q.id, num - 1)}
                    className="flex items-center gap-2 group/btn"
                  >
                    <span className="text-xs font-bold text-gray-400 group-hover/btn:text-gray-600">
                      {num}
                    </span>
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full border flex items-center justify-center transition-all shadow-sm',
                        answers[q.id] === num
                          ? 'bg-black border-black'
                          : 'bg-white border-gray-300 group-hover/btn:border-teal-400',
                      )}
                    >
                      {answers[q.id] === num && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center py-4 px-2">
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-900 gap-2 pl-0 hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-64 flex flex-col space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col h-full">
            <div className="flex flex-col items-center justify-center gap-1 text-teal-600 mb-4 bg-teal-50/50 py-3 rounded-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700/70">
                Time Remaining
              </span>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-2xl font-mono font-bold tracking-tighter">
                  2:28:59
                </span>
              </div>
            </div>

            <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded-lg py-2 text-sm font-semibold mb-6 shadow-sm">
              Submit Exam
            </Button>

            <div className="flex-1 overflow-y-auto space-y-5 pr-1 custom-scrollbar">
              <div>
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 border-b pb-1">
                  Navigation
                </h4>

                <div className="mb-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Kanji reading
                  </p>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        className={cn(
                          'w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-medium transition-all',
                          answers[n]
                            ? 'bg-teal-600 border-teal-600 text-white shadow-sm'
                            : n === 1
                              ? 'border-teal-500 text-teal-700 bg-teal-50 ring-2 ring-teal-100'
                              : 'border-gray-200 text-gray-600 hover:border-teal-300 hover:text-teal-600',
                        )}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
                    Orthography
                  </p>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[6, 7, 8, 9, 10].map((n) => (
                      <button
                        key={n}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 hover:border-teal-300 hover:text-teal-600 transition-all"
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  )
}
