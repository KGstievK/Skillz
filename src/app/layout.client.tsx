'use client'
import LayoutSite from '@/components/Layout/LayoutSide'
import ReduxProvider from '@/providers/ReduxProvider'
import { FC, ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}

const LayoutClient: FC<LayoutProps> = ({ children }) => {
	return (
			<ReduxProvider>
        <LayoutSite>{children}</LayoutSite>
      </ReduxProvider>
	)
}

export default LayoutClient
