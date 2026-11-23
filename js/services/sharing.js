// A portrait 9:16 story card created locally in the user's browser.
// Social platforms control link stickers and link-preview rendering.
import {toast} from '../components/layout.js';
const base='https://medspore.pages.dev';
function roundRect(c,x,y,w,h,r){c.beginPath();c.roundRect(x,y,w,h,r)}
function wrap(c,str,maxWidth,maxLines=5){const words=String(str||'').split(/\s+/),rows=[];let line='';for(const word of words){const newLine=(line?line+' ':'')+word;if(c.measureText(newLine).width>maxWidth&&line){rows.push(line);line=word;if(rows.length>=maxLines)break}else line=newLine}if(rows.length<maxLines&&line)rows.push(line);if(rows.length===maxLines&&words.length>3){let last=rows[maxLines-1];while(c.measureText(last+'…').width>maxWidth&&last.length>3)last=last.slice(0,-1);rows[maxLines-1]=last.replace(/[.,;: ]+$/,'')+'…'}return rows}
async function createStory({title,topic,excerpt,options=[],url,type='MCQ'}){
 const cvs=document.createElement('canvas');cvs.width=1080;cvs.height=1920;const c=cvs.getContext('2d');
 const bg=c.createLinearGradient(0,0,1080,1920);bg.addColorStop(0,'#111E42');bg.addColorStop(.58,'#15375D');bg.addColorStop(1,'#163F58');c.fillStyle=bg;c.fillRect(0,0,1080,1920);
 for(let i=0;i<7;i++){c.beginPath();c.arc(1050-i*186,(i*233)%1800,80+i*22,0,Math.PI*2);c.fillStyle=`rgba(123,219,208,${.035+i*.005})`;c.fill()}
 c.strokeStyle='rgba(122,215,199,.35)';c.lineWidth=5;c.beginPath();c.moveTo(0,370);c.lineTo(185,370);c.lineTo(247,315);c.lineTo(296,423);c.lineTo(354,354);c.lineTo(520,354);c.stroke();
 // Use the exact installed MedSpore logo on every portrait story card.
 try {
   const logo=new Image();logo.src='/assets/icons/icon-192.png';await logo.decode();
   c.drawImage(logo,74,95,132,132);
 }catch{
 roundRect(c,74,95,132,132,32);c.fillStyle='#5571E5';c.fill();c.strokeStyle='#E4FBFF';c.lineWidth=13;c.lineCap='round';c.beginPath();c.moveTo(98,165);c.lineTo(127,165);c.lineTo(149,126);c.lineTo(177,196);c.lineTo(196,164);c.stroke();
 }
 c.fillStyle='#FFFFFF';c.textAlign='left';c.font='bold 86px system-ui,Arial';c.fillText('MedSpore',237,172);c.font='600 31px system-ui,Arial';c.fillStyle='#AADDD6';c.fillText('LEARN   ·   PRACTISE   ·   GROW',236,212);
 roundRect(c,70,490,940,1080,48);c.fillStyle='rgba(255,255,255,.97)';c.fill();
 c.fillStyle='#136D73';c.font='bold 29px system-ui,Arial';c.fillText(type==='MCQ'?'CLINICAL MCQ CHALLENGE':'MEDICAL READING',116,570);
 c.fillStyle='#526780';c.font='600 30px system-ui,Arial';for(const [i,line] of wrap(c,topic,860,2).entries())c.fillText(line,116,632+i*39);
 c.fillStyle='#152744';c.font='bold 49px system-ui,Arial';const lines=wrap(c,title,842,7);lines.forEach((line,i)=>c.fillText(line,116,735+i*67));
 let y=770+lines.length*67;
 if(type==='MCQ'){c.font='500 34px system-ui,Arial';c.fillStyle='#334A66';for(let i=0;i<2;i++){if(!options[i])continue;roundRect(c,112,y,857,98,20);c.fillStyle='#ECF5F8';c.fill();c.fillStyle='#324863';c.fillText(`${'AB'[i]}.  ${wrap(c,options[i],775,1)[0]||''}`,143,y+59);y+=121}c.font='bold 45px system-ui,Arial';c.fillStyle='#526780';c.fillText('…',120,y+35)}else{c.font='500 35px system-ui,Arial';c.fillStyle='#526780';wrap(c,excerpt,835,4).forEach((line,i)=>c.fillText(line,116,y+55+i*56));y+=235}
 c.textAlign='center';roundRect(c,115,1430,850,94,25);c.fillStyle='#DDF6ED';c.fill();c.fillStyle='#15595C';c.font='700 36px system-ui,Arial';c.fillText('Explore the full '+(type==='MCQ'?'question':'article'),540,1492);
 c.fillStyle='#FFFFFF';c.font='600 36px system-ui,Arial';c.fillText('Open the link to learn more',540,1660);c.fillStyle='#B9D8DF';c.font='500 31px system-ui,Arial';c.fillText('medspore.pages.dev',540,1730);
 return new Promise((resolve,reject)=>cvs.toBlob(blob=>blob?resolve(blob):reject(Error('story image failed')),'image/png'));
}
async function shareStory(args){try{const blob=await createStory(args),file=new File([blob],`MedSpore-${args.type==='MCQ'?'MCQ':'Article'}-Story.png`,{type:'image/png'}),message=`${args.title}\nView on MedSpore: ${args.url}`;if(navigator.canShare?.({files:[file]})&&navigator.share){try{await navigator.share({files:[file],title:'MedSpore',text:message});return}catch(e){if(e.name==='AbortError')return}}const a=document.createElement('a'),local=URL.createObjectURL(blob);a.href=local;a.download=file.name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(local),1000);try{await navigator.clipboard.writeText(args.url)}catch{}toast('Story image saved. Add a Link Sticker using the copied URL.','success')}catch(e){console.warn(e);toast('Unable to create story image on this device.','error')}}
export const shareMCQStory=q=>shareStory({title:q.prompt.length>210?q.prompt.slice(0,207).replace(/\s+\S*$/,'')+'…':q.prompt+'…',topic:`${q.subject} · ${q.topic}`,options:q.options,url:`${base}/share/mcq/${encodeURIComponent(q.id)}/`,type:'MCQ'});
export const shareArticleStory=a=>shareStory({title:a.title,topic:a.category,excerpt:a.preview,url:`${base}/articles/${encodeURIComponent(a.slug)}/`,type:'Article'});
