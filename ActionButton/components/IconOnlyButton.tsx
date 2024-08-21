import * as React from 'react';
import { IActionButtonProps } from '../IActionButtonProps';
import { CompoundButton } from 'office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton';

const IconOnlyButton = ({ button, styling, onClicked, isFormDisabled } : IActionButtonProps) => {
    styling.flexContainer = {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50
    }

    styling.icon = {
        margin: 0
    }

    return ( 
        <CompoundButton 
            styles={styling} 
            disabled={button.isDisabled ?? isFormDisabled}
            onClick={onClicked}
            allowDisabledFocus
            iconProps={
                button.iconName ? { iconName: button.iconName } : undefined           
        }/>
     );
}
 
export default IconOnlyButton;