'use client'
import LayoutSite from '@/components/Layout/LayoutSide'
import ReduxProvider from '@/providers/ReduxProvider'
import { FC } from 'react'

interface LayoutClientType {
  children: React.ReactNode
}


const LayoutClient: FC<LayoutClientType> = ({ children }) => {
	return (
			<ReduxProvider>
        <LayoutSite>{children}</LayoutSite>
      </ReduxProvider>
	)
}

export default LayoutClient
