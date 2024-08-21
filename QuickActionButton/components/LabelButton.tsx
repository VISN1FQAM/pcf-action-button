import * as React from 'react';
import { CompoundButton } from 'office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton';
import { IActionButtonProps } from '../interfaces/IActionButtonProps';

const LabelButton = ({ button, styling, onClicked, isFormDisabled } : IActionButtonProps) => {
    styling.flexContainer = {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 30
    }

    styling.textContainer = {
        textAlign: 'center'
    }
    
    return ( 
        <CompoundButton 
            styles={styling} 
            disabled={button.isDisabled ?? isFormDisabled}
            onClick={onClicked}
            allowDisabledFocus>
            {button.label}
        </CompoundButton>
    );
}
 
export default LabelButton;