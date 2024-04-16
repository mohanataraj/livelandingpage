import ScreenLayout from "../components/screenlayout/page"

export default function FeedbackLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-[#FFDB57]">
        {/* Include shared UI here e.g. a header or sidebar */}
        <ScreenLayout />
   
        {children}
      </section>
    )
  }