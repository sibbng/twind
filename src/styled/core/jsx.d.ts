import * as CSS from 'csstype'

export type Booleanish = boolean | 'true' | 'false';

export interface DOMAttributes {
  // Clipboard Events
  onCopy?: (event: ClipboardEvent) => void
  onCopyCapture?: (event: ClipboardEvent) => void
  onCut?: (event: ClipboardEvent) => void
  onCutCapture?: (event: ClipboardEvent) => void
  onPaste?: (event: ClipboardEvent) => void
  onPasteCapture?: (event: ClipboardEvent) => void

  // Composition Events
  onCompositionEnd?: (event: CompositionEvent) => void
  onCompositionEndCapture?: (event: CompositionEvent) => void
  onCompositionStart?: (event: CompositionEvent) => void
  onCompositionStartCapture?: (event: CompositionEvent) => void
  onCompositionUpdate?: (event: CompositionEvent) => void
  onCompositionUpdateCapture?: (event: CompositionEvent) => void

  // Focus Events
  onFocus?: (event: FocusEvent) => void
  onFocusCapture?: (event: FocusEvent) => void
  onFocusin?: (event: FocusEvent) => void
  onFocusinCapture?: (event: FocusEvent) => void
  onFocusout?: (event: FocusEvent) => void
  onFocusoutCapture?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
  onBlurCapture?: (event: FocusEvent) => void

  // Form Events
  onChange?: (event: Event) => void
  onChangeCapture?: (event: Event) => void
  onInput?: (event: Event) => void
  onInputCapture?: (event: Event) => void
  onReset?: (event: Event) => void
  onResetCapture?: (event: Event) => void
  onSubmit?: (event: Event) => void
  onSubmitCapture?: (event: Event) => void
  onInvalid?: (event: Event) => void
  onInvalidCapture?: (event: Event) => void

  // Image Events
  onLoad?: (event: Event) => void
  onLoadCapture?: (event: Event) => void
  onError?: (event: Event) => void // also a Media Event
  onErrorCapture?: (event: Event) => void // also a Media Event

  // Keyboard Events
  onKeyDown?: (event: KeyboardEvent) => void
  onKeyDownCapture?: (event: KeyboardEvent) => void
  onKeyPress?: (event: KeyboardEvent) => void
  onKeyPressCapture?: (event: KeyboardEvent) => void
  onKeyUp?: (event: KeyboardEvent) => void
  onKeyUpCapture?: (event: KeyboardEvent) => void

  // MouseEvents
  onAuxClick?: (event: MouseEvent) => void
  onClick?: (event: MouseEvent) => void
  onClickCapture?: (event: MouseEvent) => void
  onContextMenu?: (event: MouseEvent) => void
  onContextMenuCapture?: (event: MouseEvent) => void
  onDblClick?: (event: MouseEvent) => void
  onDblClickCapture?: (event: MouseEvent) => void
  onDrag?: (event: DragEvent) => void
  onDragCapture?: (event: DragEvent) => void
  onDragEnd?: (event: DragEvent) => void
  onDragEndCapture?: (event: DragEvent) => void
  onDragEnter?: (event: DragEvent) => void
  onDragEnterCapture?: (event: DragEvent) => void
  onDragExit?: (event: DragEvent) => void
  onDragExitCapture?: (event: DragEvent) => void
  onDragLeave?: (event: DragEvent) => void
  onDragLeaveCapture?: (event: DragEvent) => void
  onDragOver?: (event: DragEvent) => void
  onDragOverCapture?: (event: DragEvent) => void
  onDragStart?: (event: DragEvent) => void
  onDragStartCapture?: (event: DragEvent) => void
  onDrop?: (event: DragEvent) => void
  onDropCapture?: (event: DragEvent) => void
  onMouseDown?: (event: MouseEvent) => void
  onMouseDownCapture?: (event: MouseEvent) => void
  onMouseEnter?: (event: MouseEvent) => void
  onMouseLeave?: (event: MouseEvent) => void
  onMouseMove?: (event: MouseEvent) => void
  onMouseMoveCapture?: (event: MouseEvent) => void
  onMouseOut?: (event: MouseEvent) => void
  onMouseOutCapture?: (event: MouseEvent) => void
  onMouseOver?: (event: MouseEvent) => void
  onMouseOverCapture?: (event: MouseEvent) => void
  onMouseUp?: (event: MouseEvent) => void
  onMouseUpCapture?: (event: MouseEvent) => void

