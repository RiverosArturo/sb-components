import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    //Crea el componente dentro de las carpetas
    title: 'UI/labels/MyLabel',
    //Nombre del componente
    component: MyLabel,
    //crea Docs automaticamente
    tags: ['autodocs'],
    //centramos nuestro componente
    parameters: {
        layout: 'centered',
    },
    //decidimos como queremos que se muestren los tipos
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        //Valor por default de nuestro label
        label: 'Basic label',
        //Valor del size por default
        size: 'h1'
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All caps label',
        allCaps: true,
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom color label',
        fontColor: '#5517ac'
    }
};