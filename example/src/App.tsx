import { useState } from "react";
import {
  ClockType,
  FormatType,
  RealTimeClock,
  TimezoneType,
} from "react-realtime-clock";
import { timeZones } from "./constants/Timezones";
import { formats } from "./constants/Formats";
import { startCase } from "lodash";
import "react-clock/dist/Clock.css";
import {
  ANALOG_CLOCK_TYPE,
  DEFAULT_TIME_FORMAT,
  DIGITAL_CLOCK_TYPE,
  INDIAN_TIME_ZONE,
} from "./constants/Constants";

function App() {
  const [selectedTimeZone, setSelectedTimeZone] =
    useState<TimezoneType>(INDIAN_TIME_ZONE);
  const [selectedFormat, setSelectedFormat] =
    useState<FormatType>(DEFAULT_TIME_FORMAT);
  const [selectedClockType, setSelectedType] =
    useState<ClockType>(DIGITAL_CLOCK_TYPE);

  return (
    <main className="min-h-screen flex flex-col bg-black text-white p-4 gap-12">
      <h1 className="text-4xl font-bold py-5 w-full text-center">
        React Real Time Clock
      </h1>
      <section className="flex flex-col gap-4 flex-grow">
        <div className="flex flex-grow w-full justify-center items-center">
          <RealTimeClock
            clockTextClassName="font-extrabold text-4xl text-white"
            containerClassName="w-full"
            analogClockClassName="rounded-full"
            timeZone={selectedTimeZone}
            format={selectedFormat}
            clockType={selectedClockType}
            clockSize={200}
            renderAnalogClockNumbers={true}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-4 w-full justify-between">
          <div
            className={`${
              selectedClockType === DIGITAL_CLOCK_TYPE ? "md:w-1/3" : "W-1/2"
            } w-full `}
          >
            <label className="text-lg">Select Clock Type:</label>
            <select
              value={selectedClockType}
              onChange={(e) => setSelectedType(e.target.value as ClockType)}
              className="p-2 bg-gray-800 border border-gray-600 rounded-lg w-full"
            >
              {[DIGITAL_CLOCK_TYPE, ANALOG_CLOCK_TYPE].map(
                (type: string, i: number) => (
                  <option key={i} value={type}>
                    {startCase(type.toUpperCase())}
                  </option>
                )
              )}
            </select>
          </div>
          <div className={`${
              selectedClockType === DIGITAL_CLOCK_TYPE ? "md:w-1/3" : "W-1/2"
            } w-full `}>
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
              {timeZones.map((zone: string, i: number) => (
                <option key={i} value={zone}>
                  {zone}
                </option>
              ))}
            </datalist>
          </div>
          {selectedClockType === DIGITAL_CLOCK_TYPE && (
            <div className="w-full md:w-1/3">
              <label className="text-lg">Select Format:</label>
              <select
                value={selectedFormat}
                onChange={(e) =>
                  setSelectedFormat(e.target.value as FormatType)
                }
                className="p-2 bg-gray-800 border border-gray-600 rounded-lg w-full"
              >
                {formats.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
