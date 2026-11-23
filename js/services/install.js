import {toast,openModal,closeOverlay} from '../components/layout.js';
import {icon} from '../core/icons.js';
let installEvent=null;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;window.dispatchEvent(new Event('medspore-install-ready'))});
window.addEventListener('appinstalled',()=>{installEvent=null;toast('MedSpore is installed. Open it from your Home Screen.','success')});
const installed=()=>window.matchMedia?.('(display-mode: standalone)')?.matches||window.navigator.standalone===true;
const isiOS=()=>/iphone|ipad|ipod/i.test(navigator.userAgent||'');
const isAndroid=()=>/android/i.test(navigator.userAgent||'');
export function installApp(){if(installed()){toast('MedSpore is already installed.');return}
const hint=installEvent?`<p>MedSpore is ready to install as an app on this device.</p><p class="muted tiny">Installation keeps a dedicated launcher icon; your account and learning data still follow the browser's permissions.</p>`:
 isiOS()?`<p>In Safari, tap <strong>Share</strong>, then choose <strong>Add to Home Screen</strong> and confirm <strong>Add</strong>.</p><p class="muted tiny">iPhone and iPad do not provide the same one-click browser install prompt as Android.</p>`:
 isAndroid()?`<p>Open Chrome's <strong>⋮ menu</strong>, then select <strong>Install app</strong> (or <strong>Add to Home screen</strong> where supported).</p><p class="muted tiny">If only a shortcut is offered, check that you opened the secure live website and not a localhost preview.</p>`:
 `<p>In Chrome or Edge, use the <strong>Install</strong> icon in the address bar or open the browser menu and select <strong>Install MedSpore</strong>.</p><p class="muted tiny">An install option is displayed only when the browser supports installation and its requirements are satisfied.</p>`;
openModal('Install MedSpore',`<div class="ms-install-dialog"><div class="ms-install-brand"><img src="/assets/icons/icon-192.png" alt="MedSpore app icon" width="70" height="70"><div><h3>MedSpore</h3><p>Learn · Practise · Grow</p></div></div>${hint}<p class="muted tiny">Use the HTTPS website at <strong>medspore.pages.dev</strong>. Installation is optional and not needed to practice.</p></div>`,`<button class="btn primary" data-global="install-confirm">${icon('download')} ${installEvent?'Install App':'Show browser steps'}</button><button class="btn secondary" data-global="close-overlay">Cancel</button>`)}
export async function confirmInstall(){if(installed()){closeOverlay();toast('Already installed.');return}
if(!installEvent){toast('Use your browser menu and the steps shown above.');return}
const prompt=installEvent;installEvent=null;closeOverlay();try{await prompt.prompt();const result=await prompt.userChoice;if(result.outcome==='accepted')toast('Installation accepted. Find MedSpore on your device.','success');else toast('Installation cancelled. You can try again later.')}catch(error){console.warn('App install prompt:',error);toast('The browser could not start installation. Try its Install app menu.','error')}}
