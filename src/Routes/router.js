import { createBrowserRouter } from 'react-router-dom'

import API_KEY from 'Const/apikey'

import ErrorPage from 'Pages/NotFound/notFound'
// import PrivateRoute from './private';
import MainPage from 'Pages/MainPage/mainpage'
import Layout from 'Components/Layout/layout'
import ListPage from 'Pages/LIstPage/listPage'
import MyPage from 'Pages/MyPage/myPage'
import SearchPage from 'Pages/SearchPage/searchPage'
import QaPage from 'Pages/ServicePage/qaPage'
import UpLoadPage from 'Pages/UploadPage/upLoad'
import DetailPage from 'Pages/DetailPage/detailPage'
import LoginPage from 'Pages/AuthPage/login'
import SignUpPage from 'Pages/AuthPage/signUp'
import LandingPage from 'Pages/LandingPage/landing'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		// element : <PrivateRoute/>,
		errorElement: <ErrorPage />,
		// 로그인한 사용자가 접근할수있는 페이지만 관리해야합니다.
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: API_KEY.HOME,
				element: <MainPage />,
			},
			{
				path: API_KEY.LIST,
				element: <ListPage />,
			},
			{
				path: API_KEY.MYPAGE,
				element: <MyPage />,
			},
			{
				path: API_KEY.SEARCH,
				element: <SearchPage />,
			},
			{
				path: API_KEY.QA,
				element: <QaPage />,
			},
			{
				path: API_KEY.UPLOAD,
				element: <UpLoadPage />,
			},
			{
				path: API_KEY.DETAIL,
				element: <DetailPage />,
			},
		],
	},
	// 로그인과 회원가입은 별도관리
	{
		path: API_KEY.LOGIN,
		element: <LoginPage />,
	},
	{
		path: API_KEY.SIGNIN,
		element: <SignUpPage />,
	},
	{
		path: API_KEY.LANDING,
		element: <LandingPage />,
	},
	{
		path: API_KEY.ERROR,
		element: <ErrorPage />,
	},
])

export default router
// 추후 프라이빗 경로 추가한 라우터로 변경 필요 