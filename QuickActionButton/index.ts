import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import ButtonControl, { IButtonControlProps } from "./ButtonControl";
import { IBaseButton } from "./interfaces/IBaseButton";

export class QuickActionButton implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private container: HTMLDivElement;
	private buttonClicked: string;
	private notifyOutputChanged: () => void;

    constructor() {
		initializeIcons();
	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		this.container = container;
		this.notifyOutputChanged = notifyOutputChanged;
		this.renderControl(context);
	}

	private renderControl(context: ComponentFramework.Context<IInputs>): void {
		const params = context.parameters;

		let props: IButtonControlProps = {
			buttons: JSON.parse(params.Buttons.raw ?? "") as IBaseButton[],
			buttonType: params.ButtonType.raw ?? "",
			isFormDisabled: context.mode.isControlDisabled,
			onButtonClicked: (key) => {
				this.buttonClicked = key;
				this.notifyOutputChanged()
			}
		}

		ReactDOM.render(React.createElement(ButtonControl, props), this.container);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this.renderControl(context);
	}

	public getOutputs(): IOutputs {
		return { LinkedAttribute: this.buttonClicked };
	}

	public destroy(): void {
	}
}