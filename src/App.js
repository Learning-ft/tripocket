
import { RouterProvider } from 'react-router-dom'
import router from 'Routes/router'

import { ThemeProvider } from 'styled-components'
import theme from 'Styles/theme'

function App() {
	return (
		<>
			{/* 글로벌 스타일로 thme 등록, styled 컴포넌트 직접 import가 아닌 props로 사용가능합니다. 사용해주세요  */}
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	)
}

export default App
