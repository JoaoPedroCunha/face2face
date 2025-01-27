import type { StoryObj, Meta } from '@storybook/html';

import { logo } from './index';
import type {LogoProps} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Logo',
  tags: ['autodocs'],
  render: (args) => {
    return logo(args);
  },
  argTypes: {
    link: {description: 'endereço para o link do logo'},
    imgSrc: {description: 'endereço para a imgaem do logo'},
    descricao: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<LogoProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    link: 'github.com', 
    imgSrc: 'https://avatars.githubusercontent.com/u/132667649?v=4', 
    descricao: 'Octocat from Github '
  }
};

