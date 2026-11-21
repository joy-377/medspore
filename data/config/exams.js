// Pattern reference: NEET PG 2026 and INI-CET July 2026. Review official bulletins before later sessions.
export const EXAMS = {
  neetpg: {label:'NEET PG (2026 pattern)', fullQuestions:180, fullMinutes:210, sections:5, correct:4, wrong:-1, multipleChoice:false, source:'https://natboard.edu.in'},
  inicet: {label:'INI-CET (July 2026 pattern)',fullQuestions:200,fullMinutes:180,sections:4,correct:1,wrong:-1/3,multipleChoice:true,source:'https://www.aiimsexams.ac.in'}
};
// Only single-best-answer examples are included; INI-CET multiple-correct questions will need new reviewed data.
export function getTestPreset(exam,kind){const x=EXAMS[exam]||EXAMS.neetpg;const factor=kind==='full'?1:kind==='half'?0.5:kind==='mini'?0.2:0;return {count:Math.round(x.fullQuestions*factor),minutes:Math.round(x.fullMinutes*factor),sections:kind==='full'||kind==='half'?x.sections:kind==='mini'?x.sections:1};}
