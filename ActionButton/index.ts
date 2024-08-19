import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import ButtonControl, { IButtonControlProps } from "./ButtonControl";
import { IButtonStyles } from "@fluentui/react";


export class ActionButtonControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private container: HTMLDivElement;
	private notifyOutputChanged: () => void;
	private actionText: string;

    constructor() {
		initializeIcons();
	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		this.container = container;
		this.notifyOutputChanged = notifyOutputChanged;

		this.actionText = context.parameters.ActionButtonLabel.raw ?? "";

		if (this.actionText.trim().startsWith("{")) {
			let json = JSON.parse(this.actionText);
			try {
				this.actionText = json[context.userSettings.languageId];
				if (this.actionText === undefined) {
					this.actionText = json[parseInt(Object.keys(json)[0])];
				}
			}
			catch {
				this.actionText = json[parseInt(Object.keys(json)[0])];
			}
		}

		this.renderControl(context);
	}

	private renderControl(context: ComponentFramework.Context<IInputs>): void {
		const params = context.parameters;
		const isFormDisabled = params.EnableButtonOnDisabledForm.raw === "1" ? false : context.mode.isControlDisabled;

		let props: IButtonControlProps = {
			text: this.actionText,
			iconName: params.IconName.raw ?? "",
			toolTip: params.ToolTipDescription.raw ?? "",
			styles: {
				root: {
				  backgroundColor: "transparent",
				  color: params.BackgroundColor.raw ?? "#38807b",
				  border: "2",
				  borderColor: params.BackgroundColor.raw ?? "#38807b",
				  width: params.Width.raw ?? "auto",
				  height: params.Height.raw ?? "auto",
				  borderRadius: params.BorderRadius.raw ?? 0,
				},
				rootHovered: {
				  backgroundColor: params.BackgroundColor.raw ?? "#38807b",
				  color: "#FFFFFF",
				},
				rootPressed: {
				  backgroundColor: params.BackgroundColor.raw ?? "#38807b",
				  color: "#FFFFFF",
				}
			},
			disabled: isFormDisabled,
			onButtonClicked: () => this.notifyOutputChanged()
		}

		ReactDOM.render(React.createElement(ButtonControl, props), this.container);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this.renderControl(context);
	}

	public getOutputs(): IOutputs {
		return { 
			LinkedAttribute: "ABCD" 
		};
	}

	public destroy(): void {
	}
}