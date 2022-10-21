import type { AnyAction } from "redux";

export type ActionWithPayload<T, P> = { type: T; payload: P };

export type Action<T> = { type: T };

export type SomeAction<T, P> = Action<T> | ActionWithPayload<T, P>;

export function actionCreator<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function actionCreator<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function actionCreator<T extends string, P>(type: T, payload: P) {
  return {
    type,
    payload
  };
}
/*
Funkcja dodająca do funkcji zwracającej actionCreator funkcję sprawdzającą(match(action)) czy 
action otrzymany przez reducer się zgadza
*/
type Matchable<AC extends () => AnyAction & { type: string }> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatch<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatch<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatch<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
) {
  return Object.assign(actionCreator, {
    match(action: AnyAction) {
      return action.type === actionCreator().type;
    }
  });
}
