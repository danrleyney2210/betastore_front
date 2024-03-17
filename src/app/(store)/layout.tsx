

interface ILayoutStore {
  children: React.ReactNode
}

export default function StoreLayout({ children }: ILayoutStore) {
  return (
    <div>
      {children}
    </div>
  )
}