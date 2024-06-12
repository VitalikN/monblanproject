import s from '@/sass/layouts/hero.module.scss';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { ImList } from 'react-icons/im';
import Card from './Card';
import { useState } from 'react';

const Hero = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <section className={s.hero}>
      <div
        className={`${s.container} 
      
    ${view === 'grid' ? s.hero__container : s.hero__container__list}
      
      
      `}
      >
        <div className={s.hero__box__icon}>
          <TfiLayoutGrid3Alt
            onClick={() => setView('grid')}
            className={`${s.hero__icon} ${
              view === 'grid' ? s.hero__icon__active : ''
            } `}
          />
          <ImList
            className={`${s.hero__icon} ${
              view === 'list' ? s.hero__icon__active : ''
            } `}
            onClick={() => setView('list')}
          />
        </div>

        <Card view={view} />
        <button type="button" className={s.hero__button}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
};
export default Hero;
