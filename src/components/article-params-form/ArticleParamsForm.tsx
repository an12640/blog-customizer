import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from 'src/ui/select';
import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { StoryDecorator } from 'src/ui/story-decorator';

export const ArticleParamsForm = () => {

	const [selectedFont, setSelectedFont] = useState(defaultArticleState.fontFamilyOption);
	const [selectedFontSize, setSelectedFontSize] = useState(defaultArticleState.fontSizeOption);

	const [selectedFontColor, setSelectedFontColor] = useState(defaultArticleState.fontColor);
	const [selectedBgColor, setSelectedBgColor] = useState(defaultArticleState.backgroundColor);
	const [selectedWidth, setSelectedWidth] = useState(defaultArticleState.contentWidth);


	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)} />
			<aside className={`${styles.storybookContainer} ${styles.container} ${isOpen ? styles.container_open : ''}`}>
				<form className={styles.form}>
					<Select
						selected={selectedFont}
						onChange={setSelectedFont}
						options={fontFamilyOptions}
						title="Шрифт"
					/>

					<RadioGroup
						selected={selectedFontSize}
						name="font-size-radio"
						onChange={setSelectedFontSize}
						options={fontSizeOptions}
						title="Размер шрифта"
					/>

					<Select
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
						options={fontColors}
						title="Цвет шрифта"
					/>
					<Separator />
					<Select
						selected={selectedBgColor}
						onChange={setSelectedBgColor}
						options={backgroundColors}
						title="Цвет фона"
					/>
					<Select
						selected={selectedWidth}
						onChange={setSelectedWidth}
						options={contentWidthArr}
						title="Цвет контента"
					/>

					<div className={styles.bottomContainer}>
						<Button title="Сбросить" htmlType="reset" type="clear" />
						<Button title="Применить" htmlType="submit" type="apply" />
					</div>
				</form>
			</aside>
		</>
	);
};
