import { useState } from 'react';

export default function QuizEngine({ questions, onComplete, previousScore }) {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);

    function selectAnswer(qId, optionIndex) {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
    }

    function handleSubmit() {
        if (Object.keys(answers).length < questions.length) return;
        let correct = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) correct++;
        });
        const s = Math.round((correct / questions.length) * 100);
        setScore(s);
        setSubmitted(true);
        onComplete(s, answers);
    }

    function handleRetry() {
        setAnswers({});
        setSubmitted(false);
        setScore(null);
    }

    return (
        <div>
            {questions.map((q, idx) => (
                <div key={q.id} className="quiz-question">
                    <div className="quiz-question-number">Pertanyaan {idx + 1} dari {questions.length}</div>
                    <div className="quiz-question-text">{q.question}</div>
                    <div>
                        {q.options.map((opt, oi) => {
                            let cls = 'quiz-option';
                            if (answers[q.id] === oi) cls += ' selected';
                            if (submitted && oi === q.correct) cls += ' correct';
                            if (submitted && answers[q.id] === oi && oi !== q.correct) cls += ' incorrect';
                            return (
                                <div key={oi} className={cls} onClick={() => selectAnswer(q.id, oi)}>
                                    <input type="radio" name={q.id} checked={answers[q.id] === oi} readOnly />
                                    <span>{opt}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            {!submitted ? (
                <button className="btn btn-primary btn-lg" onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length} style={{ width: '100%' }}>
                    Submit Jawaban ({Object.keys(answers).length}/{questions.length})
                </button>
            ) : (
                <div className={`quiz-result ${score >= 70 ? 'pass' : 'fail'}`}>
                    <div className="quiz-result-score" style={{ color: score >= 70 ? '#059669' : '#DC2626' }}>{score}</div>
                    <p style={{ fontSize: '18px', fontWeight: 600, marginTop: '8px' }}>
                        {score >= 70 ? '✅ Selamat! Anda lulus.' : '⚠️ Skor belum mencapai batas minimum.'}
                    </p>
                    <p style={{ color: '#6B7280', marginTop: '4px', fontSize: '14px' }}>
                        {score >= 70 ? `Anda menjawab benar ${Math.round(score * questions.length / 100)} dari ${questions.length} pertanyaan.` : 'Disarankan untuk mengulang materi dan mencoba kembali.'}
                    </p>
                    {score < 70 && (
                        <button className="btn btn-secondary" onClick={handleRetry} style={{ marginTop: '16px' }}>🔄 Coba Lagi</button>
                    )}
                </div>
            )}
        </div>
    );
}
