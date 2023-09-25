import React, { useState, useCallback } from 'react';
import { formatShortDate } from '@/helper';
import DateSection from './DateSection';
import YearSection from './YearSection';

enum monthActions {
  PREVIOUS = 'previous',
  NEXT = 'next',
}

interface CalendarProps {
  value: Date | null;
  defaultValue?: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue = new Date(),
  onConfirm,
  onCancel,
}) => {
  const [currentDate] = useState(value || defaultValue);
  const [selectedDate, setSelectedDate] = useState(value || defaultValue);
  const [renderDate, setRenderDate] = useState(value || defaultValue);
  const [isShowYearPicker, setIsShowYearPicker] = useState(false);

  const handleMonthChange = useCallback(
    (action: monthActions) => {
      const nextRenderDate = new Date(renderDate);
      nextRenderDate.setDate(1);
      const month = nextRenderDate.getMonth() + (action === monthActions.PREVIOUS ? -1 : 1);
      nextRenderDate.setMonth(month);

      setRenderDate(nextRenderDate);
    },
    [renderDate],
  );

  const handleYearChange = useCallback(
    (newYear: number, newIsShowYearPicker: boolean = true) => {
      const nextRenderDate = new Date(renderDate);
      nextRenderDate.setFullYear(newYear);
      setRenderDate(nextRenderDate);
      setIsShowYearPicker(newIsShowYearPicker);
    },
    [renderDate],
  );

  return (
    <div className="relative shadow-aha bg-[#1B1B1B] text-white max-w-[320px] overflow-hidden font-[Inter]">
      <p className="pt-[17px] pl-[24px] mb-1 text-[16px] leading-6">Text</p>
      <p className="pl-[24px] text-[32px] leading-[1.375]">
        {formatShortDate(renderDate)}
      </p>

      <main>
        {!isShowYearPicker ? (
          <DateSection
            renderDate={renderDate}
            currentDate={currentDate}
            selectedDate={selectedDate}
            onPreviousMonthClick={() => handleMonthChange(monthActions.PREVIOUS)}
            onNextMonthClick={() => handleMonthChange(monthActions.NEXT)}
            onYearPickerClick={() => {
              setIsShowYearPicker(!isShowYearPicker);
            }}
            onDateChange={(date) => {
              setSelectedDate(date);
            }}
          />
        ) : (
          <YearSection
            renderDate={renderDate}
            onNextYearClick={() => handleYearChange(renderDate.getFullYear() + 20)}
            onPreviousYearClick={() => handleYearChange(renderDate.getFullYear() - 20)}
            onYearSelect={(year) => handleYearChange(year, false)}
          />
        )}
      </main>

      <section className="mt-3 mb-4 pr-[27px] text-right">
        <button className="py-2 px-4" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="py-2 px-4"
          type="button"
          onClick={() => onConfirm(selectedDate)}
        >
          OK
        </button>
      </section>
    </div>
  );
};

Calendar.defaultProps = { defaultValue: new Date() };

export default Calendar;
