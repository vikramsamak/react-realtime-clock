import type { Preview } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import React from "react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
