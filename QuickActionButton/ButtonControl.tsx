import * as React from 'react'
import { Stack } from '@fluentui/react/lib/Stack';

import { IBaseButton } from './interfaces/IBaseButton';
import { IActionButtonProps } from './interfaces/IActionButtonProps';
import {VerticalButton, HorizontalButton, IconOnlyButton, LabelButton} from './components'
import { IStackTokens } from 'office-ui-fabric-react/lib/components/Stack';
import { IButtonStyles } from '@fluentui/react';

export interface IButtonControlProps {
  buttons: IBaseButton[],
  buttonType: string,
  isFormDisabled: boolean,
  onButtonClicked: (key: string) => void
}

const ButtonControl = ({ buttons, buttonType, isFormDisabled, onButtonClicked }: IButtonControlProps) => {
  const tokens: IStackTokens = { childrenGap: 4 };

  return ( 
    <Stack horizontal horizontalAlign='center' tokens={tokens}>
        {
          buttons.map(button => {
            const styling: IButtonStyles = {
                root:{
                    background: button.bgColor,
                    color: button.color,
                    margin: 10,
                    border: 0,
                    borderRadius: 4
                },
                rootPressed:{
                    background: button.bgColor,
                    color: button.color
                },
                rootHovered:{
                    background: button.bgColor,
                    color: button.color,
                    opacity: 0.9
                },
                description:{
                    color: button.color
                },
                descriptionHovered:{
                    color: button.color
                }
            }

            const props = { 
              button: button, 
              styling: styling, 
              isFormDisabled: isFormDisabled, 
              onClicked: () => onButtonClicked(button.key) 
            } as IActionButtonProps

            switch(buttonType) {
              case "Vertical With Icon":
                return <VerticalButton {...props}/>;
              case "Horizontal With Icon":
                return <HorizontalButton {...props}/>;
              case "Icon Only":
                return <IconOnlyButton {...props}/>;
              default:
                return <LabelButton {...props} />;
            }
          })
        }
    </Stack> 
  );
}

export default ButtonControl;
