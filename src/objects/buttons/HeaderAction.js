import { GameObjects } from 'phaser';
import RuleButton from './RuleButton';
import RankingButton from './RankingButton';
import MuteButton from './MuteButton';
import BalanceButton from './BalanceButton';

export default class HeaderAction extends GameObjects.Sprite {
	constructor(scene, x, y, machineDisplayWidth) {
		super(scene, x, y);
		this.scene = scene;
		this.x += 8;
		this.y -= this.height + 40;
		this.machineDisplayWidth = machineDisplayWidth;
		scene.add.existing(this);
		this._addElements();
	}

	_addElements() {
		const ruleButton = new RuleButton(this.scene, this.x, this.y);
		const rankingButton = new RankingButton(this.scene, this.x + ruleButton.displayWidth + 4, this.y);
		new MuteButton(this.scene, this.x + ruleButton.displayWidth + rankingButton.displayWidth + 8, this.y);
		new BalanceButton(this.scene, this.x + this.machineDisplayWidth - 28, this.y);
	}
}
