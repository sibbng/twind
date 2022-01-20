import type { Sheet } from './types'
import { asArray } from './utils'

function createStyleElement(
  // 1. look for existing style element — usually from SSR
  // 2. append to document.head — this assumes that document.head has at least one child node
  referenceNode = document.querySelector('style[data-twind]') || (document.head.lastChild as Node),
): HTMLStyleElement {
  // insert new style element after existing element which allows to override styles
  return (referenceNode.parentNode as Node).insertBefore(
    document.createElement('style'),
    referenceNode.nextSibling,
  )
}

export function cssom(target = createStyleElement().sheet as CSSStyleSheet): Sheet<CSSStyleSheet> {
  return {
    target,

    clear() {
      // remove all added rules
      for (let index = target.cssRules.length; index--; ) {
        target.deleteRule(index)
      }
    },

    destroy() {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(target.ownerNode as Element).remove()
    },

    insert(css, index) {
      try {
        // Insert
        target.insertRule(css, index)
      } catch (error) {
        // Empty rule to keep index valid — not using `*{}` as that would show up in all rules (DX)
        target.insertRule(':root{}', index)

        // Some thrown errors are because of specific pseudo classes
        // lets filter them to prevent unnecessary warnings
        // ::-moz-focus-inner
        // :-moz-focusring
        if (!/:-[mwo]/.test(css)) {
          console.warn(error, css)
        }
      }
    },
  }
}

export function virtual(target: string[] = []): Sheet<string[]> {
  return {
    target,

    clear() {
      target.length = 0
    },

    destroy() {
      this.clear()
    },

    insert(css, index) {
      target.splice(index, 0, css)
    },
  }
}

export function stringify(target: unknown): string {
  // string[] | CSSStyleSheet

  return (
    (target as CSSStyleSheet).cssRules
      ? Array.from((target as CSSStyleSheet).cssRules, (rule) => rule.cssText)
      : asArray(target)
  ).join('')
}