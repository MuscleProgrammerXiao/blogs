export default function Container({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white  flex flex-col min-h-screen border-l border-r">
      {children}
    </div>
  )
}
