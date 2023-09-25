import { useState } from 'react';
import {
  Label, PasswordInput, Calendar, CalendarInput,
} from '@/components';

const App = () => {
  const [password, setPassword] = useState('');
  const [dateInput, setDateInput] = useState<Date | null>(new Date());

  return (
    <main>
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

      <section className="w-screen h-screen flex justify-center items-center">
        <div className="w-[1219px] h-[907px] bg-[#181818] shadow p-[150px]">
          <h2 className="text-white text-2xl mb-10">Calendar</h2>

          <Calendar
            onConfirm={(date) => console.log(date)}
            value={new Date()}
            onCancel={() => console.log('cancel')}
          />
        </div>
      </section>

      <section className="w-screen h-screen flex justify-center items-center">
        <div className="w-[1219px] h-[907px] bg-[#181818] shadow p-[150px]">
          <h2 className="text-white text-2xl mb-10">Calendar Input</h2>
          <CalendarInput
            onChange={(date) => setDateInput(date)}
            value={dateInput}
            onClear={() => setDateInput(null)}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
