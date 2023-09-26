import { useState } from 'react';
import { InputField } from '@/components/InputField';
import { ReactComponent as CheckmarkActive } from '@/assets/checkmark-active.svg';
import { ReactComponent as Checkmark } from '@/assets/checkmark.svg';

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder = 'Password',
  onChange = () => {},
  value,
  ...props
}): JSX.Element => {
  const [password, setPassword] = useState('');
  const [passwordRule, setPasswordRule] = useState([
    {
      valid: true,
      label: 'Have at least one uppercase letter',
      regex: /(?=.*[A-Z])/,
    },
    {
      valid: false,
      label: 'Have at least one lowercase letter',
      regex: /(?=.*[a-z])/,
    },
    {
      valid: false,
      label: 'Have at least one number',
      regex: /(?=.*[0-9])/,
    },
    {
      valid: false,
      label: 'Have at least one special character (!@#$...etc)',
      regex: /(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?])/,
    },
    {
      valid: false,
      label: 'Longer than 8 characters',
      regex: /^.{9,}$/,
    },
  ]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: passwordValue } = e.target;
    onChange(e);
    setPassword(passwordValue);

    const validationResult = passwordRule.map((rule) => ({
      ...rule,
      valid: rule.regex.test(passwordValue),
    }));

    setPasswordRule(validationResult);
  };

  return (
    <div className="relative w-[335px] box-border font-[Ubuntu]">
      <InputField
        label="Password"
        type="password"
        required
        value={value}
        placeholder={placeholder}
        onChange={handlePasswordChange}
        {...props}
      />

      {password && (
        <div className="w-full bg-[#242424] mt-[20px] absolute py-[8px] px-[12px] z-20 rounded-[8px]">
          {passwordRule.map(({ label, valid }) => (
            <div className="flex items-center mb-[5px]">
              <span className="mr-[10px] w-[20px] h-[20px]]\">
                {valid ? <CheckmarkActive /> : <Checkmark />}
              </span>
              <p className="text-white py-[8px] pr-[16px] text-sm tracking-[0.25px] leading-[1.5]">
                {label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