  // Touch Events
  onTouchCancel?: (event: TouchEvent) => void
  onTouchCancelCapture?: (event: TouchEvent) => void
  onTouchEnd?: (event: TouchEvent) => void
  onTouchEndCapture?: (event: TouchEvent) => void
  onTouchMove?: (event: TouchEvent) => void
  onTouchMoveCapture?: (event: TouchEvent) => void
  onTouchStart?: (event: TouchEvent) => void
  onTouchStartCapture?: (event: TouchEvent) => void

  // Pointer Events
  onPointerDown?: (event: PointerEvent) => void
  onPointerDownCapture?: (event: PointerEvent) => void
  onPointerMove?: (event: PointerEvent) => void
  onPointerMoveCapture?: (event: PointerEvent) => void
  onPointerUp?: (event: PointerEvent) => void
  onPointerUpCapture?: (event: PointerEvent) => void
  onPointerCancel?: (event: PointerEvent) => void
  onPointerCancelCapture?: (event: PointerEvent) => void
  onPointerEnter?: (event: PointerEvent) => void
  onPointerEnterCapture?: (event: PointerEvent) => void
  onPointerLeave?: (event: PointerEvent) => void
  onPointerLeaveCapture?: (event: PointerEvent) => void
  onPointerOver?: (event: PointerEvent) => void
  onPointerOverCapture?: (event: PointerEvent) => void
  onPointerOut?: (event: PointerEvent) => void
  onPointerOutCapture?: (event: PointerEvent) => void
  onGotPointerCapture?: (event: PointerEvent) => void
  onGotPointerCaptureCapture?: (event: PointerEvent) => void
  onLostPointerCapture?: (event: PointerEvent) => void
  onLostPointerCaptureCapture?: (event: PointerEvent) => void

  // UI Events
  onScroll?: (event: UIEvent) => void
  onScrollCapture?: (event: UIEvent) => void

  // Wheel Events
  onWheel?: (event: WheelEvent) => void
  onWheelCapture?: (event: WheelEvent) => void

  // Animation Events
  onAnimationStart?: (event: AnimationEvent) => void
  onAnimationStartCapture?: (event: AnimationEvent) => void
  onAnimationEnd?: (event: AnimationEvent) => void
  onAnimationEndCapture?: (event: AnimationEvent) => void
  onAnimationIteration?: (event: AnimationEvent) => void
  onAnimationIterationCapture?: (event: AnimationEvent) => void

  // Transition Events
  onTransitionEnd?: (event: TransitionEvent) => void
  onTransitionEndCapture?: (event: TransitionEvent) => void
}

export interface HTMLAttributes extends DOMAttributes {
  // Standard HTML Attributes
  accessKey?: string
  className?: string
  contentEditable?: Booleanish | 'inherit'
  contextMenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: boolean
  id?: string
  lang?: string
  placeholder?: string
  slot?: string
  spellCheck?: Booleanish
  style?: CSS.Properties
  tabIndex?: number
  title?: string
  translate?: 'yes' | 'no'

  // Unknown
  radioGroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string

  // Non-standard Attributes
  autoCapitalize?: string
  autoCorrect?: string
  autoSave?: string
  color?: string
  itemProp?: string
  itemScope?: boolean
  itemType?: string
  itemID?: string
  itemRef?: string
  results?: number
  security?: string
  unselectable?: 'on' | 'off'

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'

  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string
}
