import type { PropsWithChildren } from 'react'


import NavigationHeader  from '../navigation/page'
import  cn from 'classnames'

function ScreenLayout({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={cn(
        'relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl',
        className,
      )}
    >
     <NavigationHeader />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
    </div>
  )
}

export default ScreenLayout