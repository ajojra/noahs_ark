import { AlphabeticalSortPipe } from './alphabetical-sort.pipe';

describe('AlphabeticalSortPipe', () => {
    it('create an instance', () => {
        const pipe = new AlphabeticalSortPipe();
        expect(pipe).toBeTruthy();
    });

    it('sort the list', () => {
        const pipe = new AlphabeticalSortPipe();
        const value = [
            [{ nat: 'TR', gender: 'male', seq: 1}],
            [{ nat: 'AR', gender: 'female', seq: 2}],
            [{ nat: 'CR', gender: 'male', seq: 3}],
            [{ nat: 'LR', gender: 'female', seq: 4}]
        ];
        const transformed = pipe.transform(value, 'nat') as typeof value;
        expect(transformed.length).toEqual(value.length);
        expect(transformed[0][0].seq).toEqual(2);
        expect(transformed[1][0].seq).toEqual(3);
        expect(transformed[2][0].seq).toEqual(4);
        expect(transformed[3][0].seq).toEqual(1);
    });
});