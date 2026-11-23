import {getState} from '../core/storage.js';

// Very short, low-volume, self-contained UI cues. No external assets or autoplay.
// Playback requires a gesture; every cue respects the user's sound preference.
let context;
const cues={
  nav:    {notes:[[420,.045,0],[505,.055,.035]],volume:.012,wave:'sine'},
  select: {notes:[[580,.035,0]],volume:.014,wave:'sine'},
  click:  {notes:[[520,.038,0]],volume:.013,wave:'sine'},
  soft:   {notes:[[440,.055,0]],volume:.012,wave:'sine'},
  correct:{notes:[[620,.075,0],[783,.10,.065]],volume:.032,wave:'sine'},
  wrong:  {notes:[[360,.085,0],[295,.105,.065]],volume:.018,wave:'sine'},
  finish: {notes:[[523,.10,0],[659,.10,.10],[783,.12,.20],[1046,.22,.32]],volume:.037,wave:'sine'},
  badge:  {notes:[[659,.09,0],[880,.11,.09],[1175,.19,.20]],volume:.029,wave:'sine'}
};
export function sound(name='click'){
  if(!getState().settings.sound)return;
  try{
    const AudioContextClass=window.AudioContext||window.webkitAudioContext;
    if(!AudioContextClass)return;
    context||=new AudioContextClass();
    if(context.state==='suspended')context.resume().catch(()=>{});
    const cue=cues[name]||cues.click;
    const t0=context.currentTime+.006;
    for(const [frequency,duration,offset] of cue.notes){
      const t=t0+offset;
      const osc=context.createOscillator(),gain=context.createGain();
      osc.type=cue.wave;
      osc.frequency.setValueAtTime(frequency,t);
      gain.gain.setValueAtTime(.0001,t);
      gain.gain.exponentialRampToValueAtTime(cue.volume,t+.014);
      gain.gain.exponentialRampToValueAtTime(.0001,t+duration+.025);
      osc.connect(gain).connect(context.destination);
      osc.start(t);osc.stop(t+duration+.035);
    }
  }catch{/* Audio unavailable, never block interaction. */}
}
