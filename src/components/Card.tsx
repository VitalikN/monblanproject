import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { MdModeComment } from 'react-icons/md';
import data from '../../data.json';
import s from '@/sass/layouts/card.module.scss';

interface CardProps {
  view: 'grid' | 'list';
}

const Card: React.FC<CardProps> = ({ view }) => {
  return (
    <ul className={view === 'grid' ? s.grid : s.list}>
      {data &&
        data.map(
          ({
            id,
            title,
            img,
            data,
            like,
            like__data,
            comment,
            comment__data,
          }) => (
            <li key={id} className={view === 'grid' ? s.item : s.item__list}>
              <Image
                className={
                  view === 'grid' ? s.card__img__grid : s.card__img__list
                }
                src={img.src}
                alt={'card__img'}
                width={203}
                height={203}
                priority={true}
                fetchPriority="high"
              />
              <div className={view === 'grid' ? '' : s.container__list}>
                <div
                  className={
                    view === 'grid' ? s.item__box__grid : s.item__box__list
                  }
                >
                  <div className={view === 'grid' ? s.item__grid : s.box__list}>
                    <h3 className={s.title}>{title}</h3>
                    <div
                      className={
                        view === 'grid'
                          ? s.box__grid__item__icon
                          : s.box__list__item__icon
                      }
                    >
                      <p className={s.text}>
                        <FaHeart className={s.icon} />
                        <span className={s.chip}>{like}</span>
                      </p>
                      <p className={s.text}>
                        <MdModeComment className={s.icon} />
                        <span className={s.chip}>{comment}</span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      view === 'grid' ? s.item__grid : s.box__list__item__heart
                    }
                  >
                    <h3 className={s.title}> {data}</h3>
                    <div
                      className={
                        view === 'grid'
                          ? s.box__grid__item__icon
                          : s.box__list__item__icon
                      }
                    >
                      <p className={s.text}>
                        <FaHeart className={s.icon} />
                        <span className={s.chip}>{like__data}</span>
                      </p>
                      <p className={s.text}>
                        <MdModeComment className={s.icon} />
                        <span className={s.chip}>{comment__data}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    view === 'grid'
                      ? s.item__box__button__grid
                      : s.item__box__button__list
                  }
                >
                  <button
                    type="button"
                    className={`${s.button} ${
                      view === 'grid' ? '' : s.button__list
                    }
                  }`}
                  >
                    Image upload
                  </button>
                  <p className={s.text__data}>{data}</p>
                </div>
              </div>
            </li>
          )
        )}
    </ul>
  );
};
export default Card;
