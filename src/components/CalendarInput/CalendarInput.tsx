import { useState } from 'react';
import { Calendar } from '@/components/Calendar';
import { ReactComponent as CloseButton } from '@/assets/close.svg';

interface CalendarInputProps {
  value: Date | null;
  placeholder?: string;
  onChange: (date: Date) => void;
  onClear?: () => void;
}

const CalendarInput: React.FC<CalendarInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'mm/dd/yyyy',
}): JSX.Element => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const closeCalendar = () => {
    setIsOpenCalendar(false);
  };

  const handleCalendarChange = (date: Date) => {
    onChange(date);
    closeCalendar();
  };

  return (
    <div className="relative w-[335px] box-border hover:opacity-100 group cursor-pointer">
      <span className="absolute px-[4px] top-[-7.5px] left-[16px] text-[12px] text-white z-10 after:absolute after:bg-[#181818] after:content-[''] after:w-full after:h-1/2 after:z-[-1] after:top-[7.5px] after:left-[50%] after:translate-x-[-50%]">
        Password
      </span>
      <input
        type="text"
        readOnly
        className="transition h-[58px] px-[12px] w-full text-[16px] text-white bg-[#181818] border-[3px] border-[#FFFFFF80] placeholder-opacity-30 placeholder-white rounded-[8px] focus:border-[#00A3FF] focus:outline-none hover:border-white  hover:outline-none"
        required
        placeholder={placeholder}
        onFocus={() => setIsOpenCalendar(true)}
        value={
          value
            ? value.toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            : ''
        }
      />

      {isOpenCalendar && (
        <div className="absolute w-[320px] left-0 top-[72px]">
          <Calendar
            value={value}
            onConfirm={handleCalendarChange}
            onCancel={closeCalendar}
          />
        </div>
      )}

      <button
        onClick={onClear}
        type="button"
        className="opacity-0 group-hover:opacity-100 absolute right-3 top-[50%] translate-y-[-50%]"
      >
        <CloseButton />
      </button>
    </div>
  );
};

export default CalendarInput;
