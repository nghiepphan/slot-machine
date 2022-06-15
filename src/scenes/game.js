import { Scene } from 'phaser';
import { config } from '../config';
import Machine from '../objects/machine';
import Button from '../objects/button';
import PayTable from '../objects/payTable';
import DebugBar from '../objects/debugBar';
import Popup from './../objects/popup';

export default class GameScene extends Scene {
	constructor() {
		super({ key: 'Game' });
	}

	init(data) {
		this.data.set('prizes', data.prizes);
		this.balance = config.payTable.startBalance;

		this._addBackground();
		this._addSlotMachine();
		// this._addBalanceBlock();
		this._addSpinButton();
		// this._addPayTable();
		// this._addDebugBar();
		this._addPopup();
	}

	_addBackground() {
		// add main background
		const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
		const scaleX = this.cameras.main.width / image.width;
		const scaleY = this.cameras.main.height / image.height;
		const scale = Math.max(scaleX, scaleY);
		image.setScale(scale).setScrollFactor(0);
		// add coin on main background: asa coin, tiki ball, ...
		const bgAsaCoin = this.add.image(4, 150, 'bg-asa-coin');
		bgAsaCoin.setY(150 + bgAsaCoin.height / 2);
		const bgAsaCoinBlur = this.add.image(config.size.width, 30, 'bg-asa-coin-blur');
		bgAsaCoinBlur.setY(30 + bgAsaCoinBlur.height / 2);
	}

	_addSlotMachine() {
		this.machine = new Machine(
			this,
			config.size.centerX,
			// config.size.centerY - 100,
			config.size.centerY,
			config.game,
			config.payTable.payment
		);
	}

	_addSpinButton() {
		this.spinButton = new Button(
			this,
			config.size.centerX + config.game.spinButtonOffset.x,
			config.size.centerY + config.game.spinButtonOffset.y
		);
		this.spinButton.on('pointerup', () => this._runMachine());
	}

	_runMachine() {
		if (!this.machine.locked) {
			// this.machine.setResultSlots(this.debugBar.debugSlots) //TODO: to-remove
			this.machine.startSpin();
			this.spinButton.disable();

			let machineConfig = config.game.machine,
				stopDelay = machineConfig.stopDelay,
				reelStopDelay = machineConfig.reelStopDelay,
				reelsCount = machineConfig.reelsCount,
				delay = stopDelay + reelStopDelay * reelsCount;

			this._updateBalance(-1);
			setTimeout(() => this._checkResults(), delay + 1000);
		}
	}

	_checkResults() {
		if (this.machine.winSum) this._updateBalance(this.machine.winSum);
	}

	_addBalanceBlock() {
		// this.add
		// 	.sprite(
		// 		config.size.centerX + config.game.spinButtonOffset.x,
		// 		config.size.centerY + config.game.spinButtonOffset.y - 5,
		// 		config.game.atlasName,
		// 		config.game.sprites.balanceBg
		// 	)
		// 	.setOrigin(1, 0.5);

		this.balanceText = this.add
			.bitmapText(
				config.size.centerX + config.game.balanceTextOffsetX,
				config.size.centerY + config.game.balanceTextOffsetY,
				'freedom',
				`$ ${this.balance}`,
				56
			)
			.setOrigin(0, 0.5);

		this.add
			.bitmapText(
				config.size.centerX + config.game.balanceCommentOffsetX,
				config.size.centerY + config.game.balanceCommentOffsetY,
				'freedom',
				'Each spin costs 1 coin',
				18
			)
			.setOrigin(0, 0.5);
	}

	_updateBalance(sum = 0) {
		if (sum > 0) {
			console.log(sum);
		}
		this.balance += sum ? sum : this.balance;
		if (this.balanceText) {
			this.balanceText.setText(`$ ${this.balance}`);
		}
	}

	_addPayTable() {
		new PayTable(this, config.payTable);
	}

	_addDebugBar() {
		this.debugBar = new DebugBar(this, config);
	}

	_addPopup() {
		const popup = new Popup(this, this.x, this.y);
		this.popup = popup;
	}

	update() {
		if (!this.machine.locked) {
			if (this.spinButton) {
				this.spinButton.enable();
			}
		}
	}
}
