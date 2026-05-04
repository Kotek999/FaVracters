import { Children } from "@/types/global";

export interface TitleProps {
  title: string;
}

export interface OptionProps extends TitleProps {
  renderElement: Children;
}

export type LanguageCode = "pl" | "en" | "de" | "es";

export interface Language {
  code: LanguageCode;
  label: string;
  flag: string;
}

export interface LanguagePickerProps {
  selected: LanguageCode;
  onSelect: (code: LanguageCode) => void;
}

export interface UsernameChangeItemProps extends TitleProps {
  placeholder: string;
  buttonTitle: string;
}

export interface LanguageContentProps {
  item: Language;
  isSelected: boolean;
}

export interface StartContentProps extends TitleProps {
  toggle: () => void;
  iconStyle: {
    transform: {
      rotate: string;
    }[];
  };
}

export interface EndContentProps {
  placeholder: string;
  buttonTitle: string;
}

export interface RenderIconProps {
  dirty: boolean;
  error: string | null;
}
