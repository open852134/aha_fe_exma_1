import { useState } from 'react';
import { Calendar } from '@/components/Calendar';
import { InputField } from '@/components/InputField';
import { ReactComponent as CloseButton } from '@/assets/close.svg';

interface CalendarInputProps {
  label: string;
  value: Date | null;
  placeholder?: string;
  onChange: (date: Date) => void;
  onClear?: () => void;
}

const CalendarInput: React.FC<CalendarInputProps> = ({
  label,
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
      <InputField
        label={label}
        required
        readOnly
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
