import type P5 from "p5";
import { controls } from "./stores";

/** Sets up the sketch */
const setup = async (p5: typeof P5.prototype): Promise<void> => {
	const { width, height } = controls;

	p5.createCanvas(width, height);
	// Ensure rects/squares are drawn from their center point
	p5.rectMode(p5.CENTER);
};

/** Draws the sketch to the canvas */
const draw = (p5: typeof P5.prototype): void => {
	const { currentFrame, circleRadius, circleSpeed, circleMovement } = controls;

	p5.background("#F40009");
	p5.noStroke();

	const centerX = p5.width * 0.5;
	const centerY = p5.height * 0.5;

	for (let i = 0; i < 1000; i += 1) {
		const randomSpeed = p5.random(circleSpeed - 0.001, circleSpeed + 0.001);
		const x = circleMovement * p5.sin(currentFrame * randomSpeed) + p5.random(-centerX, centerX);
		const y = circleMovement * p5.cos(currentFrame * randomSpeed) + p5.random(-centerY, centerY);

		p5.fill(p5.random(150, 255), p5.random(0, 40), p5.random(0, 40));
		// Draw squares using the same size as the former circle diameter
		p5.square(centerX + x, centerY + y, circleRadius);
	}
};

export { draw, setup };
