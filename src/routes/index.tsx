import { createFileRoute } from '@tanstack/react-router'
import LoginView from '../features/Login/views/Login'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginView />
}
