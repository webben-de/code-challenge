import { Location } from '../../../../../libs/common/center-matrix/src';
import { CenterListFilterPipe } from './centerListFilter.pipe';

describe('centerListFilterPipe', () => {
  let instance: CenterListFilterPipe;
  const locations: Location[] = [{ id: 1337 } as Location];
  beforeEach(() => {
    instance = new CenterListFilterPipe();
  });

  it('should return an empty array if no locations are passed', () => {
    expect(instance.transform(null, '').length).toBe(0);
  });
});
