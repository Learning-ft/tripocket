import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header/header'
import Footer from './Footer/footer'

const Layout = () => {
	return (
		<>
			<wrapper>
				<Header />
				<Outlet />
				<Footer />
			</wrapper>
		</>
	)
}

export default Layout
