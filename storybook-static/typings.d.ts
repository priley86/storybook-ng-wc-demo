/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* Skates JS / Shady CSS module stubs */
declare module 'skatejs';

interface Window {
  ShadyCSS: ShadyCSS.ShadyCssStatic,
}

declare module '*.css';

declare namespace ShadyCSS {
  interface IntrinsicElements {
    'custom-style': HTMLElement,
  }

  interface ShadyCssStatic {
    prepareTemplate( template: HTMLTemplateElement, elementName: string, typeExtension?: string ),
    applyStyle( host: HTMLElement, overrideProps?: { [ propName: string ]: string } ),
    updateStyles( properties?: { [ propName: string ]: string } ),
  }
}