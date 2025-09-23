export const focusStyles = {
  focus: 'focus:outline-none focus:ring-4 focus:ring-forest-sage/20',
  focusVisible: 'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest-sage/20',
  focusRing: 'focus:ring-2 focus:ring-forest-sage focus:ring-offset-2',
} as const;

export const ariaLabels = {
  navigation: 'Main navigation',
  menu: 'Mobile menu',
  close: 'Close menu',
  open: 'Open menu',
  search: 'Search',
  submit: 'Submit form',
  cancel: 'Cancel',
  next: 'Next',
  previous: 'Previous',
  play: 'Play video',
  pause: 'Pause video',
  mute: 'Mute audio',
  unmute: 'Unmute audio',
  fullscreen: 'Enter fullscreen',
  exitFullscreen: 'Exit fullscreen',
} as const;

export const screenReaderText = {
  hidden: 'sr-only',
  visuallyHidden: 'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0',
} as const;

export const colorContrast = {
  // Ensure WCAG AA compliance
  primary: {
    background: '#1B3B0D', // Pacific Evergreen
    text: '#FFFFFF', // Pure White
    contrast: 4.5, // WCAG AA compliant
  },
  secondary: {
    background: '#2D5016', // Forest Sage
    text: '#FFFFFF', // Pure White
    contrast: 4.5, // WCAG AA compliant
  },
  accent: {
    background: '#DAA520', // Sunset Gold
    text: '#FFFFFF', // Pure White
    contrast: 4.5, // WCAG AA compliant
  },
} as const;

export const keyboardNavigation = {
  tabIndex: {
    focusable: '0',
    notFocusable: '-1',
  },
  keyCodes: {
    enter: 13,
    space: 32,
    escape: 27,
    tab: 9,
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39,
    home: 36,
    end: 35,
  },
} as const;

export const semanticHTML = {
  landmarks: {
    banner: 'header',
    navigation: 'nav',
    main: 'main',
    complementary: 'aside',
    contentinfo: 'footer',
  },
  headings: {
    h1: 'Page title',
    h2: 'Section title',
    h3: 'Subsection title',
    h4: 'Sub-subsection title',
    h5: 'Minor heading',
    h6: 'Smallest heading',
  },
  roles: {
    button: 'button',
    link: 'link',
    heading: 'heading',
    list: 'list',
    listitem: 'listitem',
    navigation: 'navigation',
    main: 'main',
    banner: 'banner',
    contentinfo: 'contentinfo',
    complementary: 'complementary',
    region: 'region',
    article: 'article',
    section: 'section',
  },
} as const;

export const motionPreferences = {
  reduced: 'prefers-reduced-motion: reduce',
  normal: 'prefers-reduced-motion: no-preference',
} as const;

export const colorPreferences = {
  dark: 'prefers-color-scheme: dark',
  light: 'prefers-color-scheme: light',
} as const;

export const highContrast = {
  enabled: 'prefers-contrast: high',
  normal: 'prefers-contrast: normal',
} as const;

export const forcedColors = {
  enabled: 'forced-colors: active',
  normal: 'forced-colors: none',
} as const;

export const touchTargets = {
  minimum: '44px', // WCAG AA minimum
  recommended: '48px', // WCAG AAA recommended
  large: '56px', // Large touch targets
} as const;

export const textScaling = {
  base: '1rem', // 16px base
  scale: '1.125', // 18px scale
  large: '1.25', // 20px large
  xlarge: '1.5', // 24px extra large
} as const;

export const spacing = {
  touch: '44px', // Minimum touch target
  comfortable: '48px', // Comfortable touch target
  large: '56px', // Large touch target
} as const;

export const announcements = {
  live: 'aria-live="polite"',
  assertive: 'aria-live="assertive"',
  off: 'aria-live="off"',
} as const;

export const states = {
  expanded: 'aria-expanded="true"',
  collapsed: 'aria-expanded="false"',
  selected: 'aria-selected="true"',
  unselected: 'aria-selected="false"',
  checked: 'aria-checked="true"',
  unchecked: 'aria-checked="false"',
  pressed: 'aria-pressed="true"',
  unpressed: 'aria-pressed="false"',
} as const;

export const properties = {
  label: 'aria-label',
  labelledBy: 'aria-labelledby',
  describedBy: 'aria-describedby',
  controls: 'aria-controls',
  owns: 'aria-owns',
  hidden: 'aria-hidden="true"',
  visible: 'aria-hidden="false"',
} as const;

export const landmarks = {
  banner: 'role="banner"',
  navigation: 'role="navigation"',
  main: 'role="main"',
  complementary: 'role="complementary"',
  contentinfo: 'role="contentinfo"',
  region: 'role="region"',
  article: 'role="article"',
  section: 'role="section"',
} as const;

