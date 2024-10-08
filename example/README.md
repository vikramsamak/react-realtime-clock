# React Real-Time Clock Examples

A collection of examples demonstrating how to use the **[react-realtime-clock](https://www.npmjs.com/package/react-realtime-clock)** library to display real-time clocks with customizable formats and time zones.

## Live Demo

Explore the live demo on **[Vercel](https://react-realtime-clock-examples.vercel.app/)**.

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
