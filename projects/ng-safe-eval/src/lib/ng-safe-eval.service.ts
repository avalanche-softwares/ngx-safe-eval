import { Injectable, OnInit } from '@angular/core';
import { GlobalScopeToBeAvaliavble, EvaluationContext } from './ng-safe-eval.interface';

@Injectable({
  providedIn: 'root'
})
export class NgSafeEvalService implements OnInit {

  ngOnInit(): void {
    this.removeScropeOfWindowFunction();
  }

  private window_fun_names: string[] = [];

  private global_function_scope_to_be_made_avaliable: GlobalScopeToBeAvaliavble | {} = {};

  private eval_context: EvaluationContext | {} = {}

  private removeScropeOfWindowFunction() {
    this.window_fun_names = Object.keys(window).filter((fn_name) => {
      try {
        if (fn_name in this.global_function_scope_to_be_made_avaliable) return true;
        Function.apply(null, [fn_name, "return;"]);
        return true;
      } catch {
        return false;
      }
    });
  }

  evaluate(script: string, context: EvaluationContext, global_scope_to_be_made_ava: GlobalScopeToBeAvaliavble | {} = {}) {
    if (Object.keys(global_scope_to_be_made_ava).length) {
      this.global_function_scope_to_be_made_avaliable = global_scope_to_be_made_ava;
    }
    this.eval_context = context;
    return this.SafeEval(script);
  }

  private SafeEval(script: string) {
    try {
      const fun_name = Object.keys(this.eval_context).concat(this.window_fun_names, [`"use strict"; return ${script}`])
      const fn = Function.apply(null, fun_name);
      const context_function = Object.values(this.eval_context);
      return fn(...context_function);
    } catch (error) {
      return error;
    }
  }
}

