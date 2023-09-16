import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import MenuButton from '../components/MenuButton'
import { mockMenu } from '../mockValue/mockValue'
import { TonicProvider } from '@tonic-ui/react';

test('should loads and displays Menu correctly', async () => {
    render(
        <TonicProvider>
            <MenuButton data={mockMenu} />
        </TonicProvider>)


    await userEvent.click(screen.getByRole('button'))
    await screen.findByRole('menu')
    expect(screen.getAllByRole('menuitem')).toHaveLength(mockMenu.length)

    mockMenu.forEach(it => {
        expect(screen.getByRole('menu')).toHaveTextContent(it.text);
    })
})