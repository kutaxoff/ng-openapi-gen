import { OpenAPIObject, SecuritySchemeObject } from 'openapi3-ts';
import { tsComments, tsType, methodName } from './gen-utils';
import { Options } from './options';

/**
 * An operation security
 */
export class Security {
  /**
   * variable name
   */
  var: string;

  /**
   * Header Name
   */
  name: string;

  /**
   * Property Description
   */
  tsComments: string;

  /**
   * Location of security parameter
   */
  in: string;
  type: string;

  constructor(key: string, public spec: SecuritySchemeObject, public scope: string[] = [], options: Options, openApi: OpenAPIObject) {
    this.name = spec.name || '';
    this.var = methodName(key);
    this.tsComments = tsComments(spec.description || '', 2, undefined, options.indent4 ? 4 : 2);
    this.in = spec.in || 'header';
    this.type = tsType(spec.schema, options, openApi);
  }
}
