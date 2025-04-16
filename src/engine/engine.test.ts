import { expect, test } from 'vitest'
import {compare} from './engine'

test('tests spock vs scissors', () => {
    expect(compare('spock', 'scissors').winner).toBe('player1')
})

test('tests spock vs paper', () => {
    expect(compare('spock', 'paper').winner).toBe('player2')
})

test('tests spock vs spock', () => {
    expect(compare('spock', 'spock').winner).toBe('draw')
})