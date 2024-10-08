# React Real-Time Clock Example

## Usage Example

```tsx
import {RealTimeClock} from 'react-realtime-watch';

const ExampleApp = () => (
  <RealTimeClock
    timeZone="Asia/Kolkata"
    format="hh:mm:ss A"
    clockTextClassName="text-3xl font-bold text-white"
    containerClassName="bg-blue-600 p-4 rounded"
  />
);

export default ExampleApp;
