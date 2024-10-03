import { useState } from "react";
import { TimezoneType } from "./types/TimezoneType";
import { FormatType } from "./types/FormatType";
import { timeZones } from "./constants/Timezones";
import { formats } from "./constants/Formats";
import RealTimeClock from "./RealtimeClock";

function App() {
  const [selectedTimeZone, setSelectedTimeZone] =
    useState<TimezoneType>("Asia/Kolkata");
  const [selectedFormat, setSelectedFormat] =
    useState<FormatType>("hh:mm:ss A");

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Real Time Clock</h1>

      <section className="max-w-screen-md flex flex-col gap-4">
        <RealTimeClock
          clockTextClassName="font-extrabold  text-4xl text-white"
          containerClassName="bg-tranparent w-full"
          timeZone={selectedTimeZone}
          format={selectedFormat}
        />
        <div className="flex flex-col  gap-4 w-full px-2">
          <div className="w-full">
            <label className="text-lg">Select Time Zone:</label>
            <input
              list="timezones"
              value={selectedTimeZone}
              onChange={(e) =>
                setSelectedTimeZone(e.target.value as TimezoneType)
              }
              className="p-2 bg-gray-800 border border-gray-600 rounded-lg w-full"
              placeholder="Select Timezone"
            />
            <datalist id="timezones">
              {timeZones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </datalist>
          </div>
          <div className="w-full">
            <label className="text-lg">Select Format:</label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value as FormatType)}
              className="p-2 bg-gray-800 border border-gray-600 rounded-lg w-full"
            >
              {formats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
