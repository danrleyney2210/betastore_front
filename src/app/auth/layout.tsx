
interface ILayoutStore {
  children: React.ReactNode
}

export default function AuthLayout({ children }: ILayoutStore) {
  return (
    <div>
      {children}
    </div>
  )
}