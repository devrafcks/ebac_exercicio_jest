import { render, screen, fireEvent } from '@testing-library/react';
import PostComment from '.';

describe('PostComment', () => {
    it('renderiza corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('adiciona dois comentários', () => {
        render(<PostComment />);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-button');

        fireEvent.change(textarea, { target: { value: 'teste comentario 1' } });
        fireEvent.click(button);

        fireEvent.change(textarea, { target: { value: 'teste comentario 2' } });
        fireEvent.click(button);

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});