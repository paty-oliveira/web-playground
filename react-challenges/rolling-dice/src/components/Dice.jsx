import './Dice.css';

export function Dice({value}) {
	return (
		<div className="dice-face">
			{
				Array(value)
					.fill(0)
					.map((_, index) =>
						<span key={index} className="dice-dot"/>
					)
			}
		</div>
	)
}
