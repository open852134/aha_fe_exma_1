import React from 'react';
import classNames from 'classnames';
import { ReactComponent as ArrowLeft } from '@/assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '@/assets/arrow-right.svg';
import { isSameDay, isSameMonth, formatDateToMonthYear } from '@/helper';

interface DateSectionProps {
  renderDate: Date;
  currentDate: Date;
  selectedDate: Date;
  onNextMonthClick: () => void;
  onPreviousMonthClick: () => void;
  onYearPickerClick: () => void;
  onDateChange: (date: Date) => void;
}

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const weeks = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'];

const DateSection: React.FC<DateSectionProps> = ({
  renderDate,
  currentDate,
  selectedDate,
  onYearPickerClick,
  onNextMonthClick,
  onPreviousMonthClick,
  onDateChange,
}) => {
  const getDayByIndexes = (weekIndex: number, dayIndex: number) => {
    const firstDayOfWeek = new Date(
      renderDate.getFullYear(),
      renderDate.getMonth(),
      1,
    ).getDay();

    const daysFromPreviousMonth = firstDayOfWeek - dayIndex;
    const dateOffset = weekIndex * 7 - daysFromPreviousMonth;

    return new Date(
      renderDate.getFullYear(),
      renderDate.getMonth(),
      1 + dateOffset,
    );
  };

  return (
    <section className="calendar-date-picker">
      <div className="mb-[15px]">
        <div className="flex justify-between items-center">
          <button type="button" className="p-3" onClick={onPreviousMonthClick}>
            <ArrowLeft />
          </button>
          <p
            className="text-base leading-6 cursor-pointer"
            onClick={onYearPickerClick}
            aria-hidden="true"
          >
            {formatDateToMonthYear(renderDate)}
          </p>
          <button type="button" className="p-3" onClick={onNextMonthClick}>
            <ArrowRight />
          </button>
        </div>

        <div className="px-[16px] grid grid-cols-7 gap-x-[6px] mb-3">
          {days.map((day) => (
            <span key={day} className="text-[11px] text-center text-[#929292]">
              {day}
            </span>
          ))}
        </div>

        {weeks.map((week, weekIndex) => (
          <div key={week} className="px-[16px] grid grid-cols-7 gap-x-[6px]">
            {days.map((day, dayIndex) => {
              const date = getDayByIndexes(weekIndex, dayIndex);
              return (
                <span
                  key={`${week}-${day}`}
                  className={classNames(
                    'cursor-pointer text-sm text-center text-[#929292] h-[36px] leading-[36px] rounded-full hover:bg-white hover:text-[#080808]',
                    isSameMonth(date, renderDate) && 'text-white',
                    isSameDay(date, currentDate)
                      && 'border-[#00A3FF] border-[1px] hover:border-none',
                    isSameDay(date, selectedDate) && 'bg-[#00A3FF]',
                  )}
                  onClick={() => {
                    onDateChange(date);
                  }}
                  aria-hidden="true"
                >
                  {date.getDate()}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DateSection;
