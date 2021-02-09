import { createElement } from 'react'
import { bind } from './core/index'

export * from '../css/index'

export const { styled, twind } = bind(createElement)