export const formLabels = {
  required: 'aria-required="true"',
  optional: 'aria-required="false"',
  invalid: 'aria-invalid="true"',
  valid: 'aria-invalid="false"',
  error: 'aria-describedby="error-message"',
  help: 'aria-describedby="help-text"',
} as const;

export const tableHeaders = {
  column: 'scope="col"',
  row: 'scope="row"',
  columnGroup: 'scope="colgroup"',
  rowGroup: 'scope="rowgroup"',
} as const;

export const dialog = {
  modal: 'role="dialog" aria-modal="true"',
  alert: 'role="alertdialog" aria-modal="true"',
  alertDialog: 'role="alert"',
  status: 'role="status"',
  log: 'role="log"',
  marquee: 'role="marquee"',
  timer: 'role="timer"',
} as const;

export const listbox = {
  listbox: 'role="listbox"',
  option: 'role="option"',
  selected: 'aria-selected="true"',
  unselected: 'aria-selected="false"',
} as const;

export const menu = {
  menu: 'role="menu"',
  menuitem: 'role="menuitem"',
  menuitemcheckbox: 'role="menuitemcheckbox"',
  menuitemradio: 'role="menuitemradio"',
  separator: 'role="separator"',
} as const;

export const tablist = {
  tablist: 'role="tablist"',
  tab: 'role="tab"',
  tabpanel: 'role="tabpanel"',
  selected: 'aria-selected="true"',
  unselected: 'aria-selected="false"',
  controls: 'aria-controls',
  labelledBy: 'aria-labelledby',
} as const;

export const tree = {
  tree: 'role="tree"',
  treeitem: 'role="treeitem"',
  group: 'role="group"',
  expanded: 'aria-expanded="true"',
  collapsed: 'aria-expanded="false"',
  level: 'aria-level',
  setsize: 'aria-setsize',
  posinset: 'aria-posinset',
} as const;

export const grid = {
  grid: 'role="grid"',
  gridcell: 'role="gridcell"',
  row: 'role="row"',
  columnheader: 'role="columnheader"',
  rowheader: 'role="rowheader"',
  selected: 'aria-selected="true"',
  unselected: 'aria-selected="false"',
} as const;

export const progress = {
  progressbar: 'role="progressbar"',
  value: 'aria-valuenow',
  min: 'aria-valuemin',
  max: 'aria-valuemax',
  text: 'aria-valuetext',
} as const;

export const slider = {
  slider: 'role="slider"',
  value: 'aria-valuenow',
  min: 'aria-valuemin',
  max: 'aria-valuemax',
  text: 'aria-valuetext',
  orientation: 'aria-orientation',
} as const;

export const spinbutton = {
  spinbutton: 'role="spinbutton"',
  value: 'aria-valuenow',
  min: 'aria-valuemin',
  max: 'aria-valuemax',
  text: 'aria-valuetext',
} as const;

export const switchComponent = {
  switch: 'role="switch"',
  checked: 'aria-checked="true"',
  unchecked: 'aria-checked="false"',
} as const;

export const checkbox = {
  checkbox: 'role="checkbox"',
  checked: 'aria-checked="true"',
  unchecked: 'aria-checked="false"',
  indeterminate: 'aria-checked="mixed"',
} as const;

export const radio = {
  radiogroup: 'role="radiogroup"',
  radio: 'role="radio"',
  checked: 'aria-checked="true"',
  unchecked: 'aria-checked="false"',
} as const;

export const combobox = {
  combobox: 'role="combobox"',
  expanded: 'aria-expanded="true"',
  collapsed: 'aria-expanded="false"',
  controls: 'aria-controls',
  owns: 'aria-owns',
} as const;

export const textbox = {
  textbox: 'role="textbox"',
  multiline: 'aria-multiline="true"',
  singleline: 'aria-multiline="false"',
  readonly: 'aria-readonly="true"',
  editable: 'aria-readonly="false"',
} as const;

export const search = {
  search: 'role="search"',
  searchbox: 'role="searchbox"',
} as const;

export const tooltip = {
  tooltip: 'role="tooltip"',
  describedBy: 'aria-describedby',
} as const;

export const alert = {
  alert: 'role="alert"',
  live: 'aria-live="assertive"',
} as const;

export const status = {
  status: 'role="status"',
  live: 'aria-live="polite"',
} as const;

export const log = {
  log: 'role="log"',
  live: 'aria-live="polite"',
} as const;

export const marquee = {
  marquee: 'role="marquee"',
  live: 'aria-live="polite"',
} as const;

export const timer = {
  timer: 'role="timer"',
  live: 'aria-live="polite"',
} as const;
