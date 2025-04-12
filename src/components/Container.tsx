export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-xs sm:w-xl lg:w-2xl space-y-5 sm:space-y-6 mx-auto">
        <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto text-center space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Multi-Step Form</h2>
            <p className="text-sm sm:text-base text-muted">A simple and elegant multi-step form built with Next.js, React Hook Form, and Zod</p>
        </div>
        {children}
      </div>
    )
  }
  