export default function SignupLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <p>Hi Sign up layout</p>
   
        {children}
      </section>
    )
  }