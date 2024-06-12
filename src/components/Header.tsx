import Image from 'next/image';
import Link from 'next/link';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { montserrat } from '@/utils/fonts';
import s from '@/sass/layouts/header.module.scss';
import { useState } from 'react';

const Header = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <header className={s.header}>
      <div className={` ${s.header__container}`}>
        <Link href="/" className={s.link__logo}>
          <Image
            className={s.logo}
            src="/logo.png"
            alt="monblanproject"
            width="138"
            height={138}
            priority={true}
          />
        </Link>
        <nav className={s.header__nav}>
          <div className={s.header__nav__box}>
            <h1 className={`${s.header__title} ${montserrat.className}`}>
              monblanproject
            </h1>
            <p className={s.header__start}>Start on 17-02-2016</p>
          </div>
          <ul className={s.header__list}>
            <li className={s.header__item}>
              <span className={s.header__chip}>870</span>
              <h2 className={s.header__text}>posts</h2>
            </li>
            <li className={`${s.header__item} ${s.header__item__margin}`}>
              <span className={s.header__chip}>11,787</span>
              <h2 className={s.header__text}>followers</h2>
            </li>
            <li className={s.header__item}>
              <span className={s.header__chip}>112</span>
              <h2 className={s.header__text}>following</h2>
            </li>
          </ul>
          <div className={s.header__box__date}>
            <h2 className={s.header__date}>Date</h2>
            <div className={s.header__box__date__input}>
              <div className={s.header__box__input}>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  placeholderText="from"
                  className={s.header__input}
                  dateFormat="dd_MM_yyyy"
                />
                <div className={s.header__box__icon}>
                  <IoCloseSharp
                    className={`${s.header__close__input} ${s.icon}`}
                    onClick={() => setStartDate(null)}
                  />
                  <span className={s.header__chip__icon}></span>
                  <FaRegCalendarAlt
                    className={`${s.header__calendar__input} ${s.icon}`}
                  />
                </div>
              </div>
              <div className={s.header__box__input}>
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                  placeholderText="to"
                  className={s.header__input}
                  dateFormat="dd_MM_yyyy"
                />
                <div className={s.header__box__icon}>
                  <IoCloseSharp
                    className={`${s.header__close__input} ${s.icon}`}
                    onClick={() => setEndDate(null)}
                  />
                  <span className={s.header__chip__icon}></span>
                  <FaRegCalendarAlt
                    className={`${s.header__calendar__input} ${s.icon}`}
                  />
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
