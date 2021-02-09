import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import type { Instance } from '../types'
import type { VirtualSheet } from '../sheets/index'

import { virtualSheet } from '../sheets/index'
import { create, strict } from '../index'
import { styled } from './index'

const test = suite<{
  sheet: VirtualSheet
  tw: Instance['tw']
}>('css')

test.before((context) => {
  context.sheet = virtualSheet()
  const instance = create({
    sheet: context.sheet,
    mode: strict,
    preflight: false,
    prefix: false,
  })
  context.tw = instance.tw
})

test.after.each(({ sheet }) => {
  sheet.reset()
})

test('styled known tag', () => {
  const Link = styled('a')`
    color: hotpink;
  `

  Link({})
})

test('styled unknown tag', () => {
  const XLink = styled('x-link')`
    color: hotpink;
  `

  XLink({})
})

test('styled function component', () => {
  const Base = (props: { className?: string; x?: string }) => props.x

  const Child = styled(Base)`
    color: hotpink;
  `

  Child({})
})

test('extending styled component', () => {
  const Box = styled.div`
    color: hotpink;
  `

  const Child = styled(Box)`
    color: ${(props: { kind: string }) => props.kind};
  `

  Child({ kind: 'fuchsia' })
})

test('extending function component', () => {
  const Base = (props: { className?: string; x?: string }) => props.x

  const Child = styled(Base).attrs((props: { a?: string }) => ({ x: props.a }))`
    color: hotpink;
  `

  const child = Child({ x: 'y' })
})

test.run()
