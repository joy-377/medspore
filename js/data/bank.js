import {subjects,subjectModules} from '/data/subjects/registry.js';
export {subjects};
const cache=new Map();export async function subjectQuestions(id){if(!subjectModules[id])return [];if(!cache.has(id)){cache.set(id,import(subjectModules[id]+'?edition=20261123-final').then(m=>m.default).catch(e=>{cache.delete(id);console.warn('Question file failed:',id,e);return []}))}return cache.get(id)}
export async function allQuestions(){const parts=await Promise.all(subjects.map(s=>subjectQuestions(s.id)));return parts.flat()}
export async function findQuestion(id){if(!id)return null;const sub=subjects.find(s=>id.startsWith(s.code+'-Q-'));if(sub)return (await subjectQuestions(sub.id)).find(q=>q.id===id)||null;return (await allQuestions()).find(q=>q.id===id)||null}
export const subjectById=id=>subjects.find(x=>x.id===id);
export const subjectBySlug=slug=>subjects.find(x=>x.slug===slug);
export function questionSearch(questions,{subjects:chosen=[],topics=[],levels=[]}={}){return questions.filter(q=>(!chosen.length||chosen.includes(q.subjectId))&&(!topics.length||topics.includes(q.topic))&&(!levels.length||levels.includes(q.level)))}
