/**
 * File types
 *
 * @export
 * @enum {number}
 */
export enum FILE_TYPES {
  /**
   * Angular module file (.module.ts)
   */
  NG_MODULE,

  /**
   * Routing file (.routing.ts)
   */
  NG_ROUTING,

  /**
   * Service (.service.ts)
   */
  NG_SERVICE,

  /**
   * Angular pipe (.pipe.ts)
   */
  NG_PIPE,

  /**
   * Component class (.component.ts)
   */
  NG_COMPONENT_CLASS,

  /**
   * Component template (.component.html)
   */
  NG_COMPONENT_VIEW,

  /**
   * Component stylesheet (.component.css)
   */
  NG_COMPONENT_STYLE,

  /**
   * Test file (.spec.ts)
   */
  NG_SPEC,

  /**
   * Generic stylesheet (.css, .scss, .sass, .less)
   */
  GEN_STYLE,

  /**
   * Generic interface (.interface.ts)
   */
  GEN_MODEL,

  /**
   * NPM Package.json file
   */
  GEN_PACKAGE_JSON,

  /**
   * Generic JSON (.json)
   */
  GEN_JSON,

  /**
   * Generic JavaScript source file
   */
  GEN_JS,

  /**
   * TypeScript source file (.ts)
   */
  GEN_TYPESCRIPT,

  /**
   * Markdown file (.md)
   */
  GEN_MARKDOWN,

  /**
   * Git Ignore file
   */
  GEN_GITIGNORE,

  /**
   * Generic file
   */
  GEN_UNKNOWN,
}

export const FILE_TYPE_ICONS = [
  'angular',
  'compass',
  'hexagon',
  'pipe',
  'cube-outline',
  'layers',
  'palette',
  'test-tube',
  'palette',
  'database',
  'nodejs',
  'json',
  'language-javascript',
  'language-typescript',
  'markdown',
  'git',
  'file'
];

export const FILE_TYPE_ASSOC = [
  /\.module.ts/,
  /\.routing.ts/,
  /\.service.ts/,
  /\.pipe.ts/,
  /\.component.ts/,
  /\.component.html/,
  /((^|component\.)(scss|css|less|sass))+$/,
  /\.spec.ts/,
  /(scss|css|less|sass)+$/,
  /\.interface.ts/,
  /package.json/,
  /\.json/,
  /\.js/,
  /\.ts/,
  /\.md/,
  /\.gitignore/,
  null
];

export const getFileIcon = (fileTypeId: number) => FILE_TYPE_ICONS[fileTypeId] || FILE_TYPE_ICONS[FILE_TYPES.GEN_UNKNOWN];

export const getFileTypeByName = (fileName: string) => {
  let result = FILE_TYPES.GEN_UNKNOWN;
  for (let i = 0; i < (FILE_TYPE_ASSOC.length - 1); i++) {
    if (fileName.match(FILE_TYPE_ASSOC[i])) {
      return i;
    }
  }

  return result;
};

export const getFileIconByName = (fileName: string) => FILE_TYPE_ICONS[getFileTypeByName(fileName)];

