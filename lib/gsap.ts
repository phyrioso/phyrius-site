// Registo central do GSAP. Importar daqui, nunca de 'gsap' diretamente nas secções.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';

let registado = false;

if (typeof window !== 'undefined' && !registado) {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
  if (!CustomEase.get('brand')) CustomEase.create('brand', '0.16,1,0.3,1');
  gsap.defaults({ ease: 'brand', duration: 0.8 });
  registado = true;
}

export { gsap, ScrollTrigger, SplitText };
