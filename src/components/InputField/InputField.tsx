import classNames from 'classnames';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  className,
  ...props
}): JSX.Element => (
  <div className="relative w-full box-border font-[Ubuntu]">
    <span className="absolute px-[4px] top-[-7.5px] left-[16px] text-[12px] text-white z-10 after:absolute after:bg-[#181818] after:content-[''] after:w-full after:h-1/2 after:z-[-1] after:top-[7.5px] after:left-[50%] after:translate-x-[-50%]">
      {label}
    </span>
    <input
      className={classNames(
        'transition h-[58px] px-[12px] w-full text-[16px] tracking-[0.25px] leading-[1.5] text-white bg-[#181818] border-[3px] border-[#FFFFFF80] placeholder-opacity-30 placeholder-white rounded-[8px] focus:border-[#00A3FF] focus:outline-none hover:border-white  hover:outline-none',
        className,
      )}
      {...props}
    />
  </div>
);

export default InputField;
