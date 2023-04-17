import { classNames } from './classNames';

describe('classNames', () => {
    test('test with one param', () => {
        expect(classNames('1')).toBe('1');
    });

    test('cls', () => {
        expect(classNames('1', {}, ['1'])).toBe('1 1');
    });

    test('cls', () => {
        expect(classNames('1', { hovered: 'true' }, ['1'])).toBe('1 1 hovered');
    });
});
