import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/stories/*.stories.tsx"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../src/stories/static"],
}

export default config
