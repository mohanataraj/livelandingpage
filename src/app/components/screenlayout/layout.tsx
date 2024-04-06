import NavigationHeader  from '../navigation/page'

export default function ScreenLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
       
        <NavigationHeader />
        {children}
      </section>
    )
  }