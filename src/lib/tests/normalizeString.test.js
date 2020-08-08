import normalize from '../normalizeString'
import expect from 'expect'

test('normalizes accents and lowercase', async () => {
    expect(normalize('éùàEcrg$ço21')).toBe('euaecrg$co21')
})