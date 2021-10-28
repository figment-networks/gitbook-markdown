import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleReactLightbox from 'simple-react-lightbox';
import {ThemeProvider} from 'styled-components';

import CustomMarkdown, {CustomMarkdownProps} from '../src';

import 'antd/dist/antd.css';

const theme = {
  colors: {
    yellowDark: '#FFF29B',
  }
};

const meta: Meta = {
  title: 'Gitbook Markdown Renderer',
  component: CustomMarkdown,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <SimpleReactLightbox>
        <ThemeProvider theme={theme}>
          <div style={{maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', padding: 20, backgroundColor: '#EEE'}}>
            <Story />
          </div>
        </ThemeProvider>
      </SimpleReactLightbox>
    )
  ]
};

export default meta;

const Template: Story<CustomMarkdownProps> = ({children, ...restArgs}) => <CustomMarkdown children={children} {...restArgs}/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: "# This is test",
};

export const Heading1 = Template.bind({});
Heading1.args = {
  children: "# This is test",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: "## This is test",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: "### This is test",
};

export const Link = Template.bind({});
Link.args = {
  children: 'Read more on the [official Ceramic docs](https://blog.ceramic.network/what-is-ceramic/)',
};

export const Video = Template.bind({});
Video.args = {
  children: `{% embed url="https://www.youtube.com/watch?v=P0sGpnVVVx8" caption="Learn The Graph with Figment's 101 Pathway" %}`,
};

const code = `
  \`\`\`typescript
  // solution
  const saveBasicProfile = async (values: BasicProfile) => {
    setSaving(true);
    setBasicProfile(null);
    
    const {name} = values;
  
    try {
      // Set BasicProfile (use IndexSchema.BasicProfile)
      await idx.set(IdxSchema.BasicProfile, {name});
  
      setName(name);
    } catch (error) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };
  \`\`\`
`;

export const CodeBlock = Template.bind({});
CodeBlock.args = {
  children: code,
};


const hint = `
{% hint style="info" %}
You can [**join us on Discord**](https://discord.gg/fszyM7K), if you have questions or want help completing the tutorial.
{% endhint %}
`;
export const Hint = Template.bind({});
Hint.args = {
  children: hint,
};


export const File = Template.bind({});
File.args = {
  children: `{% code title="/contracts/polygon/SimpleStorage/.secret" %}`,
};

export const Image = Template.bind({});
Image.args = {
  children: `![](../../../.gitbook/assets/pathways/ceramic/idx.png)`,
};
