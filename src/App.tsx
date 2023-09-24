import { useState } from 'react';
import { Label, PasswordInput, Calendar } from '@/components';

const App = () => {
  const [password, setPassword] = useState('');

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-[1219px] h-[907px] bg-[#181818] shadow p-[150px]">
        <h2 className="text-white text-2xl mb-10">Password Input</h2>
        <div className="enabled-case flex items-center mb-[20px]">
          <div className="w-48">
            <Label>Enabled</Label>
          </div>
          <PasswordInput />
        </div>

        <div className="hover-case flex items-center mb-[113px]">
          <div className="w-48">
            <Label>Hover</Label>
          </div>
          <PasswordInput />
        </div>

        <div className="active-case flex items-center">
          <div className="w-48">
            <Label>Active(Typing)</Label>
          </div>
          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default App;
