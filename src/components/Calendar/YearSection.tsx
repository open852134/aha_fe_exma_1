import React from 'react';
import classNames from 'classnames';
import { ReactComponent as ArrowLeft } from '@/assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '@/assets/arrow-right.svg';

interface YearSectionProps {
  renderDate: Date;
  onNextYearClick: () => void;
  onPreviousYearClick: () => void;
  onYearSelect: (year: number) => void;
}

const YearSection: React.FC<YearSectionProps> = ({
  renderDate,
  onNextYearClick,
  onPreviousYearClick,
  onYearSelect,
}) => (
  <section className="calendar-year-picker">
    <div className="flex justify-between items-center">
      <button type="button" className="p-3" onClick={onPreviousYearClick}>
        <ArrowLeft />
      </button>
      <p className="text-base leading-6 cursor-pointer" aria-hidden="true">
        {renderDate.getFullYear()}
      </p>
      <button type="button" className="p-3" onClick={onNextYearClick}>
        <ArrowRight />
      </button>
    </div>

    <div className="mt-[18px] px-[24px] grid grid-cols-4 grid-rows-5 gap-x-[9px] gap-y-[24px]">
      {new Array(20).fill('').map((_, index) => {
        const year = renderDate.getFullYear() + index;
        return (
          <div
            key={year.toString()}
            onClick={() => onYearSelect(year)}
            aria-hidden="true"
            className={classNames(
              'text-center text-base cursor-pointer hover:bg-white hover:text-[#181818]',
              year === renderDate.getFullYear() && 'bg-[#00A3FF] rounded-[2px]',
            )}
          >
            {year}
          </div>
        );
      })}
    </div>
  </section>
);

YearSection.propTypes = {};

export default YearSection;
