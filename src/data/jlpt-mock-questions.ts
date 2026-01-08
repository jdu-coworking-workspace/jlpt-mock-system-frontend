export interface Question {
  id: number
  text: string
  highlight?: string
  options: string[]
  category: 'Kanji Reading' | 'Orthography' | 'Word Formation' | 'Contextual Usage' | 'Paraphrases' | 'Usage'
}

export const jlptQuestions: Question[] = [
  // 1. Kanji Reading (問題1)
  {
    id: 1,
    text: 'この大学は地元の学生が多い。',
    highlight: '地元',
    options: ['じもと', 'ちげん', 'ちもと', 'じけん'],
    category: 'Kanji Reading',
  },
  {
    id: 2,
    text: '両国は経済的に密接な関係にある。',
    highlight: '密接',
    options: ['ひっせつ', 'みっせつ', 'みつせつ', 'ひつせつ'],
    category: 'Kanji Reading',
  },
  
  // 2. Orthography / Kanji Writing (問題2) - usually finding the Kanji for hiragana
  // Note: The original request asked for "find kanji from reading"
  {
    id: 3,
    text: 'かれのていあんはきゃっかされた。',
    highlight: 'きゃっか',
    options: ['却下', '脚下', 'キャッカ', '却化'],
    category: 'Orthography',
  },
  {
    id: 4,
    text: '資料をせいりする。',
    highlight: 'せいり',
    options: ['整理', '生理', '正理', '整利'],
    category: 'Orthography',
  },

  // 3. Word Formation (問題3)
  {
    id: 5,
    text: '未経験者___歓迎の求人に応募した。',
    highlight: '___',
    options: ['向', '可', '大', '中'], // e.g. 未経験者可 (Mikeneikensha-ka)
    category: 'Word Formation',
  },
  {
    id: 6,
    text: '社長の___意を得て、新しいプロジェクトが始まった。',
    highlight: '___',
    options: ['合', '同', '共', '一'], // 同意 (Doui) - Agreement
    category: 'Word Formation',
  },

  // 4. Contextual Usage (問題4)
  {
    id: 7,
    text: '雨が降ってきたので、試合は___になった。',
    highlight: '___',
    options: ['延期', '延長', '停止', '中止'],
    category: 'Contextual Usage',
  },
  {
    id: 8,
    text: '彼は___努力して、ついに合格した。',
    highlight: '___',
    options: ['いっしょうけんめい', 'てきとうに', 'なんとなく', '適度に'],
    category: 'Contextual Usage',
  },

  // 5. Paraphrases (問題5)
  {
    id: 9,
    text: 'あわただしい一日だった。',
    highlight: 'あわただしい',
    options: ['忙しい', '静かな', '楽しい', '長い'],
    category: 'Paraphrases',
  },
  {
    id: 10,
    text: 'この説明は概略だ。',
    highlight: '概略',
    options: ['大体', '詳細', '嘘', '一部'],
    category: 'Paraphrases',
  },

  // 6. Usage (問題6) - Correct usage in a sentence
  {
    id: 11,
    // Usage questions are tricky in this single-text format. Usually it's "Select the sentence where the word is used correctly".
    // I'll stick to a simpler format for now or adapt the component if needed.
    // For this mock, I'll simplify to "Choose the correct sentence" style if the component supports it, 
    // but the component seems to expect a single text line.
    // Actually, standard JLPT Usage questions give a word and 4 sentences. 
    // I will represent it as: Text is the word. Options are sentences.
    text: '適度',
    highlight: '適度',
    options: [
      '適度に運動することは健康に良い。',
      '彼は適度な態度をとった。', // Incorrect usage context
      '適度の料理を作る。', // Incorrect
      '適度に勉強する。' // Could be okay but 1 is best.
    ], 
    category: 'Usage',
  },
]
