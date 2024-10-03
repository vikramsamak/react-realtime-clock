# react-realtime-clock

![npm](https://img.shields.io/npm/v/react-realtime-clock)
![npm](https://img.shields.io/npm/dw/react-realtime-clock)

**react-realtime-clock** is a simple and customizable React component that displays a real-time clock. With support for multiple time zones and various date formats, it makes it easy to integrate a clock into your React applications.

## Table of Contents

- [Installation](#installation)
- [Tailwind CSS Support](#tailwind-css-support)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [Customization](#customization)
- [License](#license)

## Installation

You can install the library using npm or yarn:

```bash
  npm install react-realtime-clock
```

## Tailwind CSS Support

This library is styled using **Tailwind CSS**. To use the styles as intended, please ensure that Tailwind CSS is installed and configured in your project.

## Usage

Here’s how to use the `RealTimeClock` component in your application:

```tsx
import React from 'react';
import RealTimeClock from 'react-realtime-watch';

const App = () => {
  return (
    <div className="app">
      <RealTimeClock
        timeZone="Asia/Kolkata"
        format="hh:mm:ss A"
        clockTextClassName="text-3xl font-bold text-white"
        containerClassName="bg-blue-600 p-4 rounded"
      />
    </div>
  );
};

export default App;
```

## Props

| Prop                   | Type                | Default        | Description                                                                                   |
|------------------------|---------------------|----------------|-----------------------------------------------------------------------------------------------|
| `containerClassName`   | `string`            | `undefined`    | Additional class names for the container element.                                            |
| `clockTextClassName`   | `string`            | `undefined`    | Additional class names for the clock text element.                                          |
| `timeZone`             | `TimezoneType`      | `"UTC"`        | Time zone for the clock (e.g., `"America/New_York"`).                                      |
| `format`               | `FormatType`        | `"HH:mm:ss"`   | Format for displaying the time (e.g., `"hh:mm:ss A"`).                                     |

## Examples

This section provides various examples of how to use the `RealTimeClock` component in your React application.

### Example 1: Basic Clock

A simple example of a clock displaying the current time in UTC:

```tsx
import React from 'react';
import RealTimeClock from 'react-realtime-watch';

const App = () => {
  return (
    <div className="app">
      <RealTimeClock timeZone="UTC" format="HH:mm:ss" />
    </div>
  );
};

export default App;
```

### Example 2: Clock with Custom Styles

Customize the appearance of the clock with additional class names:

```tsx
import React from 'react';
import RealTimeClock from 'react-realtime-watch';

const App = () => {
  return (
    <div className="app">
      <RealTimeClock
        timeZone="Europe/Berlin"
        format="MMMM Do YYYY, hh:mm A"
        clockTextClassName="text-2xl font-semibold text-gray-900"
        containerClassName="p-4 bg-gray-200 rounded-lg"
      />
    </div>
  );
};

export default App;
```

### Example 3: Real-Time Clock with Different Time Zones

Display the clock with different time zones dynamically:

```tsx
import React, { useState } from 'react';
import RealTimeClock from 'react-realtime-watch';

const App = () => {
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");
  const [format, setFormat] = useState("hh:mm:ss A");

  return (
    <div className="app">
      <RealTimeClock
        timeZone={timeZone}
        format={format}
        clockTextClassName="text-3xl font-bold text-white"
        containerClassName="bg-blue-600 p-4 rounded"
      />
      <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
        <option value="UTC">UTC</option>
        <option value="Asia/Kolkata">Asia/Kolkata</option>
        <option value="America/New_York">America/New_York</option>
        <option value="Europe/Berlin">Europe/Berlin</option>
        <option value="America/Los_Angeles">America/Los_Angeles</option>
      </select>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="HH:mm:ss">HH:mm:ss</option>
        <option value="hh:mm:ss A">hh:mm:ss A</option>
        <option value="MMMM Do YYYY, h:mm:ss a">MMMM Do YYYY, h:mm:ss a</option>
        <option value="MM/DD/YYYY, h:mm A">MM/DD/YYYY, h:mm A</option>
      </select>
    </div>
  );
};

export default App;
```

### Example 4: Full Customization

Combine all props for a fully customized clock experience:

```tsx
import React from 'react';
import RealTimeClock from 'react-realtime-watch';

const App = () => {
  return (
    <div className="app">
      <RealTimeClock
        timeZone="Australia/Sydney"
        format="dddd, MMMM Do YYYY, hh:mm A"
        clockTextClassName="text-4xl font-extrabold text-yellow-500"
        containerClassName="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500"
      />
    </div>
  );
};

export default App;
```

## Customization

The `RealTimeClock` component offers various customization options, allowing you to tailor its appearance and functionality to fit your application’s design and requirements.

### 1. Styling the Clock

You can customize the appearance of the clock by using the following props:

- **`containerClassName`**: This prop allows you to add custom styles to the container of the clock. You can use any Tailwind CSS or custom class names here.

  ```tsx
  <RealTimeClock
    containerClassName="bg-gray-800 p-4 rounded-lg shadow-lg"
  />
  ```

### 2. Time Zone Selection

The clock supports various time zones, which you can set using the timeZone prop. This prop accepts any valid IANA time zone string.

Example of setting the time zone to America/New_York:

```tsx
<RealTimeClock timeZone="America/New_York" />
```

### 3. Time Format

The format prop allows you to specify how the time should be displayed. You can use the following format strings:

- "HH:mm:ss": 24-hour format
- "hh:mm:ss A": 12-hour format with AM/PM
- "MMMM Do YYYY, h:mm:ss a": Full month name and year
- "MM/DD/YYYY, h:mm A": US date format
- "YYYY-MM-DD HH:mm:ss": ISO date format
- "HH:mm": Simple hour and minute
- "hh:mm A": Simple hour and minute with AM/PM
- "dddd, MMMM Do YYYY": Full weekday name, month, and year

Example of setting the format to a 12-hour clock:

```tsx
<RealTimeClock format="hh:mm:ss A" />
```

### 4. Combining Customizations

You can combine the above customization options for a fully personalized clock display:

```tsx
import React from 'react';
import RealTimeClock from 'react-realtime-watch';

const App = () => {
  return (
    <div className="app">
      <RealTimeClock
        timeZone="Asia/Kolkata"
        format="hh:mm:ss A"
        clockTextClassName="text-3xl font-bold text-green-500"
        containerClassName="bg-gray-900 p-4 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default App;
```

### 5. Responsive Design

The component is designed to be responsive. You can use Tailwind CSS utility classes to make it adapt to various screen sizes. For example, using responsive font sizes:

```tsx
<RealTimeClock
  clockTextClassName="text-xl md:text-3xl lg:text-4xl"
/>
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

### Summary of the MIT License

The MIT License is a permissive free software license that allows users to:

- Use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
- Allow others to do the same with their copies of the Software.

### Conditions

The only conditions are:

- The above copyright notice and this permission notice must be included in all copies or substantial portions of the Software.
- The Software is provided "as is", without warranty of any kind. The authors are not liable for any damages or issues arising from its use.

### For More Information

For the full text of the MIT License, please see the [LICENSE](LICENSE) file in this repository.
