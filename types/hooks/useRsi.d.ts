import type { RsiProps } from "../types";
import type { Translations } from "../translationsRSIProps";
export declare const useRsi: <T extends string>() => RsiProps<T> & Required<Pick<RsiProps<T>, keyof RsiProps<any>>> & {
    translations: Translations;
};
