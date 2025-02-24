function AppContainer({ children } : { children : React.ReactNode}) {
  return (
    <div className={"max-w-6xl mx-auto border px-2 md:px-0"}>
      {children}
    </div>
  )
}

export { AppContainer }