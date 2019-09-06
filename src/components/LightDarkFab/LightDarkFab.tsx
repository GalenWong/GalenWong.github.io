import React, { useContext } from 'react';
import { Fab } from '@material-ui/core';
import LightDarkContext from '../LightDarkContext/LightDarkContext';

import SunnyIcon from '@material-ui/icons/WbSunny';
import NightIcon from '@material-ui/icons/Brightness3';
import { FabProps } from '@material-ui/core/Fab';

function LightDarkFab(props: FabProps) {
	const { theme, changeTheme } = useContext(LightDarkContext);
	return (
		<Fab
			color={theme === 'dark' ? 'default' : 'primary'}
			size="medium"
			onClick={() => changeTheme(!(theme === 'dark'))}
			{...props}
		>
			{ theme === 'dark' ? <NightIcon /> : <SunnyIcon /> }
		</Fab>
	);
}

export default LightDarkFab;