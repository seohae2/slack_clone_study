export type Resolver = (parent: any, args: any, context: any, info: any) => any;

/**
 * d.ts : definition Typescript (형태를 작성하였다는 의미)
 */
export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver;
  };
}