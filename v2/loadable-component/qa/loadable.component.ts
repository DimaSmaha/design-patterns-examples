/** <T> means its a generic type and we must be used any strong type in TS. It must be syntatically correct */

export interface isLoadable<T> {
  isLoaded(): T;
}
