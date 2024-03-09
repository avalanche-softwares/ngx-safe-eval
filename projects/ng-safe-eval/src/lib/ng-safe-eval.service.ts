import { Injectable } from '@angular/core';
import { GlobalScopeToBeAvailable, EvaluationContext } from './ng-safe-eval.interface';

@Injectable({
  providedIn: 'root'
})
export class NgsafeEvalService {

  constructor() {
    this.removeScopeOfWindowFunction();
  }

  private window_fun_names: string[] = [];

  private global_function_scope_to_be_made_available: GlobalScopeToBeAvailable | {} = {};

  /**
   * The function removes certain window functions based on a predefined global function scope.
   */
  private removeScopeOfWindowFunction() {
    this.window_fun_names = Object.keys(window).filter((fn_name) => {
      try {
        if (fn_name in this.global_function_scope_to_be_made_available) return true;
        Function.apply(null, [fn_name, "return;"]);
        return true;
      } catch {
        return false;
      }
    });
  }

  /**
   * The function evaluates a TypeScript script within a specified context and with optional global
   * scope variables made available.
   * @param {string} script - The `script` parameter is a string that contains the JavaScript code you
   * want to evaluate.
   * @param {EvaluationContext} context - The `context` parameter in the `evaluate` function is an
   * object that contains the context in which the script will be evaluated. It may include variables,
   * functions, or any other relevant information needed for the evaluation of the script.
   * @param {GlobalScopeToBeAvailable | {}} global_scope_to_be_made_ava - The
   * `global_scope_to_be_made_ava` parameter in the `evaluate` function is an optional parameter that
   * allows you to pass a global scope object to be made available during the evaluation of the script.
   * This object can contain variables or functions that you want to be accessible within the script
   * being evaluated
   * @returns The `evaluate` function returns the result of evaluating the `script` string within the
   * provided `context` and any additional global scope variables passed in
   * `global_scope_to_be_made_ava`. The actual return value of the function will depend on the
   * execution of the script and the logic within it.
   */
  evaluate(script: string, context: EvaluationContext, global_scope_to_be_made_ava: GlobalScopeToBeAvailable | {} = {}) {
    if (Object.keys(global_scope_to_be_made_ava).length) {
      this.global_function_scope_to_be_made_available = global_scope_to_be_made_ava;
    }
    return this.safeEval(script, context);
  }

  /**
   * The function `safeEval` in TypeScript safely evaluates a script within a specified context.
   * @param {string} script - The `script` parameter is a string that represents the JavaScript code
   * that you want to evaluate or execute within a specific context.
   * @param {EvaluationContext} context - The `context` parameter in the `safeEval` function is an
   * object that contains key-value pairs representing the variables and their values that you want to
   * make available for evaluation in the `script`.
   * @returns The `safeEval` function is returning the result of evaluating the `script` string within
   * the provided `context`.
   */
  private safeEval(script: string, context: EvaluationContext) {
    const funName = Object.keys(context).concat(this.window_fun_names, [`"use strict"; return ${script}`])
    const fn = Function.apply(null, funName);
    const contextFunction = Object.values(context);
    return fn(...contextFunction);
  }

}

