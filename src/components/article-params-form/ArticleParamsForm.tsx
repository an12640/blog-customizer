import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from 'src/ui/select';
import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { StoryDecorator } from 'src/ui/story-decorator';

type ArticleParamsFormProps = {
	onApply: (state: ArticleStateType) => void;
	onReset: () => void;
};

export const ArticleParamsForm = ({
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [selectedParameters, setSelectedParameters] =
		useState(defaultArticleState);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(selectedParameters);
	};

	const onResetClick = () => {
		setSelectedParameters(defaultArticleState);
		onReset();
	};

	const handleChange = <K extends keyof ArticleStateType>(
		key: K,
		option: ArticleStateType[K]
	) => {
		setSelectedParameters((prevState) => ({
			...prevState,
			[key]: option,
		}));
	};

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
			<aside
				className={`${styles.storybookContainer} ${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form} onSubmit={onSubmit}>
					<Select
						selected={selectedParameters.fontFamilyOption}
						onChange={(value) => handleChange('fontFamilyOption', value)}
						options={fontFamilyOptions}
						title='Шрифт'
					/>

					<RadioGroup
						selected={selectedParameters.fontSizeOption}
						name='font-size-radio'
						onChange={(value) => handleChange('fontSizeOption', value)}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>

					<Select
						selected={selectedParameters.fontColor}
						onChange={(value) => handleChange('fontColor', value)}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={selectedParameters.backgroundColor}
						onChange={(value) => handleChange('backgroundColor', value)}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={selectedParameters.contentWidth}
						onChange={(value) => handleChange('contentWidth', value)}
						options={contentWidthArr}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={onResetClick}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
