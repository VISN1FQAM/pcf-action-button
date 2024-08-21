import { IButtonStyles } from "@fluentui/react";
import { IBaseButton } from "./IBaseButton";

export interface IActionButtonProps {
    button: IBaseButton,
    styling: IButtonStyles
    onClicked: () => void,
    isFormDisabled: boolean
}